import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import SkillPage from "../pages/SkillPage";
import GalleryPage from "../pages/GalleryPage";
import ContactPage from "../pages/ContactPage";
interface routeData {
    path: string;
    element: React.FC;
}

//  Register router here
const urlPatterns: routeData[] = [
    // Not Found
    {
        path: "*",
        element: NotFoundPage,
    },

    // Home page
    {
        path: "/",
        element: HomePage,
    },

    // About page
    {
        path: "about",
        element: AboutPage,
    },

    // Skill Page
    {
        path: "skill",
        element: SkillPage,
    },

    // Gallery Page
    {
        path: "gallery",
        element: GalleryPage,
    },

    // Contact Page
    {
        path: "contact",
        element: ContactPage,
    },
];

// Main function
const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                {urlPatterns.map((data, index) => {
                    return (
                        <Route
                            key={index}
                            path={data.path}
                            element={<data.element />}
                        />
                    );
                })}
            </Routes>
        </Router>
    );
};

export default AppRouter;
