function randomCard() {


    var numbers = [2,3,4,5,6,7,8,9,"J","Q","K","A"]
    var icons = ["&#9674;","&#9824;","&#9827;","&#9829;","&#9830;"]
    var images = ["https://st3.depositphotos.com/4920461/16640/v/1600/depositphotos_166404408-stock-illustration-jack-of-hearts-playing-card.jpg",
        "https://cdn3.vectorstock.com/i/1000x1000/18/92/king-skull-in-royal-gold-crown-vector-8241892.jpg",
        "https://c8.alamy.com/comp/J7J1PB/face-queen-of-playing-card-poker-character-J7J1PB.jpg",
        "https://i.dlpng.com/static/png/302514_preview.png"
    ]


    var randomIcon = Math.floor(Math.random() * icons.length);
    var randomNumber = Math.floor(Math.random() * numbers.length);
    var randomImage = Math.floor(Math.random() * images.length);

    var theNumber = document.querySelector('.theNumber');
    var theIcon = document.querySelector('.theIcon');
    var theNumber2 = document.querySelector('.theNumber2');
    var theIcon2 = document.querySelector('.theIcon2');
    var image = document.querySelector('.theCard');

    theIcon.innerHTML = icons[randomIcon];
    theNumber.innerHTML = numbers[randomNumber];
    theIcon2.innerHTML = icons[randomIcon];
    theNumber2.innerHTML = numbers[randomNumber];
    image.style.backgroundImage = "url('"+images[randomImage]+"')";



    ////var theImage = "https://image.shutterstock.com/image-vector/beautiful-face-queen-icon-600w-315462977.jpg";
    //
    //var cards = [
    //
    //    ["el icono del fonta", "del 1 al 13", "la imagen"],
    //
    //    ["el icono del fonta", (Math.floor(Math.random()*10), "la imagen"],
    //
    //    ["el icono del fonta", "Q", "la imagen"],
    //
    //    ["el icono del fonta", "K", "imagen"],
    //
    //    ["el icono del fonta", "del 1 al 13", "imagen"],
    //
    //    ["el icono del fonta", "del 1 al 13", "imagen"]
    //
    //]
    //
    //var randomCard = Math.floor(Math.random() * 4);
    //
    //theIcon.innerHTML = cards[randomCard][0];
    //theNumber.innerHTML = cards[randomCard][1];

}


//theImage.innerHTML = cards[randomCard][1];





// SETTING THE NEW CARD






