import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import RouterPaths from "./RoutePath";
import { TopMenu } from "../topMenu/TopMenu";
import { CharacterPage } from "../characterPage/CharacterPage";
import { RootPage } from "../rootPage/RootPage";



export const MainRouter: React.FC = () => {
    return (
        <Fragment >
            <TopMenu />
            <Routes>
                <Route path={RouterPaths.Root} element={<RootPage />} />
                <Route path={RouterPaths.Character} element={<CharacterPage />} />
                <Route path="/" element={<Navigate to={RouterPaths.Root} />} />
                <Route path="*" element={<div>Wrong URL</div>} />
            </Routes>
        </Fragment>
    );
};
