import SupportedLanguages from './SupportedLanguages';

let url
const optionList = []
const mapOptions = (options, path = "/") => {
    for (let key in options) {
        url = (path !== "/" ? path : "") + "/" + key
        optionList.push({
            title: options[key].title,
            path: url,
            content: options[key].content ? options[key].content : null
        })
        if (options[key].options) {
            mapOptions(options[key].options, url)
        }
    }
    url = ""
}
mapOptions(SupportedLanguages)

export default optionList;