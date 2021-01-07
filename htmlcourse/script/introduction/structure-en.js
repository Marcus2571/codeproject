const wanted = `<body>
  <h1>Hello World</h1>

  <div>
    <p>This paragraph is a child of the div element and a grandchild of the body element</p>
  </div>
</body>`

const delay = 1;

function moveon() {
    let code = document.getElementById("htmlcode");
    if (code.value == wanted){
        window.location.href = '/website/htmlcourse/html/introduction/structure-en.html';
    } else {
        document.getElementById("hint").style.display="block";
        setTimeout(function() {
            confirm('Incorrect, if you need a hint click on the magnifying glass in the bottom left corner');
        }, delay);
    }
}

function hint() {
    alert('make sure you have written the paragraph as a child of the div tag with indentations and there is no space between your p tags and the text')
}

function goback() {
    window.location.href="/website/htmlcourse/html/introduction/thebody-en.html"
}

function showpreview() {
    var htmlCode = document.getElementById("htmlcode").value;
    // var cssCode = "<style>"+document.getElementById("csscode").value+"</style>";
    // var jsCode = "<scri"+"pt>"+document.getElementById("jscode").value+"</scri"+"pt>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode);
    // frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}