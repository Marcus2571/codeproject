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
    let code = codemirror.getValue().replace(/\s/g, "");
    if (code == wanted.replace(/\s/g, "")) {
        window.location.href = baseUrl + nextUrl;
    } else {
        document.getElementById("hint").style.display = "block";
        setTimeout(function () {
            confirm('Incorrect, if you need a hint click the hint button');
        }, delay);
    }
}

function hint() {
    alert(hintValue);
}

function goback() {
    window.location.href = baseUrl + backUrl;
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

function dropdown(elmnt) {
    let dropElmnt = elmnt.nextElementSibling;
    if (dropElmnt.style.display != "inline-block") {
        dropElmnt.style.display = "inline-block";
    } else {
        dropElmnt.style.display = "none";
    }
}

function arrowTransform(clicked_id) {
    // let arrowDown = ("document.GetElementById(clicked_id).style.") + ("-webkit-transform = 'rotate(-135deg)'");
    // let up = ('document.getElementById(clicked_id).style.') + ('-webkit-transform = "rotate(-135deg)"');
    if(document.getElementById(clicked_id).style.transform != "rotate(45deg)") {
        document.getElementById(clicked_id).style.transform = "rotate(45deg)";
    } else {
        document.getElementById(clicked_id).style.transform = "rotate(-135deg)";
    }
}


