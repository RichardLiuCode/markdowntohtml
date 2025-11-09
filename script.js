document.getElementById("convert").addEventListener("click", function () {
    let converter = new showdown.Converter(),
        markdown = document.getElementById("input").value,
        html = converter.makeHtml(markdown);
    html_beautify(html);
    document.getElementById("result").value = html
})
