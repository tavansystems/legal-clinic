import React, { useState, useEffect, useCallback } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import LangContext from "../../utils/LangContext";
import PathContext from "../../utils/PathContext";
import MainLayout from "../layouts/MainLayout";
import Cards from "../components/Cards";
import ContentWrapper from "../components/ContentWrapper";
import HeroUnit from "../components/HeroUnit";

import SupportedLanguages from "../../utils/SupportedLanguages";

function Navigator({ location, match }) {
    const [module, setModule] = useState({});
    const [breadCrumbs, setBreadCrumbs] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [selectedLang, setSelectedLang] = useState(SupportedLanguages.en);
    const [sideBarListState, setSideBarListState] = useState([]);
    const { path, lang } = match.params;

    const parsePath = useCallback(() => {
        const pathlist = path ? path.split("/") : [];
        const breadCrumbs = [];
        let currentModule = selectedLang;
        let breadcrumbpath = "/" + lang;
        const finalParent = pathlist[pathlist.length - 1];
        for (let slug of pathlist) {
            if (finalParent === slug) {
                let sideBarList = [];
                for (let key in currentModule.options) {
                    if (finalParent !== key) {
                        sideBarList.push(currentModule.options[key]);
                    }
                }
                setSideBarListState(sideBarList);
            }
            if (!currentModule.options) {
                break;
            }
            if (currentModule.options[slug]) {
                breadcrumbpath += "/" + slug;
                breadCrumbs.push({
                    title: currentModule.options[slug].title,
                    path: breadcrumbpath,
                });
                currentModule = currentModule.options[slug];
            } else {
                setNotFound(true);
            }
        }
        setBreadCrumbs(breadCrumbs);
        setModule(currentModule);
    }, [path, lang, selectedLang]);

    const selectLang = useCallback(() => {
        if (SupportedLanguages[lang]) {
            document.body.dir = SupportedLanguages[lang].direction;
            setSelectedLang(SupportedLanguages[lang]);
            setBreadCrumbs([{ title: lang.title, path: "/" + lang }]);
        } else {
            setNotFound(true);
        }
    }, [lang]);

    useEffect(() => {
        selectLang();
        parsePath();
    }, [location.pathname, parsePath, selectLang]);

    const getExcerpt = () => {
        document.title = module.title;
        if (module.content) {
            return (document.description = module.content.slice(0, 100));
        } else {
            return "";
        }
    };

    console.log(selectedLang.slug);
    return (
        <PathContext.Provider value={match.params}>
            <LangContext.Provider value={selectedLang}>
                <MainLayout key={location.pathname}>
                    <Helmet>
                        <title>{module.title}</title>
                        <meta name="description" content={getExcerpt()} />
                        <meta
                            property="og:type"
                            content={module.image_source}
                        />
                    </Helmet>
                    <HeroUnit
                        title={
                            path
                                ? module.title
                                : selectedLang.literals.how_can_we_help
                        }
                        breadCrumbs={breadCrumbs}
                    />
                    <ContentWrapper
                        sideBarList={sideBarListState}
                        main={module.content}
                        sources={module.sources}
                    />
                    <Cards options={module.options} />
                    {notFound ? <Redirect to="/404" /> : null}
                </MainLayout>
            </LangContext.Provider>
        </PathContext.Provider>
    );
}

export default withRouter(Navigator);
