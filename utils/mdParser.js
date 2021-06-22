var fs = require("fs")
var files = fs.readdirSync("lang/")

for (let file of files) {
    const langSlug = file.replace(".md", "")
    fs.readFile("lang/" + file, "utf8", function (err, data) {
        let r =
            /^#+ *(\S.*)\r?\n\r?\nURL: \[([^\][]+)\]\(([^()]+)\)((?:\r?\n(?!#).*)*)/gm
        let navigator = { options: {} }
        let m2, title, url, content, sources, path
        for (let match of data.match(r)) {
            m2 = match.match(
                /^#+ *(\S.*)\r?\n\r?\nURL: \[([^\][]+)\]\(([^()]+)\)((?:\r?\n(?!#).*)*)/
            )
            title = m2[1]
            url = m2[2]
            path = url.replace("https://legal-clinic.mfso.ca/#/", "").split("/")

            content = m2[4].replace(/Sources:\n((?:\r?\n(?!#).*)*)/, "")
            sources = m2[4].match(/\* \[(.*)\]/g)
            let sourcelist = []
            if (sources) {
                for (let source of sources) {
                    sourcelist.push(source.match(/\[(.*)\]/)[1])
                }
            }

            let stem = navigator
            for (let pathitem of path) {
                let doc = {}
                doc["title"] = title
                doc["image_source"] = "/img/graphics/" + pathitem + ".png"
                if (
                    content.search(
                        /\[THIS IS A CHOICE NO CONTENT REQUIRED\]/
                    ) === -1
                ) {
                    doc["content"] = content
                }
                doc["options"] = {}
                if (sourcelist.length > 0) {
                    doc["sources"] = sourcelist
                }
                stem = stem["options"][pathitem] =
                    stem["options"][pathitem] || doc
            }
        }
        fs.readFile(
            "src/lang/" + langSlug + ".json",
            "utf8",
            function (err, data) {
                let langfile = JSON.parse(data)
                let langTitle = langfile["title"]
                fs.writeFile(
                    "src/lang/" + langSlug + ".json",
                    JSON.stringify(langfile),
                    function (err) {
                        if (err) throw err
                        console.log(langTitle + " Saved!")
                    }
                )
            }
        )
    })
}
