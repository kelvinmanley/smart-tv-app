import { useFeature } from "@growthbook/growthbook-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import * as Comp from "../components";
import {
  getTopics,
  getTopicPhotos,
  disableLeftArrow,
  disableRightArrow,
  transformPhotoData,
  extractSlugsAndTitles,
} from "../helpers";
import * as UI from "../ui";
import { ThemeProvider } from "styled-components";

// Determines the topic page and the number of topics to pull from Unsplash
const topicsPage = 2;
const topicsPerPage = 10;

// Determines the topic photo page and the number of photos to pull from Unsplash
const topicPhotosPage = 1;
const topicPhotosPerPage = 20;

const Home = ({ ssrTopicsAndPhotos }) => {
  // Feature flags for toggling app access and SSR
  const featureFlag = useFeature("access").on;
  const enableServerSideRendering = useFeature(
    "enable_server_side_rendering"
  ).on;

  const [pageState, setPageState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [topicsState, setTopicsState] = useState();
  const [displayedTopicState, setDisplayedTopicState] = useState();
  const [topicPhotosState, setTopicPhotosState] = useState();
  const [uiMode, setUiMode] = useState(true);
  const [imagesColumnIndex, setImagesColumnIndex] = useState(0);
  const [prevWindowWidth, setPrevWindowWidth] = useState();
  const [imageView, setImageView] = useState({
    on: false,
    url: "",
    description: "",
    width: 0,
    height: 0,
  });

  const handleNavClick = (directionNum) => {
    // This resets the images position if the window width has been changed
    // - if window width hasn't changed, shift the images is the intended direction
    prevWindowWidth !== window.innerWidth
      ? setImagesColumnIndex(0)
      : setImagesColumnIndex(imagesColumnIndex + directionNum);

    setPrevWindowWidth(window.innerWidth);
  };

  // On start up, topics are pulled in and set. This is either done via SSR or an API call
  useEffect(() => {
    if (enableServerSideRendering) {
      // Extract the slugs and titles from the data
      const topics = extractSlugsAndTitles(ssrTopicsAndPhotos);
      setTopicsState(topics);
      setDisplayedTopicState({
        slug: topics[0].slug,
        title: topics[0].title,
      });
    } else {
      getTopics(topicsPage, topicsPerPage).then((response) => {
        setTopicsState(response.data);
        setDisplayedTopicState({
          slug: response.data[0].slug,
          title: response.data[0].title,
        });
      });
    }
    // Window width is store for responsiveness calculations
    setPrevWindowWidth(window.innerWidth);
  }, [ssrTopicsAndPhotos]);

  // Images are pulled in and set according to the set topic
  useEffect(() => {
    if (displayedTopicState) {
      if (enableServerSideRendering) {
        const setTopicPhotos = transformPhotoData(
          ssrTopicsAndPhotos,
          displayedTopicState.slug
        );
        setTopicPhotosState(setTopicPhotos);
      } else {
        getTopicPhotos(
          displayedTopicState.slug,
          topicPhotosPage,
          topicPhotosPerPage
        ).then((response) => {
          setTopicPhotosState(response.data);
        });
      }
    }
  }, [displayedTopicState, ssrTopicsAndPhotos]);

  // useEffect utilised to manage a server vs client side rendering conflict
  useEffect(() => {
    setPageState(featureFlag);
  }, [featureFlag]);

  return pageState ? (
    // ThemeProvider passed props via context
    <ThemeProvider theme={{ mode: uiMode }}>
      <Comp.PageWrapper>
        <Comp.PageBackground />
        <Comp.PageTitle
          title={enableServerSideRendering ? "Smart TV App +" : "Smart TV App"}
          topic={displayedTopicState?.title}
        />
        {/* –––––––––––––– Central Navigation Bar –––––––––––––– */}
        <Comp.NavWrapper state={menuState}>
          <Comp.CircleButton
            onClick={() => handleNavClick(1)}
            disabled={disableLeftArrow(imagesColumnIndex)}
          >
            <UI.Arrow />
          </Comp.CircleButton>
          <Comp.CircleButton onClick={() => setMenuState(true)}>
            <UI.Menu />
          </Comp.CircleButton>
          <Comp.CircleButton onClick={() => setUiMode(!uiMode)}>
            <UI.LightBulb />
          </Comp.CircleButton>
          <Comp.CircleButton
            onClick={() => handleNavClick(-1)}
            disabled={disableRightArrow(imagesColumnIndex, window.innerWidth)}
          >
            <UI.Arrow toggleDirection />
          </Comp.CircleButton>
        </Comp.NavWrapper>
        {/* –––––––––––––– Menu Side Bar –––––––––––––– */}
        <Comp.MenuWrapper state={menuState}>
          <Comp.MenuHeader handleClick={() => setMenuState(false)} />
          {!topicsState ? (
            <Comp.LoaderWrapper>
              <Comp.Loader />
            </Comp.LoaderWrapper>
          ) : (
            <>
              {topicsState.map(({ title, slug }, index) => (
                <Comp.MenuItem
                  key={index}
                  onClick={() => {
                    setDisplayedTopicState({
                      slug,
                      title,
                    });
                    setMenuState(false);
                    setImagesColumnIndex(0);
                  }}
                >
                  {title}
                </Comp.MenuItem>
              ))}
            </>
          )}
        </Comp.MenuWrapper>
        {/* –––––––––––––– Image Gallery Grid –––––––––––––– */}
        {!topicPhotosState ? (
          <Comp.LoaderWrapper>
            <Comp.Loader />
          </Comp.LoaderWrapper>
        ) : (
          <Comp.GalleryWrapper>
            <Comp.GalleryInnerWrapper horizontalIndex={imagesColumnIndex}>
              {topicPhotosState.map(
                ({ urls, description, width, height }, index) => (
                  <Comp.ImageWrapper
                    key={index}
                    mode={menuState}
                    onClick={() =>
                      setImageView({
                        on: true,
                        url: urls.small,
                        description,
                        width,
                        height,
                      })
                    }
                  >
                    <Image
                      src={urls.small}
                      alt={description || displayedTopicState.title}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={urls.small}
                    />
                  </Comp.ImageWrapper>
                )
              )}
            </Comp.GalleryInnerWrapper>
          </Comp.GalleryWrapper>
        )}
        {/* –––––––––––––– Image Viewer –––––––––––––– */}
        {imageView.on && (
          <Comp.ImageViewer
            url={imageView.url}
            description={imageView.description}
            width={imageView.width}
            height={imageView.height}
            topic={displayedTopicState.title}
            handleClick={() =>
              setImageView({
                on: false,
                url: "",
                description: "",
                width: 0,
                height: 0,
              })
            }
          />
        )}
        ;
      </Comp.PageWrapper>
    </ThemeProvider>
  ) : (
    /* –––––––––––––– Temporary Page –––––––––––––– */
    <Comp.WipHeading>Watch this space...</Comp.WipHeading>
  );
};

export default Home;

// This functions runs on the server side and sends the pre-processed props to the client side
export const getServerSideProps = async () => {
  // Get topics and refine to core data
  const rawTopics = await getTopics(topicsPage, topicsPerPage);
  const refinedTopics = rawTopics.data.map((data) => ({
    slug: data.slug,
    title: data.title,
  }));

  // Pulls in photos according to topic and combines them with topic data
  const ssrTopicsAndPhotos = await Promise.all(
    refinedTopics.map(async (topicData) => {
      const photoDataByTopic = await getTopicPhotos(
        topicData.slug,
        topicPhotosPage,
        topicPhotosPerPage
      );

      // Refining the photo data to reduce payload
      const refinedPhotos = photoDataByTopic.data.map((photoData) => ({
        description: photoData.description,
        width: photoData.width,
        height: photoData.height,
        urls: { small: photoData.urls.small },
      }));

      return { ...topicData, ...refinedPhotos };
    })
  );

  return {
    props: { ssrTopicsAndPhotos },
  };
};
