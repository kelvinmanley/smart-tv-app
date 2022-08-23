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

const Home = () => {
  const featureFlag = useFeature("access").on;

  const [pageState, setPageState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [topicsState, setTopicsState] = useState();
  const [displayedTopicState, setDisplayedTopicState] = useState();
  const [topicPhotosState, setTopicPhotosState] = useState();
  const [uiMode, setUiMode] = useState(true);
  const [imagesColumnIndex, setImagesColumnIndex] = useState(0);

  const topicsPage = 2;
  const topicsPerPage = 10;

  const topicPhotosPage = 1;
  const topicPhotosPerPage = 20;

  // Start up actions
  useEffect(() => {
    getTopics(topicsPage, topicsPerPage).then((response) => {
      setTopicsState(response.data);
      setDisplayedTopicState({
        slug: response.data[0].slug,
        title: response.data[0].title,
      });
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
    <Comp.PageWrapper>
      <Comp.PageBackground mode={uiMode} />
      <Comp.PageTitle
        title="Smart TV App"
        topic={displayedTopicState?.title}
        mode={uiMode}
      />

      {/* –––––––––––––– Central Navigation Bar –––––––––––––– */}
      <Comp.NavWrapper state={menuState}>
        <Comp.CircleButton
          mode={uiMode}
          onClick={() => setImagesColumnIndex(imagesColumnIndex + 1)}
          disabled={disableLeftArrow(imagesColumnIndex)}
        >
          <UI.Arrow mode={uiMode} />
        </Comp.CircleButton>
        <Comp.CircleButton mode={uiMode} onClick={() => setMenuState(true)}>
          <UI.Menu mode={uiMode} />
        </Comp.CircleButton>
        <Comp.CircleButton mode={uiMode} onClick={() => setUiMode(!uiMode)}>
          <UI.LightBulb />
        </Comp.CircleButton>
        <Comp.CircleButton
          mode={uiMode}
          onClick={() => setImagesColumnIndex(imagesColumnIndex - 1)}
          disabled={disableRightArrow(imagesColumnIndex, window.innerWidth)}
        >
          <UI.Arrow mode={uiMode} toggleDirection />
        </Comp.CircleButton>
      </Comp.NavWrapper>
      {!topicsState ? (
        <>TODO: LOADING WHEEL</>
      ) : (
        /* –––––––––––––– Menu Side Bar –––––––––––––– */
        <Comp.MenuWrapper mode={uiMode} state={menuState}>
          <Comp.MenuHeader
            mode={uiMode}
            handleClick={() => setMenuState(false)}
          />
          {topicsState.map(({ title, slug }, index) => (
            <Comp.MenuItem
              key={index}
              onClick={() => {
                console.log(slug);
                setDisplayedTopicState({
                  slug,
                  title,
                });
                setMenuState(false);
              }}
            >
              {title}
            </Comp.MenuItem>
          ))}
        </Comp.MenuWrapper>
      )}
      {!topicPhotosState ? (
        <>TODO: LOADING WHEEL</>
      ) : (
        /* –––––––––––––– Image Gallery Grid –––––––––––––– */
        <Comp.GalleryWrapper>
          <Comp.GalleryInnerWrapper horizontalIndex={imagesColumnIndex}>
            {topicPhotosState.map(({ urls, description }, index) => (
              <Comp.ImageWrapper key={index} mode={menuState}>
                <Image
                  src={urls.small}
                  alt={description || displayedTopicState.title}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={urls.small}
                />
              </Comp.ImageWrapper>
            ))}
          </Comp.GalleryInnerWrapper>
        </Comp.GalleryWrapper>
      )}
    </Comp.PageWrapper>
  ) : (
    /* –––––––––––––– Temporary Page –––––––––––––– */
    <Comp.WipHeading>Watch this space...</Comp.WipHeading>
  );
};

export default Home;
