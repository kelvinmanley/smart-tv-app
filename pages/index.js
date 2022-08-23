import { useFeature } from "@growthbook/growthbook-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import * as Comp from "../components";
import { getTopics, getTopicPhotos } from "../helpers";
import * as UI from "../ui";

const Home = () => {
  const featureFlag = useFeature("access").on;
  const [pageState, setPageState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [topicsState, setTopicsState] = useState();
  const [displayedTopicState, setDisplayedTopicState] = useState();
  const [topicPhotosState, setTopicPhotosState] = useState();
  const [uiMode, setUiMode] = useState(true);

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

  useEffect(() => {
    setPageState(featureFlag);
  }, [featureFlag]);

  return pageState ? (
    <Comp.PageWrapper>
      <Comp.PageBackground mode={uiMode} />
      <Comp.NavWrapper>
        <Comp.CircleButton mode={uiMode}>
          <UI.Arrow mode={uiMode} />
        </Comp.CircleButton>
        <Comp.CircleButton
          mode={uiMode}
          onClick={() => setMenuState(!menuState)}
        >
          <UI.Menu mode={uiMode} />
        </Comp.CircleButton>
        <Comp.CircleButton mode={uiMode} onClick={() => setUiMode(!uiMode)}>
          <UI.LightBulb />
        </Comp.CircleButton>
        <Comp.CircleButton mode={uiMode}>
          <UI.Arrow mode={uiMode} toggleDirection />
        </Comp.CircleButton>
      </Comp.NavWrapper>
      {!topicsState ? (
        <>TODO: LOADING WHEEL</>
      ) : (
        menuState && (
          <Comp.MenuWrapper mode={uiMode}>
            <Comp.MenuHeader
              mode={uiMode}
              handleClick={() => setMenuState(false)}
            />
            {topicsState.map(({ title }, index) => (
              <Comp.MenuItem key={index}>{title}</Comp.MenuItem>
            ))}
          </Comp.MenuWrapper>
        )
      )}
      {!topicPhotosState ? (
        <>TODO: LOADING WHEEL</>
      ) : (
        <Comp.GalleryWrapper>
          <Comp.GalleryInnerWrapper>
            {topicPhotosState.map(({ urls, description }, index) => (
              <Comp.ImageWrapper key={index}>
                <Image
                  src={urls.small}
                  alt={description || displayedTopicState.title}
                  layout="fill"
                  objectFit="cover"
                />
              </Comp.ImageWrapper>
            ))}
          </Comp.GalleryInnerWrapper>
        </Comp.GalleryWrapper>
      )}
    </Comp.PageWrapper>
  ) : (
    <Comp.WipHeading>Watch this space...</Comp.WipHeading>
  );
};

export default Home;
