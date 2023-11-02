var degree_values = [];
var minute_values = [];
var place_values = [];
var final_places = [];

var nawin = 0;
var nawin_hour = 0;
var nawin_minute = 0;

var hourly_values = [];
var hourly_values_holder = [];
var checking_values = [];
var places_to_check = [];
var checking_values_TO_hour = [];
var checking_values_TO_minute = [];

var two_and_others = [];
var others_and_two = [];
var degree_two_others = [];
var Lather_two_others = [];
var hour_two_others = [];
var minute_two_others = [];

var numberFromTwo_other = [];
var minutesOfTwo_other = [];
var whichPlace_two_other = [];

var close_other_value = [];
var close_other_number = [];
var close_other_hour = [];
var close_other_minute = [];

var close_two_others;
var close_other_two;
var close_other_value_holder;
var close_other_number_holder;
var close_other_hour_holder;
var close_other_minute_holder;

var first_day_hour = 0;
var first_day_minute = 0;
var second_day_hour = 0;
var second_day_minute = 0;

var other_close_num1s = [];
var other_close_num2s = [];
var other_close_degs = [];

var close_other_div = [];
var close_other_p = [];

var la_nm = [];
var allminutes = [];
var add_values = [];

var present7 = 0;

function storeInputValues() {
  degree_values = [];
  minute_values = [];
  place_values = [];
  final_places = [];

  var degreeInputs = document.getElementsByClassName("degree");
  var minuteInputs = document.getElementsByClassName("minute");
  var placeInputs = document.getElementsByClassName("place");

  for (var i = 0; i < degreeInputs.length; i++) {
    degree_values[i] = parseInt(degreeInputs[i].value);
  }

  for (var i = 0; i < minuteInputs.length; i++) {
    minute_values[i] = parseInt(minuteInputs[i].value);
  }

  for (var i = 0; i < placeInputs.length; i++) {
    place_values[i] = parseInt(placeInputs[i].value);
  }

  for (var i = 0; i < degree_values.length; i++) {
    final_places[i] = (degree_values[i] * 60 + minute_values[i]) + (place_values[i] - 1) * 60 * 30;
  }

  present7 = degree_values[7] * 60 + minute_values[7];

  let eight_value = 1800 - (degree_values[7] * 60 + minute_values[7]);
  degree_values[7] = Math.floor(eight_value / 60);
  minute_values[7] = eight_value % 60;
  final_places[7] = degree_values[7] * 60 + minute_values[7] + (place_values[7] - 1) * 1800;
}


function storeHourMinuteValues() {
  hourly_values = [];
  hourly_values_holder = [];
  checking_values = [];
  places_to_check = [];
  checking_values_TO_hour = [];
  checking_values_TO_minute = [];
  two_and_others = [];
  others_and_two = [];
  degree_two_others = [];
  Lather_two_others = [];
  hour_two_others = [];
  minute_two_others = [];
  numberFromTwo_other = [];
  minutesOfTwo_other = [];
  whichPlace_two_other = [];
  close_other_value = [];
  close_other_number = [];
  close_other_hour = [];
  close_other_minute = [];
  close_two_others = null;
  close_other_two = null;
  close_other_value_holder = null;
  close_other_number_holder = null;
  close_other_hour_holder = null;
  close_other_minute_holder = null;
  other_close_num1s = [];
  other_close_num2s = [];
  other_close_degs = [];
  la_nm = [];
  allminutes = [];


  first_day_hour = 0;
  first_day_minute = 0;
  second_day_hour = 0;
  second_day_minute = 0;
  first_day_hour = parseInt(document.getElementById("first_day_hour").value);
  first_day_minute = parseInt(document.getElementById("first_day_minute").value);
  second_day_hour = parseInt(document.getElementById("second_day_hour").value);
  second_day_minute = parseInt(document.getElementById("second_day_minute").value);

  call_find_two();
  toCheck(first_day_hour, first_day_minute, second_day_hour, second_day_minute);
  two_others();
  close_check();
  call_difference();
  updateItemStyles();
  region();
  la();
};


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    storeInputValues();

    console.log(degree_values);
    console.log(minute_values);
    console.log(place_values);
    console.log(final_places);

  })

  document.getElementById("myForm2").addEventListener("submit", function(event) {
    event.preventDefault();

    storeHourMinuteValues();

    console.log(first_day_hour);
    console.log(first_day_minute);
    console.log(second_day_hour);
    console.log(second_day_minute);
  });
})


function toCheck(first_date_hour, first_date_minute, second_date_hour, second_date_minute){
    var increment;
    var first_date = (first_date_hour * 60) + first_date_minute;
    var second_date = (second_date_hour * 60) + second_date_minute;
    var first_date_to_check = first_date;

    if (first_date > second_date) {
        increment = (1800 - first_date + second_date) / 24;
    } else if (second_date > first_date) {
        increment = (second_date - first_date) / 24;
    }

    nawin = 12000 / increment;
    nawin_hour = Math.floor(nawin / 60);
    nawin_minute = nawin % 60;

    document.getElementById("average").innerHTML = increment.toFixed(2);
    document.getElementById("time").innerHTML = `${nawin_hour}:${nawin_minute.toFixed()}`;

    for (let i = 0; i < 24; i++) {
      first_date = (first_date + increment) % 1800;
      hourly_values.push(first_date);
    }

    hourly_values_holder = document.getElementsByClassName("hourly_values");

    for (i = 0; i < hourly_values_holder.length; i++) {
      hourly_values_holder[i].innerHTML = `${i + 1} = ${hourly_values[i].toFixed(2)}`
    }

    for (i = 0; i < 1440; i++) {
      first_date_to_check = (first_date_to_check + increment / 60) % 1800;
      checking_values.push(first_date_to_check)
    }
}

function findTwo(numberFromTwo, placeOfTwo) {

  let whichPlace, minutesOfTwo;

  whichPlace = Math.abs(place_values[numberFromTwo - 1] - placeOfTwo) * 30;
  minutesOfTwo = degree_values[numberFromTwo - 1] * 60 + minute_values[numberFromTwo - 1];

  if (whichPlace > 180) {
    whichPlace = 360 - whichPlace;
  }

  if (whichPlace === 30) {
    whichPlace = 45;
    minutesOfTwo = (minutesOfTwo + 900) % 1800;
  }

  numberFromTwo_other.push(numberFromTwo);
  minutesOfTwo_other.push(Math.abs(minutesOfTwo));
  whichPlace_two_other.push(whichPlace);  

  return [minutesOfTwo, whichPlace];
}

function call_find_two() {
  for (i = 1; i < 9; i++){
    if (i == 2) {
      continue
    } else {
      findTwo(i, place_values[1])
    }
  }
}

function two_others() {
  two_and_others = document.getElementsByClassName("two_and_others");
  others_and_two = document.getElementsByClassName("others_and_two");
  degree_two_others = document.getElementsByClassName("degree_two_others");
  Lather_two_others = document.getElementsByClassName("Lather_two_others");
  hour_two_others = document.getElementsByClassName("hour_two_others");
  minute_two_others = document.getElementsByClassName("minute_two_others")

  for (i = 0; i < numberFromTwo_other.length; i++){
    others_and_two[i].innerHTML = numberFromTwo_other[i];
    degree_two_others[i].innerHTML = whichPlace_two_other[i];
    Lather_two_others[i].innerHTML = minutesOfTwo_other[i];
  }

  for (i = 0; i < minutesOfTwo_other.length; i++){
    for (j = 0; j < checking_values.length; j++){
      if (minutesOfTwo_other[i] == Math.round(checking_values[j])){
        minutes = j + 1;
        singapore = j + 1 + 90;
        hour_two_others[i].innerHTML = (Math.floor((minutes) / 60)) + " (" + (Math.floor((singapore) / 60)) + ")"
        minute_two_others[i].innerHTML = (minutes % 60) + " (" + (singapore % 60) + ")"
      } 
    }
  }
}

function close_check(){

  close_other_number_holder = document.getElementsByClassName("close_other");
  close_other_value_holder = document.getElementsByClassName("close_lather");
  close_other_hour_holder = document.getElementsByClassName("close_hour");
  close_other_minute_holder = document.getElementsByClassName("close_minute");
  close_other_two = document.getElementsByClassName("close_two");
  close_two_others = document.getElementsByClassName("close_two_others");
  close_other_div = document.querySelectorAll('.other_close div');
  close_other_p = document.querySelectorAll('.other_close p');

  for (i = 0; i < 8; i++) {

    if (i == 1){
      continue
    }
  
    if (place_values[i] == place_values[1]) {
      close_other_number[i] = i + 1;
      close_other_value[i] = degree_values[i] * 60 + minute_values[i];
      close_other_number_holder[i].innerHTML = close_other_number[i];
      close_other_value_holder[i].innerHTML = close_other_value[i];
    } 
  }
  
  for (i = 0; i < close_other_number.length; i++){
    for (j = 0; j < checking_values.length; j++){
      if (close_other_value[i] == Math.round(checking_values[j])){
        minutes = j + 1;
        singapore = j + 1 + 90;
        close_other_hour_holder[i].innerHTML = (Math.floor((minutes) / 60)) + " (" + (Math.floor((singapore) / 60)) + ")"
        close_other_minute_holder[i].innerHTML = (minutes % 60) + " (" + (singapore % 60) + ")"
      }
    }
  }
}

function difference(num1, num2) {
  var differ = Math.abs(final_places[num1 - 1] - final_places[num2 - 1]);

  if (differ > 10800) {
    differ = 21600 - differ;
  }

  var degree_difference = Math.floor(differ / 60);
  var minute_difference = differ % 60;

  if ([44, 45, 46, 59, 60, 61, 89, 90, 91, 149, 150, 151, 179, 180, 181].includes(degree_difference)) {
    console.log(`\n${num1} --- ${num2}: ${degree_difference} degrees and ${minute_difference} minutes`);
    other_close_num1s.push(num1);
    other_close_num2s.push(num2);
    other_close_degs.push(degree_difference)
  }
}

function call_difference() {
  var other_close_num1_holder = document.getElementsByClassName("other_close_num1");
  var other_close_num2_holder = document.getElementsByClassName("other_close_num2");
  var other_close_degree_holder = document.getElementsByClassName("other_close_value");

  for (var i = 1; i <= 7; i++) {
    for (var j = i + 1; j <= 8; j++) {
      difference(i, j);
    }
  }

  for (i = 0; i < other_close_num1s.length; i++){
    other_close_num1_holder[i].innerHTML = other_close_num1s[i];
    other_close_num2_holder[i].innerHTML = other_close_num2s[i];
    other_close_degree_holder[i].innerHTML = other_close_degs[i];
  }
}

function updateItemStyles() {
  var items = document.getElementsByClassName('item');

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var value = item.innerText.trim();

    if (value === '-' || value === ' ') {
      item.style.backgroundColor = 'lightred';
      item.style.color = 'black';
    } else {
      item.style.backgroundColor = 'aquamarine';
      item.style.color = 'black';
      item.style.fontSize = 'larger';
    }
  }
}

function region() {
  let hundreds = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800];
  let values = [];
  let hourmin = [];
  let closest = Infinity;
  console.log(checking_values);

  var regionhourmin = document.querySelectorAll(".regionhourmin")

  for (i = 0; i < hundreds.length; i++){
    closest = Infinity;
    for (j = 0; j < checking_values.length; j++) {
      values[i] = Math.abs(checking_values[j] - hundreds[i]);
      if (closest > values[i]) {
        closest = values[i];
        hourmin[i] = j;
      }
    }

    console.log(`${i} is ${hourmin}`)
    
    if (hourmin[i] > 1 && hourmin[i] < 1339) {
      regionhourmin[i].innerHTML = `${Math.floor(hourmin[i] / 60)} နာရီ ${Math.round(hourmin[i] % 60, 2)} မိနစ်`
    }
  }
}

function la() {
  la_nm = document.getElementsByClassName("la");
  for (i = 0; i < place_values.length; i++) { 
    if (place_values[i] == 1 || place_values[i] == 5 || place_values[i] == 9) {
      add_values[i] = 9;
    } else if (place_values[i] == 3 || place_values[i] == 7 || place_values[i] == 11) {
      add_values[i] = 3;
    } else if (place_values[i] == 6 || place_values[i] == 10 || place_values[i] == 2) {
      add_values[i] = 6;
    } else if (place_values[i] == 12 || place_values[i] == 4 || place_values[i] == 8) {
      add_values[i] = 12;
    }
  }
  
  for (i = 0; i < 7; i++) {
    allminutes[i] = degree_values[i] * 60 + minute_values[i];
    if (allminutes[i] > 0 && allminutes[i] < 200) {
      la_nm[i].innerHTML = add_values[i] % 12;
    } else if (allminutes[i] > 200 && allminutes[i] < 400) {
      la_nm[i].innerHTML = (add_values[i] + 1) % 12;
    } else if (allminutes[i] > 400 && allminutes[i] < 600) {
      la_nm[i].innerHTML = (add_values[i] + 2) % 12;
    } else if (allminutes[i] > 600 && allminutes[i] < 800) {
      la_nm[i].innerHTML = (add_values[i] + 3) % 12;
    } else if (allminutes[i] > 800 && allminutes[i] < 1000) {
      la_nm[i].innerHTML = (add_values[i] + 4) % 12;
    } else if (allminutes[i] > 1000 && allminutes[i] < 1200) {
      la_nm[i].innerHTML = (add_values[i] + 5) % 12;
    } else if (allminutes[i] > 1200 && allminutes[i] < 1400) {
      la_nm[i].innerHTML = (add_values[i] + 6) % 12;
    } else if (allminutes[i] > 1400 && allminutes[i] < 1600) {
      la_nm[i].innerHTML = (add_values[i] + 7) % 12;
    } else if (allminutes[i] > 1600 && allminutes[i] < 1800) {
      la_nm[i].innerHTML = (add_values[i] + 8) % 12;
    } 
  }

  if (present7 > 0 && present7 < 200) {
    la_nm[i].innerHTML = add_values[i] % 12;
  } else if (present7 > 200 && present7 < 400) {
    la_nm[i].innerHTML = (add_values[i] + 1) % 12;
  } else if (present7 > 400 && present7 < 600) {
    la_nm[i].innerHTML = (add_values[i] + 2) % 12;
  } else if (present7 > 600 && present7 < 800) {
    la_nm[i].innerHTML = (add_values[i] + 3) % 12;
  } else if (present7 > 800 && present7 < 1000) {
    la_nm[i].innerHTML = (add_values[i] + 4) % 12;
  } else if (present7 > 1000 && present7 < 1200) {
    la_nm[i].innerHTML = (add_values[i] + 5) % 12;
  } else if (present7 > 1200 && present7 < 1400) {
    la_nm[i].innerHTML = (add_values[i] + 6) % 12;
  } else if (present7 > 1400 && present7 < 1600) {
    la_nm[i].innerHTML = (add_values[i] + 7) % 12;
  } else if (present7 > 1600 && present7 < 1800) {
    la_nm[i].innerHTML = (add_values[i] + 8) % 12;
  } 
}
