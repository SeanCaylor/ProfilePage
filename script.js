function photoChango(){
    var image = document.getElementById("profilePic");
    if (image.getAttribute('src') == "img/ProfilePic.png"){
        image.src = "img/JBFH.png"
    }
    else {
        image.src = "img/ProfilePic.png"
    }
}