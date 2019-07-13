const Myclass = document.querySelector('.nav-responsive');
const iconBtn = document.querySelector('.button');
let Btn = 1;
iconBtn.addEventListener('click',  function Moses(){
    if(Btn === 0){
        Myclass.style.display = 'none'
        Btn = 1;
    }else{
        Myclass.style.display = 'block';
        Btn = 0;
    }
})

var countDownDate = new Date("Jun 24, 2020 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".timer").innerHTML = "EXPIRED";
  }
}, 1000);