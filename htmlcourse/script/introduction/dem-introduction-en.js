var wanted = "<p>I now know how to make a paragraph in html</p>"

const delay = 1;

function moveon() {
    let code = document.getElementById("htmlcode");
    if (code.value == wanted ){
        window.location.href = '/website/htmlcourse/html/introduction/anatomy-en.html';
    } else {
        document.getElementById("hint").style.display="block";
        setTimeout(function() {
            confirm('Incorrect, if you need a hint click on the magnifying glass in the bottom left corner');
        }, delay);
    }
}

function hint() {
    alert('Make sure to write "I now know how to make a paragraph in html" inside the paragraph tag')
}

function goback() {
    window.location.href="/website/htmlcourse/html/webdev.html"
}

function showpreview() {
    let htmlCode = document.getElementById("htmlcode").value;
    let cssCode = "<style>"+document.getElementById("csscode").value+"</style>";
    let jsCode = "<scri"+"pt>"+document.getElementById("jscode").value+"</scri"+"pt>";
    let frame1 = document.getElementById("preview-window-html").contentWindow.document;
    let frame2 = document.getElementById("preview-window-css").contentWindow.document;
    let frame3 = document.getElementById("preview-window-js").contentWindow.document;
    frame1.open();
    frame2.open();
    frame3.open();
    frame1.write(htmlCode);
    frame2.write(htmlCode+cssCode);
    frame3.write(htmlCode+cssCode+jsCode);
    frame1.close();
    frame2.close();
    frame3.close();
}