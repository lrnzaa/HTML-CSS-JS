function addImages(images_ref) {
    var images = ["assets/images/ss1.jpg", "assets/images/ss2.jpg", "assets/images/ss3.jpg", 
                    "assets/images/ss4.jpg", "assets/images/ss5.jpg", "assets/images/ss6.jpg",
                    "assets/images/ss7.jpg", "assets/images/ss8.jpg", "assets/images/ss9.jpg", 
                    "assets/images/ss10.jpg", "assets/images/ss11.jpg", "assets/images/ss12.jpg", 
                    "assets/images/ss13.jpg", "assets/images/ss14.jpg", "assets/images/ss15.jpg",];
    var index = Math.floor(Math.random() * images.length);
    images_ref.innerHTML += '<div class="g-img"><img style="background-image:url('+images[index]+')"></div>';
}

var images_ref = document.getElementById('photos-container');

for(var i = 0; i < 15; i++) {
    addImages(images_ref);
}