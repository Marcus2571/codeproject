var wanted = "<p>I now know how to make a paragraph in html</p>"

function moveon() {
    let code = document.getElementById("htmlcode");
        if (code.value == wanted ){
            window.location.href = '/website/htmlcourse/html/htmltags/htmltags2en.html';
        } else {
            alert('Incorrect, if you need a hint click on the magnifying glass in the bottom left corner');
        }
}

function hint() {
    alert('Make sure to write "I now know how to make a paragraph in html" inside the paragraph tag')
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