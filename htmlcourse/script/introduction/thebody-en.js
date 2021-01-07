const wanted = `<body><p>"Live as if you were to die tomorrow. Learn as if you were to live forever."- Mahatma Gandhi</p></body>`

const wanted2 = `<body>
  <p>"Live as if you were to die tomorrow. Learn as if you were to live forever."- Mahatma Gandhi</p>
</body>`

const delay = 1;

function moveon() {
    let code = document.getElementById("htmlcode");
    if (code.value == wanted || code.value == wanted2){
        window.location.href = '/website/htmlcourse/html/introduction/structure-en.html';
    } else {
        document.getElementById("hint").style.display="block";
        setTimeout(function() {
            confirm('Incorrect, if you need a hint click on the magnifying glass in the bottom left corner');
        }, delay);
    }
}

function hint() {
    alert('make sure you have written the code inside the body tags and there is no space between your p tags and the quote')
}

function goback() {
    window.location.href="/website/htmlcourse/html/introduction/anatomy-en.html"
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