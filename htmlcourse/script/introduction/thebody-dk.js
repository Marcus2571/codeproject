const wanted = '<body><p>"Live as if you were to die tomorrow. Learn as if you were to live forever."- Mahatma Gandhi</p></body>'

const wanted2 = `<body>
  <p>"Live as if you were to die tomorrow. Learn as if you were to live forever."- Mahatma Gandhi</p>
</body>`

const delay = 1;

function moveon() {
    let code = document.getElementById("htmlcode");
    if (code.value == wanted || code.value == wanted2){
        window.location.href = '/website/htmlcourse/html/introduction/structure-dk.html';
    } else {
        document.getElementById("hint").style.display="block";
        setTimeout(function() {
            confirm('Forkert! Hvis du vil have et hint, så tryk på forstørrelsesglasset i nederste venstre hjørne');
        }, delay);
    }
}

function hint() {
    alert('Sørg for at du har din paragraf mellem de to body tags, og at der ikke er mellemrum fra dine p tags til din tekst')
}

function goback() {
    window.location.href="/website/htmlcourse/html/introduction/anatomy-dk.html"
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