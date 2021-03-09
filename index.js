const shelljs = require("shelljs");
const fs = require("fs");
const path = require("path");
const minifer = require("html-minifier").minify;

const indexHtml = fs.readFileSync(path.join(__dirname, "templates", "index.html")).toString();
const keyTemplates = `<h3 class="bolder"><a class="linkify" href="/keys/{{key_path}}">{{key_name}}</a></h3>`;
const DEFAULT_KEYS = "908B 72EC";

function generate() {
    const startTime = new Date();
    console.info("Removing old folder...");
    try {
        fs.rmdirSync(path.join(__dirname, "public"));
    } catch (e) {}
    console.info("Fetching all keys...");
    const allKeys = fs.readdirSync(path.join(__dirname, "static", "keys")).filter((e) => e.endsWith(".asc"));
    const keysCollection = allKeys.map((res) => {
        let key_name = res.split(".")[0];
        let split_name = key_name.match(/.{1,4}/g).join(" ");
        return {
            "name": split_name,
            "path": res
        }
    });

    console.info(`Got ${keysCollection.length} keys, adding to template...`);
    let mulKeysTemplate = "";
    keysCollection.forEach((res) => {
        let mulkey = keyTemplates.replace("{{key_path}}", res.path);
        mulkey = mulkey.replace("{{key_name}}", res.name);
        if (DEFAULT_KEYS === res.name) {
            mulkey = mulkey.replace(`</a></h3>`, `</a><span class="small-txt"> [Default]</span></h3>`);
        }
        mulKeysTemplate += mulkey + "\n";
    });
    console.info("Generating main page and minified them.");
    let generatedPages = indexHtml.replace("{{ generated_keys }}", mulKeysTemplate);
    generatedPages = minifer(generatedPages, {
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeAttributeQuotes: false,
        removeComments: false,
        collapseWhitespace: true,
        caseSensitive: true,
    });
    console.info("Creating public folder...");
    try {
        fs.mkdirSync(path.join(__dirname, "public"));
    } catch (e) {}
    console.info("Writing index file...");
    const endTime = new Date();
    const deltaTime = ((endTime - startTime) / 1000).toString() + "ms";
    generatedPages = generatedPages.replace("{{pageGenTime}}", deltaTime);
    fs.writeFileSync(path.join(__dirname, "public", "index.html"), generatedPages);
    console.info("Copying assets folder contents...");
    shelljs.cp("-R", path.join(__dirname, "static", "assets"), path.join(__dirname, "public", "assets"));
    shelljs.cp("-R", path.join(__dirname, "static", "keys"), path.join(__dirname, "public", "keys"));
    console.info(`Page generated in ${deltaTime}!`);
}

generate();