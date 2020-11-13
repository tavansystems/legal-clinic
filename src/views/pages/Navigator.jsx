import React, { useState, useEffect } from "react";
// import Grid from "@material-ui/core/Grid";

import LangContext from "../../utils/LangContext";
import MainLayout from '../layouts/MainLayout';
import HeroUnit from "../components/HeroUnit"
import en from "../../lang/en.json"
import fr from "../../lang/fr.json"
import Cards from "../components/Cards"

const supportedLangs = [en, fr]

export default function Navigator(){
    const [lang, setLang] = useState(en)

    const [options, setOptions] = useState([])

    useEffect(() => {
        parsePath();
    }, []);

    const parsePath = () => {
        let pathname = window.location.pathname
        let pathlist = pathname.split("/")
        pathlist.shift()
        
        for(let lang in supportedLangs){
            if(lang === pathlist[0]){
                setLang(lang)
            }
        }
        
        let currentOption = supportedLangs
        for(let slug of pathlist){
            for(let module of currentOption){
                console.log(module)
                if(module.slug === slug){
                    currentOption = module.options

                }
            }
        }
        setOptions(currentOption)
    }

    return (
        <LangContext.Provider value={lang}>
            <MainLayout>
                <HeroUnit />
                <Cards options={options} />
            </MainLayout>
        </LangContext.Provider>
    )
}