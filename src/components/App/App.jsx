import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

import Footer from "./Footer";
import routeData from "../../util/route-data";
import MailIcon from "./MailIcon";

import aboutData from "../../util/about-data";

/**
 * React Function Component displays navbar, footer, lazy loads content. 
 * @returns {JSX.Element} - A React Component instance.
 */
const App = () => {

    const getNavLinks = () => {
        return routeData.map((e, i) => {
            if (e.name) {
                return <NavLink key={i} end to={e.path} >{e.name}</NavLink>;
            };
        });
    };

    const getRoutes = () => {
        return routeData.map((e, i) => {
            return <Route key={i} path={e.path} element={e.element} />;
        });

    };

    return (
        <div className="App">
            <Helmet>
                <meta charset="utf-8" />
                <title>Mark C Hoffner</title>
            </Helmet>
            <Router basename="/">
                <nav>
                    <div className="leftNav">
                        <a href={`mailto: ${aboutData.emailAddress}`}>
                            <MailIcon />
                        </a>
                        <div className="emailNameWrapper">
                            <div className="emailName">{aboutData.emailAddress}</div>
                        </div>
                    </div>
                    <div className="rightNav">
                        {getNavLinks()}
                    </div>
                </nav>
                <Suspense fallback={<div></div>}>
                    <div className="main-container">
                        <Routes>
                            {getRoutes()}
                        </Routes>
                    </div >
                </Suspense>
            </Router>
            <Footer />
        </div>
    );
};

export default App;