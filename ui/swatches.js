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
  background: { light: Colors.LightGrey, dark: Colors.DarkestGrey },
};

export { CircleButtonSwatch, PageWrapperSwatch, Colors };
