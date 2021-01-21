
function moveon() {
        window.location.href = '/website/htmlcourse/html/introduction/dem-introduction-en.html';
}

function goback() {
    window.location.href="/website/htmlcourse/html/webdev.html";
}

function showpreview() {
    let htmlCode = document.getElementById("htmlcode").value;
    let cssCode = "<style>"+document.getElementById("csscode").value+"</style>";
    // let jsCode = "<scri"+"pt>"+document.getElementById("jscode").value+"</scri"+"pt>";
    let frame1 = document.getElementById("preview-window-html").contentWindow.document;
    let frame2 = document.getElementById("preview-window-css").contentWindow.document;
    // let frame3 = document.getElementById("preview-window-js").contentWindow.document;
    frame1.open();
    frame2.open();
    // frame3.open();
    frame1.write(htmlCode);
    frame2.write(htmlCode+cssCode);
    // frame3.write(htmlCode+cssCode+jsCode);
    frame1.close();
    frame2.close();
    // frame3.close();
}