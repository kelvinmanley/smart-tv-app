const Colors = {
  Orange: "#e69224",
  White: "#fff",
  LightGrey: "#dee2e6",
  Grey: "#ced4da",
  MidGrey: "#adb5bd",
  DarkerGrey: "#6c757d",
  DarkestGrey: "#343a40",
  Charcoal: "#212529",
  Black: "#000",
};

const CircleButtonSwatch = {
  color: { light: Colors.DarkerGrey, dark: Colors.Grey },
  backgroundColor: {
    light: Colors.Grey,
    dark: Colors.DarkestGrey,
  },
  hover: {
    light: Colors.DarkestGrey,
    dark: Colors.Orange,
  },
};

const PageWrapperSwatch = {
  gradient: {
    light: {
      stop1: Colors.MidGrey,
      stop2: Colors.White,
    },
    dark: {
      stop1: Colors.Black,
      stop2: Colors.Charcoal,
    },
  },
};

const PageTitleSwatch = {
  color: { light: Colors.DarkestGrey, dark: Colors.Grey },
};

const ImageViewerSwatch = {
  backgroundColor: {
    light: Colors.LightGrey,
    dark: Colors.Charcoal,
  },
  closeButtonColor: {
    light: Colors.DarkerGrey,
    dark: Colors.Grey,
  },
};

export {
  CircleButtonSwatch,
  PageWrapperSwatch,
  PageTitleSwatch,
  ImageViewerSwatch,
  Colors,
};
