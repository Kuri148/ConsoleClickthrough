// Single source of truth for the console's menu tree.
// Button hitboxes are defined ONCE here (BUTTON_LAYOUT) because every photo
// is shot from the same fixed camera position — physical button positions
// never move between screens, only which buttons are active/where they lead.
//
// Coordinates are percentages of the image's rendered box (0-100), so the
// overlay scales with the image regardless of display size.
//
// This is placeholder/example data standing in for the real menu tree until
// the photo shoot happens. Replace with the real screens + coordinates built
// from the on-site shot log, without touching index.html's logic.

const BUTTON_LAYOUT = {
  up:         { top: 8,  left: 78, width: 10, height: 8 },
  down:       { top: 24, left: 78, width: 10, height: 8 },
  left:       { top: 16, left: 68, width: 10, height: 8 },
  right:      { top: 16, left: 88, width: 10, height: 8 },
  select:     { top: 16, left: 78, width: 10, height: 8 },
  back:       { top: 90, left: 4,  width: 14, height: 8 },
  quickstart: { top: 4,  left: 4,  width: 18, height: 8 },
  programs:   { top: 4,  left: 24, width: 18, height: 8 },
  settings:   { top: 4,  left: 44, width: 18, height: 8 },
  start:      { top: 90, left: 40, width: 20, height: 8 },
  stop:       { top: 90, left: 62, width: 20, height: 8 },
};

const MENU_MAP = {
  "00-home": {
    image: "00-home.jpg",
    buttons: {
      up: "00-home",
      down: "00-home",
      select: "01-quickstart",
      quickstart: "01-quickstart",
      programs: "02-programs-menu",
      settings: "03-settings-menu",
    },
    description: "Home screen. Idle state — select a workout mode or open Programs/Settings.",
  },

  "01-quickstart": {
    image: "01-quickstart.jpg",
    buttons: {
      back: "00-home",
      start: "01-quickstart-running",
    },
    description: "Quick Start confirmation. Press Start to begin an unstructured workout.",
  },
  "01-quickstart-running": {
    image: "01-quickstart-running.jpg",
    buttons: {
      stop: "00-home",
    },
    description: "Quick Start in progress. Live stats (time/speed/distance) shown; Stop ends the workout.",
  },

  "02-programs-menu": {
    image: "02-programs-menu.jpg",
    buttons: {
      up: "02-programs-menu",
      down: "02-programs-menu",
      select: "02-programs-cardio",
      back: "00-home",
    },
    description: "Programs list. Scroll with up/down, Select to open a highlighted program.",
  },
  "02-programs-cardio": {
    image: "02-programs-cardio.jpg",
    buttons: {
      back: "02-programs-menu",
      start: "02-programs-cardio-running",
    },
    description: "Cardio program preview screen. Start begins the preset interval workout.",
  },
  "02-programs-cardio-running": {
    image: "02-programs-cardio-running.jpg",
    buttons: {
      stop: "00-home",
    },
    description: "Cardio program running. Incline/speed follow the preset profile automatically.",
  },

  "03-settings-menu": {
    image: "03-settings-menu.jpg",
    buttons: {
      up: "03-settings-menu",
      down: "03-settings-menu",
      select: "03-settings-incline",
      back: "00-home",
    },
    description: "Settings list. Scroll with up/down, Select to edit a highlighted setting.",
  },
  "03-settings-incline": {
    image: "03-settings-incline.jpg",
    buttons: {
      up: "03-settings-incline",
      down: "03-settings-incline",
      back: "03-settings-menu",
    },
    description: "Incline calibration setting. Up/down adjust the value; Back saves and returns.",
  },
};

const START_SCREEN = "00-home";
