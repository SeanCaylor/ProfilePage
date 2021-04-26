function photoChango(){
    var image = document.getElementById("profilePic");
    var link = document.getElementById("itsASecret");
    if (image.getAttribute('src') == "img/ProfilePic.png"){
        image.src = "img/JBFH.png"
        link.href = "./x_Insane personal experiment/index.html"
    }
    else {
        image.src = "img/ProfilePic.png"
        link.href = "#"
    }
}