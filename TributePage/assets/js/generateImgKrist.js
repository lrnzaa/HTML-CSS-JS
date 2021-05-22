var images = ["assets/images/kk1.jpg", "assets/images/kk2.jpg", "assets/images/kk3.jpg",
            "assets/images/kk4.jpg", "assets/images/kk5.jpg", "assets/images/kk6.jpg",
            "assets/images/kk7.jpg", "assets/images/kk8.jpg", "assets/images/kk9.jpg",
            "assets/images/kk10.jpg", "assets/images/kk11.jpg", "assets/images/kk12.jpg",
            "assets/images/kk13.jpg", "assets/images/kk14.jpg", "assets/images/kk15.jpg",];

var arrtemp = [];

for (var i = 0; i < 15; i++)
{
    arrtemp.push(images.splice(
    Math.floor(Math.random() * images.length), 1)[0]);
}

images = ["assets/images/kk1.jpg", "assets/images/kk2.jpg", "assets/images/kk3.jpg",
        "assets/images/kk4.jpg", "assets/images/kk5.jpg", "assets/images/kk6.jpg",
        "assets/images/kk7.jpg", "assets/images/kk8.jpg", "assets/images/kk9.jpg",
        "assets/images/kk10.jpg", "assets/images/kk11.jpg", "assets/images/kk12.jpg",
        "assets/images/kk13.jpg", "assets/images/kk14.jpg", "assets/images/kk15.jpg",];

var images_ref = document.getElementById('photos-container');
var index;

for(var i = 0; i < 15; i++)
{
    for(var j = 0; j < 15; j++)
    {
        if(arrtemp[i] == images[j])
        {
            index = images.indexOf(arrtemp[i]);
            console.log(index)
            images_ref.innerHTML += '<div class="g-img"><img style="background-image:url('+images[index]+')"></div>';
        }
    }
}

// function addImages(images_ref) {
//     var images = ["assets/images/ss1.jpg", "assets/images/ss2.jpg", "assets/images/ss3.jpg", 
//                     "assets/images/ss4.jpg", "assets/images/ss5.jpg", "assets/images/ss6.jpg",
//                     "assets/images/ss7.jpg", "assets/images/ss8.jpg", "assets/images/ss9.jpg", 
//                     "assets/images/ss10.jpg", "assets/images/ss11.jpg", "assets/images/ss12.jpg", 
//                     "assets/images/ss13.jpg", "assets/images/ss14.jpg", "assets/images/ss15.jpg",];
//     var index = Math.floor(Math.random() * images.length);
//     images_ref.innerHTML += '<div class="g-img"><img style="background-image:url('+images[index]+')"></div>';
//     console.log(index)
// }

// var images_ref = document.getElementById('photos-container');

// for(var i = 0; i < 15; i++) {
//     addImages(images_ref);
// }