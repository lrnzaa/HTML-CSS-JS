function addImages(images_ref) {
    var images = ["assets/images/kk1.jpg", "assets/images/kk2.jpg", "assets/images/kk3.jpg", 
                    "assets/images/kk4.jpg", "assets/images/kk5.jpg", "assets/images/kk6.jpg",
                    "assets/images/kk7.jpg", "assets/images/kk8.jpg", "assets/images/kk9.jpg", 
                    "assets/images/kk10.jpg", "assets/images/kk11.jpg", "assets/images/kk12.jpg", 
                    "assets/images/kk13.jpg", "assets/images/kk14.jpg", "assets/images/kk15.jpg",];
    var index = Math.floor(Math.random() * images.length);
    images_ref.innerHTML += '<div class="g-img"><img style="background-image:url('+images[index]+')"></div>';
}

var images_ref = document.getElementById('photos-container');

for(var i = 0; i < 15; i++) {
    addImages(images_ref);
}