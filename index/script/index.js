function switchImage() {
    imgsrc = document.getElementById("img1").src;
    if (imgsrc.indexOf("/website/images/python.png")!=-1){
        document.getElementById("img1").src = "/website/images/html.png";
    } else {
        document.getElementById("img1").src = "/website/images/python.png";
    }
}
