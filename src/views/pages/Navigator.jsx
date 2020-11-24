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
    const [breadCrumbs, setBreadCrumbs] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [selectedLang, setSelectedLang] = useState(supportedLangs.options.en)

    const { path, lang } = match.params

    const parsePath = useCallback(
        () => {
            const pathlist = path ? path.split("/") : []
            const breadCrumbs = []
            let currentModule = selectedLang
            let breadcrumbpath = "/" + lang
            for (let slug of pathlist) {
                if(!currentModule.options){
                    break
                }
                if (currentModule.options[slug]) {
                    breadcrumbpath += "/" + slug
                    breadCrumbs.push({title: currentModule.options[slug].title, path: breadcrumbpath})
                    currentModule = currentModule.options[slug]
                } else {
                    setNotFound(true)
                }
            }
            setBreadCrumbs(breadCrumbs)
            setModule(currentModule)
        },
        [path, lang, selectedLang],
    );

    const selectLang = useCallback(
        () => {
            if(supportedLangs.options[lang]){
                setSelectedLang(supportedLangs.options[lang])
                setBreadCrumbs([{title: lang.title, path: "/" + lang}])
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
                <HeroUnit title={module.title} breadCrumbs={breadCrumbs} />
                <ContentWrapper sidebar="SIDEBAR" main={module.content} />
                <Cards options={module.options} />
                {notFound ? <Redirect to="/404" /> : null}
            </MainLayout>
        </LangContext.Provider>
    )
}

export default withRouter(Navigator)