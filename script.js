function photoChango(){
    var image = document.getElementById("profilePic");
    if (image.getAttribute('src') == "ProfilePic.png"){
        image.src = "JBFH.png"
    }
    else {
        image.src = "ProfilePic.png"
    }
}