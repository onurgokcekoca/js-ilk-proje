// Clock
function time(){
    var h = document.querySelector(".hours")
    var m = document.querySelector(".minutes")
    var s = document.querySelector(".seconds")
    var d = document.querySelector(".day")
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDay();
    console.log(day);
    
    //Gün

    switch(day){
        case 0:
            d.innerHTML = "pazar";
            break;
        
        case 1:
            d.innerHTML = "pazartesi";
            break;

    
        case 2:
            d.innerHTML = "salı";
            break;

        case 3:
            d.innerHTML = "çarşamba";
            break;
    
        case 4:
            d.innerHTML = "perşembe";
            break;
    
        case 5:
            d.innerHTML = "cuma";
            break;

        case 6:
            d.innerHTML = "cumartesi";
            break;
    }


    //Baslarına 0 eklemek
    hours < 10 ? hours = "0" + hours : hours;
    minutes < 10 ? minutes = "0" + minutes : minutes;
    seconds < 10 ? seconds = "0" + seconds : seconds;
    
    //Süreyi Göstermek
    h.textContent = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
    // if(hours < 10){
    //     hours = "asdas" + hours;
    //     console.log(hours);
    // }


}

setInterval(time, 1000);

let isim = document.querySelector("#name");
let askName = prompt("İsminiz : ");

// isim girilmediğinde...
isim.innerHTML = isNaN(askName) ? askName : "" ; 

