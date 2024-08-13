import React, { useContext } from "react";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
    Avatar,
    Button,
    IconButton,
    Typography,
    useColorScheme,
} from "@mui/material";
import { purple, blue, green, orange, pink, grey } from "@mui/material/colors";
import { MyModeContext } from "../App";
import { useTheme } from "@emotion/react";
import "../App.css";

const tikIconStyle = {
    width: " 15px",
    marginTop: "-7px",
    color: "white",
    marginLeft: "2px",
};

const ChipWrapper = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  /* background-color: #f7f9fc; */
`;

const ColorButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  /* background-color: (); */
  background: ${(props) => (props.colors ? props.colors : "white")};
  cursor: pointer;
`;

export default function Navbar() {
    let BAG = useContext(MyModeContext);
    let { setMode, mode, setTheme, theme } = BAG;

    const toggleMyTheme = () => {
        setMode((prev) => {
            if (prev == "LIGHT") {
                localStorage.setItem("mode", "DARK")
                return "DARK";
            } else {
                localStorage.setItem("mode", "LIGHT")
                return "LIGHT";
            }
        });
    };

    const themes = useTheme();

    const ChipWrapperBackground = themes.palette.chip_background.main;
    const text = themes.palette.text.main;

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const SET_THEME = (theme) => {
        setTheme(prev => theme);
        localStorage.setItem("theme", theme);
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Optional: adds a smooth scrolling effect
        });
    }



    return (
        <div className="shadow-sm" style={{ position: "relative" }}>
            <div
                className="container d-flex justify-content-between align-items-center"
                style={{ height: "60px" }}
            >
                <div className="d-flex align-items-center">
                    <Avatar sizes="lg" />
                    {/* <Typography variant="body1" className="ms-2" color="primary" sx={{ fontSize: "26px", fontFamily: "Pacifico", fontWeight: "800 !important" }}>Saree's World</Typography> */}
                </div>
                <div className="d-flex align-items-center">
                    <ChipWrapper
                        className="chipWrapper"
                        style={{ background: ChipWrapperBackground }}
                    >
                        <ColorButton
                            className="me-2"
                            colors={purple[500]}
                            onClick={() => SET_THEME("purple")}
                        >
                            {theme == "purple" && (
                                <CheckIcon className="" sx={tikIconStyle} />
                            )}
                        </ColorButton>

                        <ColorButton
                            className="me-2"
                            colors={green[500]}
                            onClick={() => SET_THEME("green")}
                        >
                            {theme == "green" && <CheckIcon className="" sx={tikIconStyle} />}
                        </ColorButton>

                        <ColorButton
                            className="me-2"
                            colors={orange[500]}
                            onClick={() => SET_THEME("orange")}
                        >
                            {theme == "orange" && (
                                <CheckIcon className="" sx={tikIconStyle} />
                            )}
                        </ColorButton>

                        <ColorButton
                            className="me-2"
                            colors={blue[500]}
                            onClick={() => SET_THEME("blue")}
                        >
                            {theme == "blue" && <CheckIcon className="" sx={tikIconStyle} />}
                        </ColorButton>

                        <ColorButton colors={pink[800]} onClick={() => SET_THEME("pink")}>
                            {theme == "pink" && <CheckIcon className="" sx={tikIconStyle} />}
                        </ColorButton>
                    </ChipWrapper>

                    <IconButton className="ms-1" color="primary" onClick={toggleMyTheme}>
                        {mode == "LIGHT" ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>

                    <Button
                        onClick={() => scrollToSection('about')}
                        variant="standard"
                        color="primary"
                        className="me-1 myButton"
                        sx={{ color: mode == "LIGHT" ? grey[900] : grey[50] }}
                    >
                        About
                    </Button>
                    <Button
                        onClick={scrollToBottom}
                        variant="contained"
                        color="primary"
                        className="shadow-none myButton"
                    >
                        Contact me
                    </Button>
                </div>
            </div>
        </div>
    );
}
