var audio = new Audio("audio_clips/REC_0000094.mp3");
var width = 0;
var h = 0;
var po = 0;
var w = 0;
var e = 0;
function KeyCheck(event) {
  var k = event.which;
  if (k == 32) {
    if (w == 0) {
      clearInterval(po);
      w = setInterval(m, 1000);
      e = setInterval(nnn, 1000);
    }
  }
  if (k == 13) {
    if (po == 0) {
      audio.play();
      po = setInterval(xo, 1000);
    }
  }
}
function xo() {
  h = h + 1;
  document.getElementById("score").innerHTML = h;
}

//var p = 213215;192216;202116
var time = 0;
var hh = 20;
var mm = 21;
var ss = 20;
function m() {
  ss = ss + 1;
  if (ss == 60) {
    ss = 0;
    mm = mm + 1;
    if (mm == 60) {
      mm = 0;
      hh = hh + 1;
    }
  }
  if (ss < 10) {
    if (mm < 10) {
      time = "" + hh + "0" + mm + "0" + ss;
    } else {
      time = "" + hh + mm + "0" + ss;
    }
  } else {
    if (mm < 10) {
      time = "" + hh + "0" + mm + ss;
    } else {
      time = "" + hh + mm + ss;
    }
  }

  document.getElementById("score").innerHTML = time;

  //p = p + 1;
  //Screenshot_20220711-145402_Zoom.jpg
  var x = "screenshots/Screenshot_20220920-" + time + "_Zoom.jpg";
  //var y = p - 1;
  var image = document.querySelector("#img");
  width = image.naturalWidth;

  document.getElementById("img").src = x;
  if (time==220520){
    window.close();
  }
}

//########################################
var time2 = 0;
var hh2 = 20;
var mm2 = 21;
var ss2 = 19;
function nnn() {
  ss2 = ss2 + 1;
  if (ss2 == 60) {
    ss2 = 0;
    mm2 = mm2 + 1;
    if (mm2 == 60) {
      mm2 = 0;
      hh2 = hh2 + 1;
    }
  }
  if (ss2 < 10) {
    if (mm2 < 10) {
      time2 = "" + hh2 + "0" + mm2 + "0" + ss2;
    } else {
      time2 = "" + hh2 + mm2 + "0" + ss2;
    }
  } else {
    if (mm2 < 10) {
      time2 = "" + hh2 + "0" + mm2 + ss2;
    } else {
      time2 = "" + hh2 + mm2 + ss2;
    }
  }
  if (width == 2340) {
    document.getElementById("main").style.backgroundImage =
      "url('screenshots/Screenshot_20220920-" + time2 + "_Zoom.jpg')";
  }
}
//########################################