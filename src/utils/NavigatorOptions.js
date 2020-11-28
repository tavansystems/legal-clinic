import SupportedLanguages from './SupportedLanguages';

let url
const optionList = []
const mapOptions = (options, path = "/") => {
    const optionkeys = Object.keys(options)
    for (let key of optionkeys) {
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