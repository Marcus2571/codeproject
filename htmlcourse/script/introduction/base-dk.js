//   console.log(CodeMirror.modes);

const baseUrl = '/website/htmlcourse/html/introduction/'

const codemirror = CodeMirror.fromTextArea(document.querySelector('#htmlcode'), {
    lineNumbers: true,
    tabSize: 2,
    value: 'console.log("Hello, World");',
    mode: 'xml',
    htmlMode: true, 
    theme: 'material-darker',
  });

  codemirror.on('change', showpreview);

const delay = 1;

function moveon() {
    let code = codemirror.getValue();
    if (code == wanted){
        window.location.href = baseUrl+nextUrl;
    } else {
        document.getElementById("hint").style.display="block";
        setTimeout(function() {
            confirm('Forkert! Hvis du vil have et hint, så tryk på forstørrelsesglasset i nederste venstre hjørne');
        }, delay);
    }
}

function hint() {
    alert(hintValue);
}

function goback() {
    window.location.href = baseUrl+backUrl;
}

function showpreview(cm) {
    var htmlCode = cm.getValue();
    // var cssCode = "<style>"+document.getElementById("csscode").value+"</style>";
    // var jsCode = "<scri"+"pt>"+document.getElementById("jscode").value+"</scri"+"pt>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode);
    // frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}