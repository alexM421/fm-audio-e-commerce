import React from "react";
import styles from "./HomeLayout.module.css"
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function HomeLayout () {


    return(

        <div className={styles.container}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}