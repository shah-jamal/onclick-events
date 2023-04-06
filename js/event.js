function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//onclick example by setting a function
const blueButton = document.getElementById('make-blue-btn');
blueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//onclick example by setting a anonimous function
const yellowButton = document.getElementById('make-Yellow-btn');
yellowButton.onclick = function(){
    document.body.style.backgroundColor = 'yellow';
}

//onclick example by setting addEventsListener and function
const hotPinkButton = document.getElementById('make-HotPink-btn');
hotPinkButton.addEventListener('click', makeHotPink);
function makeHotPink(){
    document.body.style.backgroundColor = 'hotPink';
}

//onclick example by setting addEventsListener and anonimous function
const tomatoButton = document.getElementById('make-Tomato-btn');
tomatoButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
});

//sortcut way
const seeGreenButton = document.getElementById('make-SeaGreen-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = 'seaGreen';
});

