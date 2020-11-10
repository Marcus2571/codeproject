function switchImage() {
    imgsrc = document.getElementById("img1").src;
    if (imgsrc.indexOf("/dashboard/images/python.png")!=-1){
        document.getElementById("img1").src = "/dashboard/images/html.png";
    } else {
        document.getElementById("img1").src = "/dashboard/images/python.png";
    }
}