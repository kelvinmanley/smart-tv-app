import { useFeature } from "@growthbook/growthbook-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import * as Comp from "../components";
import {
  getTopics,
  getTopicPhotos,
  disableLeftArrow,
  disableRightArrow,
} from "../helpers";
import * as UI from "../ui";
import { ThemeProvider } from "styled-components";

const Home = () => {
  const featureFlag = useFeature("access").on;

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

  const topicsPage = 2;
  const topicsPerPage = 10;

  const topicPhotosPage = 1;
  const topicPhotosPerPage = 20;

  const handleNavClick = (directionNum) => {
    // This resets the images position if the window width has been changed
    // - if window width hasn't changed, shift the images is the intended direction
    prevWindowWidth !== window.innerWidth
      ? setImagesColumnIndex(0)
      : setImagesColumnIndex(imagesColumnIndex + directionNum);

    setPrevWindowWidth(window.innerWidth);
  };

  // Start up actions
  useEffect(() => {
    getTopics(topicsPage, topicsPerPage).then((response) => {
      setTopicsState(response.data);
      setDisplayedTopicState({
        slug: response.data[0].slug,
        title: response.data[0].title,
      });
      setPrevWindowWidth(window.innerWidth);
    });
  }, []);

  // Pulls images for the displayed topic
  useEffect(() => {
    if (displayedTopicState) {
      getTopicPhotos(
        displayedTopicState.slug,
        topicPhotosPage,
        topicPhotosPerPage
      ).then((response) => {
        setTopicPhotosState(response.data);
      });
    }
  }, [displayedTopicState]);

  // useEffect used to manage the serverside rendering conflict
  useEffect(() => {
    setPageState(featureFlag);
  }, [featureFlag]);

  return pageState ? (
    // ThemeProvider passed props via context
    <ThemeProvider theme={{ mode: uiMode }}>
      <Comp.PageWrapper>
        <Comp.PageBackground />
        <Comp.PageTitle
          title="Smart TV App"
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
