document.getElementById("convert").addEventListener("click", function () {
    if (document.getElementById("input").value != "") {
        let converter = new showdown.Converter(),
            markdown = document.getElementById("input").value,
            html = converter.makeHtml(markdown);
        html_beautify(html);
        document.getElementById("result").value = html;
        document.getElementById("displayBottomBar").style.display = "flex";
    }
});
document.getElementById("download").addEventListener("click", function () {
    let blob = new Blob([document.getElementById("result").value]);
    let downloadURL = document.createElement("a");
    downloadURL.href = URL.createObjectURL(blob)
    downloadURL.download = "Markdown-To-HTML.html";
    downloadURL.click();
    URL.revokeObjectURL;
});
document.getElementById("copyResultHTML").addEventListener("click", function () {
    navigator.clipboard.writeText(document.getElementById("result").value);
    document.getElementById("result").select();
});
document.getElementById("upload").addEventListener("click", function () {
    console.log("clicked")
    let file = document.getElementById("fileInput").files[0];
    if (file) {
        let reader = new FileReader()
        reader.onload = function (e) {
            document.getElementById("input").value = e.target.result;
        }
        reader.readAsText(file);
    } else {
        alert("Please select your file")
    }
});
