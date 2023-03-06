let hr = document.getElementById('hora')
let min = document.getElementById('min')
let seg = document.getElementById('sec')
let corpo = document.getElementsByTagName('body')[0]



const relogio = setInterval(function time(){

    var data = new Date()
     var horas = data.getHours()
     var minutos = data.getMinutes()
     var segundos = data.getSeconds()

     if (horas < 10) horas = '0' + horas;
     if (minutos < 10) minutos = '0' + minutos;
     if (segundos < 10) segundos = '0' + segundos;

    hr.textContent = horas
    min.textContent = minutos
    seg.textContent = segundos

    if(horas >= 0 && horas <= 5){
        corpo.style.backgroundImage= 'url(noite.jpg)'
    } else if(horas >=6 && horas <= 11){
        corpo.style.backgroundImage= 'url(manhã.jpg)'
    } else if (horas >= 12 && horas <= 18){
        corpo.style.backgroundImage= 'url(tarde.jpg)'
    }
    
})

