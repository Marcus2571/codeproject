var wanted = `<html>
  <head>
  </head>
  <body>
    <p>Nu har jeg lært at sætte et html dokument op</p>
  </body>
</html>`;

function moveon() {
    let code = document.getElementById("htmlcode");
        if (code.value == wanted ){
            window.location.href = '/website/htmlcourse/html/htmltags/htmltagsdk.html';
        } else {
            document.getElementById("hint").style.display="block";
            alert('Forkert! Hvis du vil have et hint, så tryk på forstørrelsesglasset i nederste venstre hjørne');
        }
}

function hint() {
    alert('Sørg for du skriver "Nu har jeg lært at lave et paragraf tag i html" inde i paragraf tagget')
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