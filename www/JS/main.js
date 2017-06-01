

////////////////////////////////////////////////////
//                            _ _            _    //
//   ___  __ _  __ _  ___ ___| | | ___ _ __ | |_  //
//  / _ \/ _` |/ _` |/ __/ _ \ | |/ _ \ '_ \| __| //
// |  __/ (_| | (_| | (_|  __/ | |  __/ | | | |_  //
//  \___|\__, |\__, |\___\___|_|_|\___|_| |_|\__| //
//       |___/ |___/                              //
////////////////////////////////////////////////////

//BY: ANNICHEN WOLL EIDE // EGGCITING EGGPERIENCE //




var counter = 0;
var path = new Array();

path[0] = {
    title: 'Set white, raw yolk',
    duration: 2,
    img: "img/2min_egg.svg"
};
path[1] = {
    title: 'Thick and runny middle',
    duration: 4,
    img: "img/4min_egg.svg"
};
path[2] = {
    title: 'Runny in the middle',
    duration: 6,
    img: "img/6min_egg.svg"
};
path[3] = {
    title: 'Set, but tender',
    duration: 8,
    img: "img/8min_egg.svg"
};
path[4] = {
    title: 'Fully set',
    duration: 10,
    img: "img/10min_egg.svg"
};



var titleInput = document.querySelector('.title');
var prevArrow = document.querySelector('#left_arrow');
var nextArrow = document.querySelector('#right_arrow');
var minuteInput = document.querySelector('.minutes');

prevArrow.style.opacity = '0.3';

//RIGHT ARROW CLICK
nextArrow.addEventListener('click', function () {



    if (counter === path.length - 1) {
        counter = 4;
    } else {
        counter++;
    }
    
    if(counter == 4) nextArrow.style.opacity = '0.3';
    if(counter > 0)  prevArrow.style.opacity = '1';
    
    var eggObj = path[counter];
    titleInput.textContent = eggObj.title;
    document.querySelector('#egg1').src = eggObj.img;
    minuteInput.textContent = eggObj.duration +' minutes';
});

//LEFT ARROW CLICK
prevArrow.addEventListener('click', function () {

    if (counter === 0) {
        counter = 0;
    } else {
        counter--;
    }
    
    if(counter == 0) prevArrow.style.opacity='0.3';
    if(counter < 4)  nextArrow.style.opacity='1';

    var eggObj = path[counter];
    titleInput.textContent = eggObj.title;
    document.querySelector('#egg1').src = eggObj.img;
    minuteInput.textContent = eggObj.duration +' minutes';
});



//BYTT SIDE

var btnNext1 = document.querySelector('.btntoggle1');
var btnNext2 = document.querySelector('.btntoggle2');
var btnQuit = document.querySelector('.btntoggle3');
var btnBack = document.querySelector('.btntoggle4');
var btnBack1 = document.querySelector('#back_btn');


var firstPage = document.querySelector('.first_page');
var secondPage = document.querySelector('.second_page');
var thirdPage = document.querySelector('.third_page');
var fourthPage = document.querySelector('.fourth_page');

btnNext1.addEventListener('click', function(event) {
    
    secondPage.classList.toggle('hidden');
    firstPage.classList.toggle('hidden');
});

btnBack1.addEventListener('click', function(event) {
    
    firstPage.classList.toggle('hidden');
    secondPage.classList.toggle('hidden');
});

btnNext2.addEventListener('click', function(event) {
    
    var eggObj = path[counter];
    timeTextObject.textContent = eggObj.duration +':00';
    duration.min = eggObj.duration;
    thirdPage.classList.toggle('hidden');
    secondPage.classList.toggle('hidden');
    handleStartButtonClick();
});

btnBack.addEventListener('click', function(event) {
    
    firstPage.classList.toggle('hidden');
    fourthPage.classList.toggle('hidden');
    
    resetAudio();
});

btnQuit.addEventListener('click', function(event) {
    thirdPage.classList.toggle('hidden');
    firstPage.classList.toggle('hidden');
    resetTimer(); 
    
    
});

//POMODORO TIMER

var duration = {};
duration.min = 0;
duration.sec = 0;


//fetch ui elements
var timeTextObject = document.querySelector('.timer');
var startButton = document.querySelector('.btntoggle3');


//add event listener to the start button

var intervalObj;

function handleStartButtonClick() {

    // start interval timer
    // var intervalObj = setInterval(handleInterval, 1000);

    intervalObj = setInterval(handleInterval, 1000);
    
    function handleInterval() {

        if (duration.min == 0 && duration.sec == 0) {

            clearInterval(intervalObj);
            playAlarm();
            
            fourthPage.classList.toggle('hidden');
            thirdPage.classList.toggle('hidden');
        } else {

            countDown();
            showDuration();
        }
    };
}

//decrease duration by 1 sec
function countDown() {

    duration.sec = duration.sec - 1;

    if (duration.sec < 0) {
        duration.min = duration.min - 1;
        duration.sec = 59;
    }
}

//remaining duration
function showDuration() {

    var min = duration.min;
    var sec = duration.sec;

    if (min < 10) {
        //min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    timeTextObject.textContent = min + ':' + sec;
}

function resetTimer(){
    clearTimeout(intervalObj);
    duration.sec = 0;
    duration.min = 0;
}

//TIMER IS DONE PLAY ALARM

var audio = new Audio('alarm_sound/alarm.mp3');

function playAlarm(){
    audio.play();
}

function resetAudio (){
    audio.pause();
}
