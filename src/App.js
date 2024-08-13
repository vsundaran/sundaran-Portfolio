import './App.css';
import React, { createContext, useRef, useState } from 'react';
import logo from './logo.svg';
import { Home } from './components/pages/home';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { purple, blue, green, orange, pink, grey } from '@mui/material/colors';
import { DarkThemes, LightThemes } from './theme/theme';

export const MyModeContext = createContext();

function App() {

  let [mode, setMode] = useState(localStorage.getItem("mode") || "LIGHT");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'purple');
  const [details, setDetails] = useState({ name: "", email: "", message: "" });

  const contactRef = useRef(null);


  let BAG = {
    mode: mode,
    setMode: setMode,
    theme: theme,
    setTheme: setTheme,
    details: details,
    setDetails: setDetails
  }



  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: purple[500],
  //       white: purple[50],
  //     },
  //     secondary: {
  //       main: blue[500],
  //     },
  //     leaf: {
  //       main: green[500],
  //     },
  //     sun: {
  //       main: orange[500],
  //     },
  //     lotus: {
  //       main: pink[500],
  //     },
  //     // default: {
  //     //   main: "white",
  //     // }
  //   },
  // });

  return (
    <ThemeProvider theme={mode == "LIGHT" ? LightThemes[theme] : DarkThemes[theme]}>
      <MyModeContext.Provider value={BAG}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Home contactRef={contactRef} />} />
        </Routes>
      </MyModeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
