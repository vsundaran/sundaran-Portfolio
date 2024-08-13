import { createTheme } from "@mui/material";
import { blue, green, grey, orange, pink, purple } from "@mui/material/colors";

const LIGHT_DEFAULT = {
    backgroundOne: {
        main: grey[50],
    },
    chip_background: {
        main: "#f7f9fc",
    },
    hero_background: {
        main: "#f7f9fc",
    },
    icon_background: {
        main: "#f2e8f6",
    },
    text: {
        main: grey[800],
    },
    text_children_one: {
        main: grey[600],
    },
    text_children_two: {
        main: grey[980],
    },
    card_background: {
        main: "#ffffff",
    },

    type: 'light',
}

const DARK_DEFAULT = {
    backgroundOne: {
        main: "#2d364e",
    },
    card_background: {
        main: "#222b45",
    },
    chip_background: {
        main: "#1a2138",
    },
    hero_background: {
        main: "#1a2138",
    },
    icon_background: {
        main: "#2c2a4f",
    },
    text: {
        main: grey[100],
    },
    text_children_one: {
        main: grey[500],
    },
    text_children_two: {
        main: grey[200],
    },
    type: 'dark',
}

export const LightThemes = {
    purple: createTheme({
        palette: {
            primary: {
                main: purple[500],
            },
            ...LIGHT_DEFAULT,
        },
    }),

    blue: createTheme({
        palette: {
            primary: {
                main: blue[500],
            },
            ...LIGHT_DEFAULT,
        },
    }),
    green: createTheme({
        palette: {
            primary: {
                main: green[500],
            },
            ...LIGHT_DEFAULT,
        },
    }),
    orange: createTheme({
        palette: {
            primary: {
                main: orange[500],
            },
            ...LIGHT_DEFAULT,
        },
    }),
    pink: createTheme({
        palette: {
            primary: {
                main: pink[500],
            },
            ...LIGHT_DEFAULT,
        },
    }),
};

export const DarkThemes = {
    purple: createTheme({
        palette: {
            primary: {
                main: purple[500],
            },
            ...DARK_DEFAULT,
        },
    }),

    blue: createTheme({
        palette: {
            primary: {
                main: blue[500],
            },
            ...DARK_DEFAULT,
        },
    }),
    green: createTheme({
        palette: {
            primary: {
                main: green[500],
            },
            ...DARK_DEFAULT,
        },
    }),
    orange: createTheme({
        palette: {
            primary: {
                main: orange[500],
            },
            ...DARK_DEFAULT,
        },
    }),
    pink: createTheme({
        palette: {
            primary: {
                main: pink[500],
            },
            ...DARK_DEFAULT,
        },
    }),
};
