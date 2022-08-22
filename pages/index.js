import { useFeature } from "@growthbook/growthbook-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import * as UI from "../components";
import { getTopics, getTopicPhotos } from "../helpers";

const Home = () => {
  const featureFlag = useFeature("access").on;
  const [pageState, setPageState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [topicsState, setTopicsState] = useState();
  const [displayedTopicState, setDisplayedTopicState] = useState();
  const [topicPhotosState, setTopicPhotosState] = useState();

  const topicsPage = 1;
  const topicsPerPage = 10;

  const topicPhotosPage = 1;
  const topicPhotosPerPage = 10;

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
    <UI.PageWrapper>
      <UI.NavWrapper>
        <button>LEFT</button>
        <button onClick={() => setMenuState(!menuState)}>MENU</button>
        <button>RIGHT</button>
      </UI.NavWrapper>
      <UI.CloseButton>CLOSE</UI.CloseButton>
      {!topicsState ? (
        <>TODO: LOADING WHEEL</>
      ) : (
        menuState && (
          <UI.MenuWrapper>
            {topicsState.map(({ title }, index) => (
              <UI.MenuItem key={index}>{title}</UI.MenuItem>
            ))}
          </UI.MenuWrapper>
        )
      )}
      {!topicPhotosState ? (
        <>TODO: LOADING WHEEL</>
      ) : (
        <UI.GalleryWrapper>
          {topicPhotosState.map(({ urls, description }, index) => (
            <UI.ImageWrapper key={index}>
              <Image
                src={urls.small}
                alt={description || displayedTopicState.title}
                layout="fill"
                objectFit="cover"
              />
            </UI.ImageWrapper>
          ))}
        </UI.GalleryWrapper>
      )}
    </UI.PageWrapper>
  ) : (
    <UI.WipHeading>Watch this space...</UI.WipHeading>
  );
};

export default Home;
