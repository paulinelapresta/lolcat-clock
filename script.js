var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById ("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById ("lunchTimeSelector");
var napTimeSelector = document.getElementById ("napTimeSelector");

var isPartyTime = false;

var updateClock = function()
{
var timeEventJS = document.getElementById("timeEvent");

//Images//
var lolcat = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
} else if (time == napTime) {
    messageText = "IZ NAP TIME...";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} else if (time == wakeUpTime) {
    messageText = "IZ TIME TO GETTUP.";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening) {
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";
}
timeEventJS.innerText = messageText;
lolcat.src = image;

//Clock//
var showCurrentTime = function ()
{
	var clock = document.getElementById('clock');

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	//Hours//
	if (hours >= noon)
	{
		meridian = "PM";
	}
	if (hours > noon)
	{
		hours = hours - 12;
	}

	//Minutes//
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}

	//Seconds//
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}

	//Put together the string that displays the time//
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
	clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();

var oneSecond = 1000;

setInterval (updateClock, oneSecond);

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = "PARTY TIME!";
	   	partyTimeButton.style.backgroundColor = "#222";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER!";
	   partyTimeButton.style.backgroundColor = "#222";
   }
};

var wakeUpEvent = function()
{
	wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function()
{
	lunchTime = lunchTimeSelector.value;
};

var napEvent = function()
{
	napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener ("click", partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
