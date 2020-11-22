import React, { useState, useEffect, useCallback } from "react";
import { withRouter, Redirect } from 'react-router-dom';

import LangContext from "../../utils/LangContext";
import MainLayout from '../layouts/MainLayout';
import Cards from "../components/Cards"
import ContentWrapper from "../components/ContentWrapper";
import HeroUnit from "../components/HeroUnit";

import en from "../../lang/en.json";
import fr from "../../lang/fr.json";

const supportedLangs = {
    options: {
        en: en,
        fr: fr
    }
}

function Navigator({ location, match }) {
    const [module, setModule] = useState({})
    const [notFound, setNotFound] = useState(false)
    const [selectedLang, setSelectedLang] = useState(supportedLangs.options.en)

    const { path, lang } = match.params

    const parsePath = useCallback(
        () => {
            let pathlist = path ? path.split("/") : []
            let currentModule = selectedLang
            for (let slug of pathlist) {
                if (currentModule.options[slug]) {
                    currentModule = currentModule.options[slug]
                } else {
                    setNotFound(true)
                }
            }
            setModule(currentModule)
        },
        [path, selectedLang],
    );

    const selectLang = useCallback(
        () => {
            if(supportedLangs.options[lang]){
                setSelectedLang(supportedLangs.options[lang])
            } else {
                setNotFound(true)
            }
        },
        [lang],
    );

    useEffect(() => {
        selectLang();
        parsePath();
    }, [location.pathname, parsePath, selectLang]);

    return (
        <LangContext.Provider value={selectedLang}>
            <MainLayout key={location.pathname}>
                <HeroUnit title={module.title} />
                <Cards options={module.options} />
                {notFound ? <Redirect to="/404" /> : null}
                <ContentWrapper sidebar="SIDEBAR" main={module.content} />
            </MainLayout>
        </LangContext.Provider>
    )
}

export default withRouter(Navigator)