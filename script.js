var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function $id(id) {
    return document.getElementById(id);
}

function start() {

      if (!timer){
          timer = true;
      $id("start").innerHTML = '<i class="far fa-pause-circle"></i> Pause';
          stopwatch();
      }
      else
      {
          timer=false;
          $id("start").innerHTML = '<i class="far fa-play-circle"></i> Start';
      }
    
}

$id("stop").addEventListener('click', function () {
  timer = false;
});

function reset() {
    timer = false;
    $id("start").innerHTML = '<i class="far fa-play-circle"></i> Start';

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    $id("hr").innerHTML = "00";
    $id("min").innerHTML = "00";
    $id("sec").innerHTML = "00";
    $id("count").innerHTML = "00";

    $id("record-table-body").innerHTML = "";
    lapCounter = 1;

}

let timeoutId;
function stopwatch() {
    clearTimeout(timeoutId);

    if (timer == true)
        count = count + 1;

    if (count == 99) {
        sec = sec + 1;
        count = 0;
    }
    if (sec == 59) {
        min = min + 1;
        sec = 0;
    }
    if (min == 59) {
        hr = hr + 1;
        min = 0;
        sec = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if (hr < 10) {
        hrString = "0" + hrString;
    }
    if (min < 10) {
        minString = "0" + minString;
    }
    if (sec < 10) {
        secString = "0" + secString;
    }
    if (count < 10) {
        countString = "0" + countString;
    }

    $id("hr").innerHTML = hrString;
    $id("min").innerHTML = minString;
    $id("sec").innerHTML = secString;
    $id("count").innerHTML = countString;
    timeoutId = setTimeout("stopwatch()", 10);
}





let date;
let day;
let dayn;
let month;
setInterval(() => {
    date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();

   
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }


      switch (new Date().getMonth()) {
        case 0:
          month = "Jan";
          break;
        case 1:
          month = "Feb";
          break;
        case 2:
            month = "March";
          break;
        case 3:
            month = "April";
          break;
        case 4:
            month = "May";
          break;
        case 5:
            month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
            month = "Aug";
          break;
         case 8:
            month = "Sept";
          break;
          case 9:
            month = "Oct";
          break;
          case 10:
            month = "Nov";
          break;
          case 11:
            month = "Dec";
          break;
      }
   
      
      dayn =date.getDate();

      date = dayn+" "+month+"  , "+year;
    $id('d1').innerHTML = date;
}, 1000);