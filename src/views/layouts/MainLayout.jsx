import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { makeStyles } from "@material-ui/core/styles";

import Footer from "../components/Footer";
import Header from "../components/Header";

// const useStyles = makeStyles((theme) => ({
// }));

export default function MainLayout({ children }) {
    // const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    );
}
