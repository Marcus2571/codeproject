var wanted = "<p>Nu har jeg lært at lave et paragraf tag i html</p>"

const delay = 1;

function moveon() {
    let code = document.getElementById("htmlcode");
    if (code.value == wanted ){
        window.location.href = '/website/htmlcourse/html/introduction/anatomy-dk.html';
    } else {
        document.getElementById("hint").style.display="block";
        setTimeout(function() {
            confirm('Forkert! Hvis du vil have et hint, så tryk på forstørrelsesglasset i nederste venstre hjørne');
        }, delay);
    }
}

function hint() {
    alert('Sørg for du skriver "Nu har jeg lært at lave et paragraf tag i html" inde i paragraf tagget')
}

function goback() {
    window.location.href="/website/htmlcourse/html/webdev.html"
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