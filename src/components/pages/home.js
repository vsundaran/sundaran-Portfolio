import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { MyModeContext } from "../../App";
import { red } from "@mui/material/colors";
import Navbar from "../../elements/navbar";
import { useTheme } from "@mui/material/styles";
import DrawerAppBar from "../../elements/navbar";

import BlueSitting from "../../assects/images/BlueSitting.svg";
import GreenSetting from "../../assects/images/GreenSetting.svg";
import OrangeSitting from "../../assects/images/OrangeSitting.svg";
import PurpleSitting from "../../assects/images/PurpleSitting.svg";
import DeepPinkStiing from "../../assects/images/DeepPinkStiing.svg";

import ProfileBlue from "../../assects/images/ProfileBlue.svg";
import ProfileGreen from "../../assects/images/ProfileGreen.svg";
import ProfileOrange from "../../assects/images/ProfileOrange.svg";
import ProfilePurple from "../../assects/images/ProfilePurple.svg";
import ProfileDeepPink from "../../assects/images/ProfileDeepPink.svg";

import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";

import Project_image_blue from "../../assects/images/Project_image_blue.svg";
import Project_image_green from "../../assects/images/Project_image_green.svg";
import Project_image_orange from "../../assects/images/Project_image_orange.svg";
import Project_image_purple from "../../assects/images/Project_image_purple.svg";
import Project_image_deepPurple from "../../assects/images/Project_image_deepPurple.svg";

import AboutImageBlue from "../../assects/images/AboutImageBlue.svg";
import AboutImageOrange from "../../assects/images/AboutImageOrange.svg";
import AboutImageGreen from "../../assects/images/AboutImageGreen.svg";
import AboutImagePurple from "../../assects/images/AboutImagePurple.svg";
import AboutImageDeepPink from "../../assects/images/AboutImageDeepPink.svg";

import ContactPurple from "../../assects/images/ContactPurple.svg";
import ContactGreen from "../../assects/images/ContactGreen.svg";
import ContactOrange from "../../assects/images/ContactOrange.svg";
import ContactPink from "../../assects/images/ContactDeepPurple.svg";
import ContactBlue from "../../assects/images/ContactBlue.svg";

import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import StorageIcon from '@mui/icons-material/Storage';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import LaptopIcon from '@mui/icons-material/Laptop';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    CssBaseline,
    Divider,
    TextField,
    Typography,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import CssOutlinedIcon from "@mui/icons-material/CssOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import DoNotStepOutlinedIcon from "@mui/icons-material/DoNotStepOutlined";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import JavascriptOutlinedIcon from "@mui/icons-material/JavascriptOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";

import PaidIcon from "@mui/icons-material/Paid";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { BorderLinearProgress } from "../../elements/muiBar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

// Email
import emailjs from "@emailjs/browser";

export const Home = React.memo(({ contactRef }) => {
    const themes = useTheme();
    const background = themes.palette.backgroundOne.main;
    const hero_background = themes.palette.hero_background.main;
    const text = themes.palette.text.main;

    const primary = themes.palette.primary.main;

    let BAG = useContext(MyModeContext);

    let { theme, setDetails, details } = BAG;

    let boxStyle = {
        background: background,
        transition: `backgroundColor 500ms ease`,
    };

    let Division = styled.div`
    background: background;
    transition: background-color 500ms ease;
  `;
    const ChipWrapperBackground = themes.palette.chip_background.main;
    const iconBackground = themes.palette.icon_background.main;
    const text_children_one = themes.palette.text_children_one.main;

    const text_children_two = themes.palette.text_children_two.main;
    const card_background = themes.palette.card_background.main;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: localStorage.getItem("name"),
            from_email: localStorage.getItem("email"),
            message: localStorage.getItem("message"),
        };

        emailjs
            .send(
                "service_ak438hb", // Replace with your service ID
                "template_zb7mrdv", // Replace with your template ID
                templateParams,
                "s_0jvahz0O12wC-Q0" // Replace with your user ID (EmailJS Account)
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Message sent successfully!");
                    localStorage.setItem("name", "")
                    localStorage.setItem("email", "")
                    localStorage.setItem("message", "")
                },
                (err) => {
                    console.log("FAILED...", err);
                    alert("Failed to send message.");
                }
            );
    };

    const updateState = (event, payload) => {
        if (payload == "name") {
            localStorage.setItem("name", event.target.value)
            // setDetails((prev) => {
            //     return {
            //         ...prev,
            //         name: event.target.value,
            //     };
            // });
        } else if (payload == "message") {
            localStorage.setItem("message", event.target.value)
            // setDetails((prev) => {
            //     return {
            //         ...prev,
            //         message: event.target.value,
            //     };
            // });
        } else {
            localStorage.setItem("email", event.target.value)
            // setDetails((prev) => {
            //     return {
            //         ...prev,
            //         email: event.target.value,
            //     };
            // });
        }
    };

    return (
        <Division style={{ background: background }} className="easein">
            <Navbar contactRef={contactRef} />
            {/* section One */}
            <Box sx={{ minHeight: "80vh", background: hero_background }}>
                <Box
                    className="container py-4 d-lg-flex align-items-center"
                    sx={{ minHeight: "80vh" }}
                >
                    <div className="w-100">
                        <Typography variant="h2" color={text} sx={{ fontWeight: "600" }}>
                            Code architect, user experience
                            <Typography
                                variant="h2"
                                color="primary"
                                sx={{ display: "inline", fontWeight: "600" }}
                            >
                                {" "}
                                Artisan.
                            </Typography>
                        </Typography>
                        <Typography
                            variant="body1"
                            className="mt-2"
                            color={text_children_one}
                            sx={{ fontSize: "20px !important" }}
                        >
                            Crafting digital experiences with precision and passion, where
                            every line of code weaves a story of innovation and user delight.{" "}
                        </Typography>

                        <div className="mt-2 d-flex">
                            <Button
                                onClick={() => window.open("https://www.linkedin.com/in/sundaranv/", "_blank")}
                                variant="contained"
                                color="primary"
                                className="shadow-none mt-2 me-2"
                            >
                                Linkedin
                            </Button>
                            <Button
                                onClick={() => window.open("https://github.com/vsundaran", "_blank")}
                                variant="outlined"
                                color="primary"
                                className="shadow-none mt-2"
                            >
                                Git
                            </Button>
                        </div>
                    </div>
                    <div className="w-100 ms-md-2">
                        <img
                            className="mt-5 mt-lg-0"
                            style={{
                                width: "100%",
                                display: `${theme == "purple" ? "flex" : "none"}`,
                            }}
                            src={PurpleSitting}
                        />

                        <img
                            className="mt-5 mt-lg-0"
                            style={{
                                width: "100%",
                                display: `${theme == "blue" ? "flex" : "none"}`,
                            }}
                            src={BlueSitting}
                        />

                        <img
                            className="mt-5 mt-lg-0"
                            style={{
                                width: "100%",
                                display: `${theme == "green" ? "flex" : "none"}`,
                            }}
                            src={GreenSetting}
                        />

                        <img
                            className="mt-5 mt-lg-0"
                            style={{
                                width: "100%",
                                display: `${theme == "orange" ? "flex" : "none"}`,
                            }}
                            src={OrangeSitting}
                        />

                        <img
                            className="mt-5 mt-lg-0"
                            style={{
                                width: "100%",
                                display: `${theme == "pink" ? "flex" : "none"}`,
                            }}
                            src={DeepPinkStiing}
                        />
                    </div>
                </Box>
            </Box>
            {/* section One */}
            <Box
                sx={{
                    minHeight: "80vh",
                    background: background,
                    paddingBottom: "10px",
                }}
            >
                <Box className="container py-4 mt-3">
                    {/* <div className="d-flex align-items-center">
                        <div className="divider me-2" style={{ background: text }} />
                        <Chip color="primary" label="New Arraivals" size="large" sx={{ fontSize: "16px" }} />
                        <div className="divider ms-2" style={{ background: text }} />
                    </div> */}

                    {/* <div className="d-flex">
                        <Box className="shadow-sm" sx={{ padding: 4, borderRadius: "10px", background: ChipWrapperBackground }}>
                            <img className="mt-5 mt-lg-0" style={{ width: "100%", maxWidth: "500px", display: `${theme == "purple" ? "flex" : "none"}` }} src={ProfilePurple} />
                            <img className="mt-5 mt-lg-0" style={{ width: "100%", maxWidth: "500px", display: `${theme == "orange" ? "flex" : "none"}` }} src={ProfileOrange} />
                            <img className="mt-5 mt-lg-0" style={{ width: "100%", maxWidth: "500px", display: `${theme == "green" ? "flex" : "none"}` }} src={ProfileGreen} />
                            <img className="mt-5 mt-lg-0" style={{ width: "100%", maxWidth: "500px", display: `${theme == "pink" ? "flex" : "none"}` }} src={ProfileDeepPink} />
                            <img className="mt-5 mt-lg-0" style={{ width: "100%", maxWidth: "500px", display: `${theme == "blue" ? "flex" : "none"}` }} src={ProfileBlue} />
                        </Box>
                        <div className="w-100"></div>
                    </div> */}
                    <center>
                        <Typography variant="button" sx={{}} color={text_children_one}>
                            experience
                        </Typography>
                    </center>
                    <div className="row mt-3">
                        <div className="col-sm-12  col-md-6 col-lg-4 mb-3">
                            <center>
                                <Avatar
                                    alt="Remy Sharp"
                                    // src={ }
                                    sx={{ width: 56, height: 56, background: iconBackground }}
                                >
                                    <WorkIcon color="primary" />
                                </Avatar>
                                <Typography
                                    className="mt-2"
                                    variant="h6"
                                    color={text_children_two}
                                    sx={{ letterSpacing: "1px" }}
                                >
                                    Softound Solutions
                                </Typography>
                                <Typography
                                    className="mt-2"
                                    variant="body1"
                                    color={text_children_one}
                                // sx={{ letterSpacing: "1px" }}
                                >
                                    Frontend richness arises from blending past efforts into the
                                    present; code for a prestigious future with experience,
                                    precision, and innovation today
                                </Typography>
                            </center>
                        </div>
                        <div className="col-sm-12  col-md-6 col-lg-4 mb-3">
                            <center>
                                <Avatar
                                    alt="Remy Sharp"
                                    // src={ }
                                    sx={{ width: 56, height: 56, background: iconBackground }}
                                >
                                    <WorkHistoryIcon color="primary" />
                                </Avatar>
                                <Typography
                                    className="mt-2"
                                    variant="h6"
                                    color={text_children_two}
                                    sx={{ letterSpacing: "1px" }}
                                >
                                    Cortex Media Marketing
                                </Typography>
                                <Typography
                                    className="mt-2"
                                    variant="body1"
                                    color={text_children_one}
                                // sx={{ letterSpacing: "1px" }}
                                >
                                    Frontend development turns a blank canvas into a seamless
                                    masterpiece, blending design and functionality for memorable
                                    digital interactions
                                </Typography>
                            </center>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                            <center>
                                <Avatar
                                    alt="Remy Sharp"
                                    // src={ }
                                    sx={{ width: 56, height: 56, background: iconBackground }}
                                >
                                    <WorkHistoryIcon color="primary" />
                                </Avatar>
                                <Typography
                                    className="mt-2"
                                    variant="h6"
                                    color={text_children_two}
                                    sx={{ letterSpacing: "1px" }}
                                >
                                    Puppy UI
                                </Typography>
                                <Typography
                                    className="mt-2"
                                    variant="body1"
                                    color={text_children_one}
                                // sx={{ letterSpacing: "1px" }}
                                >
                                    In frontend development, each pixel signifies a milestone in
                                    the experiential narrative, while every line of code shapes
                                    the user's interactive journey
                                </Typography>
                            </center>
                        </div>
                    </div>
                </Box>
                <Box className="container py-4 mt-5">
                    <center>
                        <Typography variant="button" sx={{}} color={text_children_one}>
                            Projects
                        </Typography>
                        <Typography
                            variant="h2"
                            color={text}
                            sx={{ fontWeight: "600", maxWidth: "900px" }}
                        >
                            Bringing ideas to life through impactful projects
                        </Typography>
                    </center>
                    <center>
                        <Typography
                            variant="body1"
                            className="mt-2 mb-5"
                            color={text_children_one}
                            sx={{ maxWidth: "900px", fontSize: "20px !important" }}
                        >
                            In the realm of projects, we craft stories of innovation and
                            success. Each endeavor is a testament to our dedication to
                            excellence and the art of turning ideas into reality
                        </Typography>
                    </center>

                    <center>
                        <img
                            className="mt-5 mt-lg-0"
                            style={{
                                width: "100%",
                                maxWidth: "700px",
                                display: `${theme == "purple" ? "flex" : "none"}`,
                            }}
                            src={Project_image_purple}
                        />
                        <img
                            className="mt-5 mt-lg-0"
                            style={{
                                width: "100%",
                                maxWidth: "700px",
                                display: `${theme == "orange" ? "flex" : "none"}`,
                            }}
                            src={Project_image_orange}
                        />
                        <img
                            className="mt-5 mt-lg-0"
                            style={{
                                width: "100%",
                                maxWidth: "700px",
                                display: `${theme == "green" ? "flex" : "none"}`,
                            }}
                            src={Project_image_green}
                        />
                        <img
                            className="mt-5 mt-lg-0"
                            style={{
                                width: "100%",
                                maxWidth: "700px",
                                display: `${theme == "pink" ? "flex" : "none"}`,
                            }}
                            src={Project_image_deepPurple}
                        />
                        <img
                            className="mt-5 mt-lg-0"
                            style={{
                                width: "100%",
                                maxWidth: "700px",
                                display: `${theme == "blue" ? "flex" : "none"}`,
                            }}
                            src={Project_image_blue}
                        />
                    </center>
                </Box>
                <Box className="container my-4">
                    <div className="row">
                        <div
                            className="col-sm-6 col-md-6 col-lg-4 mb-3"
                            onClick={() =>
                                window.open("https://www.goheadhunt.com.au/", "_blank")
                            }
                        >
                            <Card
                                sx={{
                                    width: "100%",
                                    background: card_background,
                                    borderRadius: "20px",
                                }}
                            >
                                <CardActionArea>
                                    <CardContent sx={{ padding: "24px 28px" }}>
                                        <Avatar
                                            alt="Sundar"
                                            sx={{ width: 56, height: 56, background: primary }}
                                        >
                                            <GpsFixedOutlinedIcon color={text} />
                                        </Avatar>
                                        <Typography
                                            className="mt-3"
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            sx={{ color: text }}
                                        >
                                            Go Head Hunt
                                        </Typography>
                                        <Typography variant="body1" color={text_children_one}>
                                            Craft a standout resume, network strategically, ace
                                            interviews for job hunting success
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div
                            className="col-sm-6 col-md-6 col-lg-4 mb-3"
                            onClick={() => window.open("https://appmd.co", "_blank")}
                        >
                            <Card
                                sx={{
                                    width: "100%",
                                    background: card_background,
                                    borderRadius: "20px",
                                }}
                            >
                                <CardActionArea>
                                    <CardContent sx={{ padding: "24px 28px" }}>
                                        <Avatar
                                            alt="Sundar"
                                            sx={{ width: 56, height: 56, background: primary }}
                                        >
                                            <MedicalServicesOutlinedIcon color={text} />
                                        </Avatar>
                                        <Typography
                                            className="mt-3"
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            sx={{ color: text }}
                                        >
                                            App MD
                                        </Typography>
                                        <Typography variant="body1" color={text_children_one}>
                                            AppMD is a virtual medical consultancy,
                                            offering you the world-class medical
                                            opinions.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-3" onClick={() => window.open("https://www.npmjs.com/~trishanthnaidu", "_blank")}>
                            <Card
                                sx={{
                                    width: "100%",
                                    background: card_background,
                                    borderRadius: "20px",
                                }}
                            >
                                <CardActionArea>
                                    <CardContent sx={{ padding: "24px 28px" }}>
                                        <Avatar
                                            alt="Sundar"
                                            sx={{ width: 56, height: 56, background: primary }}
                                        >
                                            <ConstructionOutlinedIcon color={text} />
                                        </Avatar>
                                        <Typography
                                            className="mt-3"
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            sx={{ color: text }}
                                        >
                                            Puppy UI
                                        </Typography>
                                        <Typography variant="body1" color={text_children_one}>
                                            Refine Puppy UI projects for optimal design,
                                            functionality, and user experience
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-3" onClick={() => window.open("https://magicsorter-sundar.netlify.app/", "_blank")}>
                            <Card
                                sx={{
                                    width: "100%",
                                    background: card_background,
                                    borderRadius: "20px",
                                }}
                            >
                                <CardActionArea>
                                    <CardContent sx={{ padding: "24px 28px" }}>
                                        <Avatar
                                            alt="Sundar"
                                            sx={{ width: 56, height: 56, background: primary }}
                                        >
                                            <CategoryOutlinedIcon color={text} />
                                        </Avatar>
                                        <Typography
                                            className="mt-3"
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            sx={{ color: text }}
                                        >
                                            Magic Sorter
                                        </Typography>
                                        <Typography variant="body1" color={text_children_one}>
                                            Optimize sorting app for efficiency, sleek design, and
                                            user-friendly functionality
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-3" onClick={() => window.open("https://shopieezone.netlify.app/", "_blank")}>
                            <Card
                                sx={{
                                    width: "100%",
                                    background: card_background,
                                    borderRadius: "20px",
                                }}
                            >
                                <CardActionArea>
                                    <CardContent sx={{ padding: "24px 28px" }}>
                                        <Avatar
                                            alt="Sundar"
                                            sx={{ width: 56, height: 56, background: primary }}
                                        >
                                            <ShoppingCartOutlinedIcon color={text} />
                                        </Avatar>
                                        <Typography
                                            className="mt-3"
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            sx={{ color: text }}
                                        >
                                            Shopiee Zone
                                        </Typography>
                                        <Typography variant="body1" color={text_children_one}>
                                            Optimize e-commerce for a seamless, user-friendly shopping
                                            experience
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-3">
                            <Card
                                sx={{
                                    width: "100%",
                                    background: card_background,
                                    borderRadius: "20px",
                                }}
                            >
                                <CardActionArea>
                                    <CardContent sx={{ padding: "24px 28px" }}>
                                        <Avatar
                                            alt="Sundar"
                                            sx={{ width: 56, height: 56, background: primary }}
                                        >
                                            <ContactMailOutlinedIcon color={text} />
                                        </Avatar>
                                        <Typography
                                            className="mt-3"
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            sx={{ color: text }}
                                        >
                                            Resume Genarator - In dev
                                        </Typography>
                                        <Typography variant="body1" color={text_children_one}>
                                            Enhance editable template for easy, functional, and
                                            user-friendly resume customization
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>
                </Box>
                <Box sx={{ minHeight: "80vh", background: hero_background }}>
                    <div className="container mt-2 pt-4">
                        <center>
                            <Typography variant="button" color={text_children_one}>
                                Skills
                            </Typography>
                        </center>
                        <center>
                            <Typography
                                variant="h5"
                                color={text}
                                sx={{ maxWidth: "900px", marginTop: "16px" }}
                            >
                                {" "}
                                Mastering Frontend: Transforming Designs into Engaging and
                                Responsive Websites with Precision and Creativity
                            </Typography>
                        </center>
                        <Button
                            variant="contained"
                            color="primary"
                            className="shadow-none mt-4 me-2"
                        >
                            Designing Skills
                        </Button>
                        <div className="row mt-4">
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <BoltOutlinedIcon color={text} />
                                                </Avatar>
                                                {/* <Button variant="outlined" sx={{
                                                    borderRadius: "100px",
                                                    width: "36px",
                                                    minWidth: "31px"
                                                }}><BoltOutlinedIcon color={text} /></Button> */}
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    React Js
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <ChangeHistoryIcon color={text} />
                                                </Avatar>
                                                {/* <Button variant="outlined" sx={{
                                                    borderRadius: "100px",
                                                    width: "36px",
                                                    minWidth: "31px"
                                                }}><BoltOutlinedIcon color={text} /></Button> */}
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Next Js
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <AdUnitsIcon color={text} />
                                                </Avatar>
                                                {/* <Button variant="outlined" sx={{
                                                    borderRadius: "100px",
                                                    width: "36px",
                                                    minWidth: "31px"
                                                }}><BoltOutlinedIcon color={text} /></Button> */}
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    React Native
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <StorageIcon color={text} />
                                                </Avatar>
                                                {/* <Button variant="outlined" sx={{
                                                    borderRadius: "100px",
                                                    width: "36px",
                                                    minWidth: "31px"
                                                }}><BoltOutlinedIcon color={text} /></Button> */}
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Server side rendering
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <CodeIcon color={text} />
                                                </Avatar>
                                                {/* <Button variant="outlined" sx={{
                                                    borderRadius: "100px",
                                                    width: "36px",
                                                    minWidth: "31px"
                                                }}><CodeIcon color={text} /></Button> */}
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    HTML 5
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <CssOutlinedIcon
                                                        color={text}
                                                        sx={{
                                                            width: "32px",
                                                            maxWidth: "32px",
                                                            height: "34px",
                                                        }}
                                                    />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    CSS
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <JavascriptOutlinedIcon
                                                        color={text}
                                                        sx={{
                                                            width: "46px",
                                                            maxWidth: "100px",
                                                            height: "42px",
                                                        }}
                                                    />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Java Script
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <FormatSizeIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Type Script
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <HandymanOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Redux tookit
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <BrushOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    SCSS
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <TextFieldsOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    ECMA Script(5-10)
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            className="shadow-none mt-2 me-2"
                        >
                            INTERACTIONS
                        </Button>
                        <div className="row mt-4">
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <CellTowerOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    AJAX
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <PodcastsOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Axios
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <TagOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Node
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <LanguageOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    WebAPI
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            className="shadow-none mt-2 me-2"
                        >
                            CODE MANAGEMENT
                        </Button>
                        <div className="row mt-4">
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <AccountTreeOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Git
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    {" "}
                                                    <AcUnitOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    JIRA
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <StorageOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    NPM
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            className="shadow-none mt-2 me-2"
                        >
                            Development Domains
                        </Button>
                        <div className="row mt-4">
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <LaptopIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Frontend Developmenet
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    {" "}
                                                    <AdUnitsIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Native Developmenet
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <ElectricalServicesIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Backend Development
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <StorageOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Database Management
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            className="shadow-none mt-2 me-2"
                        >
                            SOFT SKILLS
                        </Button>
                        <div className="row mt-4">
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <BugReportOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Problem-Solving
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    {" "}
                                                    <Diversity3OutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Collaboration
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <AccessTimeOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Time Management
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
                                <Card
                                    sx={{
                                        width: "100%",
                                        background: card_background,
                                        borderRadius: "10px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent sx={{ padding: "24px 28px" }}>
                                            <div className="d-flex align-items-center">
                                                <Avatar
                                                    sizes="small"
                                                    alt="Sundar"
                                                    sx={{ background: primary }}
                                                >
                                                    <CampaignOutlinedIcon color={text} />
                                                </Avatar>
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                    sx={{ color: text }}
                                                >
                                                    Communication
                                                </Typography>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <BorderLinearProgress
                                                    variant="determinate"
                                                    value={90}
                                                    sx={{ width: "100%" }}
                                                />
                                                <Typography
                                                    className="ms-2"
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: text_children_one }}
                                                >
                                                    90%
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Box>
                <section id="about">
                    <Box
                        sx={{ minHeight: "68vh", background: background }}
                        className="mt-5"
                    >
                        <div className="container">
                            <div className="d-lg-flex pb-5">
                                <div className="w-100">
                                    <img
                                        className="mt-5 mt-lg-0"
                                        style={{
                                            width: "100%",
                                            maxWidth: "700px",
                                            display: `${theme == "purple" ? "flex" : "none"}`,
                                        }}
                                        src={AboutImagePurple}
                                    />
                                    <img
                                        className="mt-5 mt-lg-0"
                                        style={{
                                            width: "100%",
                                            maxWidth: "700px",
                                            display: `${theme == "orange" ? "flex" : "none"}`,
                                        }}
                                        src={AboutImageOrange}
                                    />
                                    <img
                                        className="mt-5 mt-lg-0"
                                        style={{
                                            width: "100%",
                                            maxWidth: "700px",
                                            display: `${theme == "green" ? "flex" : "none"}`,
                                        }}
                                        src={AboutImageGreen}
                                    />
                                    <img
                                        className="mt-5 mt-lg-0"
                                        style={{
                                            width: "100%",
                                            maxWidth: "700px",
                                            display: `${theme == "pink" ? "flex" : "none"}`,
                                        }}
                                        src={AboutImageDeepPink}
                                    />
                                    <img
                                        className="mt-5 mt-lg-0"
                                        style={{
                                            width: "100%",
                                            maxWidth: "700px",
                                            display: `${theme == "blue" ? "flex" : "none"}`,
                                        }}
                                        src={AboutImageBlue}
                                    />
                                </div>
                                <div className="mt-4 mt-lg-0 w-100">
                                    <center>
                                        <Typography
                                            variant="button"
                                            sx={{}}
                                            color={text_children_one}
                                        >
                                            ABOUT ME
                                        </Typography>
                                        <Typography
                                            variant="h2"
                                            color={text}
                                            sx={{ fontWeight: "600", maxWidth: "900px" }}
                                        >
                                            Portfolio content, where expertise meets expression
                                        </Typography>
                                    </center>
                                    <center>
                                        <Typography
                                            variant="body1"
                                            color={text_children_one}
                                            className="mt-3"
                                        >
                                            Hello there! 👋 I'm SUNDARAN V, a passionate and creative
                                            frontend developer with a love for transforming ideas into
                                            interactive digital experiences. With two years of
                                            hands-on experience in the ever-evolving world of web
                                            development, I thrive on bringing designs to life and
                                            crafting seamless, user-friendly interfaces.
                                        </Typography>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </Box>
                </section>
                <section id="contact"></section>
                <section ref={contactRef}>
                    <Box sx={{ minHeight: "80vh", background: hero_background }}>
                        <div className="container">
                            <div className="pt-4">
                                <center>
                                    <Typography variant="button" color={text_children_one}>
                                        Contact ME
                                    </Typography>
                                </center>
                                <center>
                                    <Typography
                                        variant="h5"
                                        color={text}
                                        sx={{ maxWidth: "900px", marginTop: "16px" }}
                                    >
                                        {" "}
                                        Ready to build something amazing? Let's connect and make it
                                        happen. Click that button, and let the collaboration begin!
                                    </Typography>
                                </center>
                            </div>

                            <div className="d-flex align-items-center justify-content-center pt-4">
                                <div
                                    className="mt-4 mt-lg-0 w-100 me-3 p-3 rounded"
                                    style={{ background: "#f7f9fc", maxWidth: "700px" }}
                                >
                                    <center>
                                        <Typography
                                            variant="button"
                                            sx={{}}
                                            color={text_children_one}
                                        >
                                            Mail ME
                                        </Typography>
                                    </center>
                                    <form className="mt-3" onSubmit={handleSubmit}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Full Name"
                                            value={localStorage.getItem("name")}
                                            onChange={(e) => updateState(e, "name")}
                                            variant="outlined"
                                            className="d-block mb-3"
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            label="E-mail"
                                            // value={details.email}
                                            value={localStorage.getItem("email")}
                                            onChange={(e) => updateState(e, "email")}
                                            type="email"
                                            variant="outlined"
                                            className="d-block mb-3"
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            label="Message"
                                            // value={details.message}
                                            value={localStorage.getItem("message")}
                                            onChange={(e) => updateState(e, "message")}
                                            variant="outlined"
                                            className="d-block mb-3"
                                        />
                                        <center>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className="shadow-none"
                                            >
                                                SEND
                                            </Button>
                                        </center>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Box>
                </section>
            </Box>
        </Division>
    );
});
