'use strict';

var timerId=0;
var angleValue=0; //начальный угол
const num=12;//значение элементов на часах
const distance= 360/12;
const radius = 300/2-30/2; //длина стороны div/2-длина стороны дочернего элемента/2;
var wrapper=document.getElementById('circle');
var divCenterX=wrapper.offsetLeft+wrapper.offsetWidth/2;
var divCenterY=wrapper.offsetTop+wrapper.offsetHeight/2;   
var time = new Date();
var clockHandsHours=document.getElementById('rect_h');
var clockHandsMinutes=document.getElementById('rect_min');
var clockHandsSec=document.getElementById('rect_sec');

clockHandsHours.style.top = divCenterY - clockHandsHours.offsetHeight + "px";
clockHandsHours.style.left = divCenterX - clockHandsHours.offsetWidth/2 + 'px';

clockHandsMinutes.style.top = divCenterY - clockHandsMinutes.offsetHeight + "px";
clockHandsMinutes.style.left = divCenterX - clockHandsMinutes.offsetWidth/2 + 'px';

clockHandsSec.style.top = divCenterY - clockHandsSec.offsetHeight + 'px';
clockHandsSec.style.left = divCenterX - clockHandsSec.offsetWidth/2 + 'px';

   for(var i=1;i<=num; i++){ 
        var elemClock=document.createElement('div');         
          var wrapElemClock = wrapper.appendChild(elemClock);
           elemClock.classList.add('elemClock');
         
           elemClock.innerHTML=i;  
           var angleValue = distance+angleValue; 
           var angle =angleValue / 180 * Math.PI;

          var elemClockCenterX = divCenterX + radius * Math.sin(angle);
          var elemClockCenterY = divCenterY - radius * Math.cos(angle);
           elemClock.style.left=Math.round(elemClockCenterX-elemClock.offsetWidth/2)+'px';
           elemClock.style.top=Math.round(elemClockCenterY-elemClock.offsetHeight/2)+'px';

      }



function update(){
var dW=document.getElementById('dW');
var time = new Date;
var hours = time.getHours();
      if (hours < 10) hours = '0' + hours;
      dW.children[0].innerHTML = hours;

var minutes = time.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      dW.children[1].innerHTML = minutes;

var seconds = time.getSeconds();
      if (seconds < 10) seconds = '0' + seconds;
      dW.children[2].innerHTML = seconds;  
     
var s = 360/60 * seconds; 
clockHandsSec.style.transform = "rotate(" + s + "deg)";
	    // минутнытные стрелки
var m = 360/60 * minutes; 
	    clockHandsMinutes.style.transform = "rotate(" + m+ "deg)";
	    // часовые стрелки
var h =360/12 * (hours + minutes/60); 
	    clockHandsHours.style.transform = "rotate(" + h + "deg)";
    }

  

    function clockStart() {
      timerId=setInterval(update, 1000);
      update(); // <--  начать тут же, не ждать 1 секунду пока setInterval сработает
     
    }   

   
    window.onload = update();
    window.setInterval (clockStart, 1000);

