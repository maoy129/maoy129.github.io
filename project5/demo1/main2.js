$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#nyShape").attr("data","1.svg");
        } else if (humidity <= 40){
            $("#nyShape").attr("data","2.svg");
        } else if (humidity <= 60){
            $("#nyShape").attr("data","3.svg");
        } else if (humidity <= 80){
            $("#nyShape").attr("data","4.svg");
        } else if (humidity <= 100){
            $("#nyShape").attr("data","5.svg");
        }
        //$("#nyBlock").append("Humidity: "+ humidity + "%" + "</br>");


    var winddeg = data.wind.deg;
    console.log(winddeg);
    //$("#nyBlock").append("Wind Degree: "+ winddeg + "</br>");


        if (winddeg <= 180){
            $("#nyShape").css("animation-name", "rotation");
            $("#nyShape").css("animation-iteration-count", "infinite");
            $("#nyShape").css("animation-direction", "normal");
            $("#nyShape").css("animation-timing-function", "linear");
        } else {
            $("#nyShape").css("animation-name", "rotation");
            $("#nyShape").css("animation-iteration-count", "infinite");
            $("#nyShape").css("animation-direction", "reverse");
            $("#nyShape").css("animation-timing-function", "linear");
        }

    var windspeed = data.wind.speed;
    console.log(windspeed);
    //$("#nyBlock").append("Wind Speed: "+ windspeed);

    if (windspeed <= 0.5){
            $("#nyShape").css("animation-duration", "102.4s");
        }else if (windspeed <= 1.5){
            $("#nyShape").css("animation-duration", "51.2s");
        }else if (windspeed <= 3.4){
            $("#nyShape").css("animation-duration", "25.6s");
        }else if (windspeed <= 5.5){
            $("#nyShape").css("animation-duration", "12.8s");
        }else if (windspeed <= 7.9){
            $("#nyShape").css("animation-duration", "6.4s");
        }else if (windspeed <= 10.7){
            $("#nyShape").css("animation-duration", "3.2s");
        }else if (windspeed <= 13.8){
            $("#nyShape").css("animation-duration", "1.6s");
        }else if (windspeed <= 17.1){
            $("#nyShape").css("animation-duration", "0.8s");
        }else if (windspeed > 17.1){
            $("#nyShape").css("animation-duration", "0.4s");
        }

    var temp = data.main.temp;
    console.log(temp);
    if (temp <= 5){
            $("#nyShape").css("width", "5vmax");
        }else if (temp <= 10){
            $("#nyShape").css("width", "10vmax");
        }else if (temp <= 15){
            $("#nyShape").css("width", "15vmax");   
        }else if (temp <= 20){
            $("#nyShape").css("width", "20vmax");   
        }else if (temp <= 25){
            $("#nyShape").css("width", "25vmax");   
        }else if (temp <= 30){
            $("#nyShape").css("width", "30vmax");   
        }else if (temp <= 35){
            $("#nyShape").css("width", "35vmax");   
        }else if (temp <= 40){
            $("#nyShape").css("width", "40vmax");   
        }else if (temp > 40){
            $("#nyShape").css("width", "45vmax");
        }

    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=1816670&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#bjShape").attr("data","1.svg");
        } else if (humidity <= 40){
            $("#bjShape").attr("data","2.svg");
        } else if (humidity <= 60){
            $("#bjShape").attr("data","3.svg");
        } else if (humidity <= 80){
            $("#bjShape").attr("data","4.svg");
        } else if (humidity <= 100){
            $("#bjShape").attr("data","5.svg");
        }

    //$("#bjBlock").append("Humidity: "+ humidity + "%" + "</br>");


    var winddeg = data.wind.deg;
    console.log(winddeg);
    //$("#bjBlock").append("Wind Degree: "+ winddeg + "</br>");

        if (winddeg <= 180){
            $("#bjShape").css("animation-name", "rotation");
            $("#bjShape").css("animation-duration", "10s");
            $("#bjShape").css("animation-iteration-count", "infinite");
            $("#bjShape").css("animation-direction", "normal");
            $("#bjShape").css("animation-timing-function", "linear");
        } else {
            $("#bjShape").css("animation-name", "rotation");
            $("#bjShape").css("animation-duration", "10s");
            $("#bjShape").css("animation-iteration-count", "infinite");
            $("#bjShape").css("animation-direction", "reverse");
            $("#bjShape").css("animation-timing-function", "linear");
        }

    var windspeed = data.wind.speed;
    console.log(windspeed);
    //$("#bjBlock").append("Wind Speed: "+ windspeed);

    if (windspeed <= 0.5){
            $("#bjShape").css("animation-duration", "102.4s");
        }else if (windspeed <= 1.5){
            $("#bjShape").css("animation-duration", "51.2s");
        }else if (windspeed <= 3.4){
            $("#bjShape").css("animation-duration", "25.6s");
        }else if (windspeed <= 5.5){
            $("#bjShape").css("animation-duration", "12.8s");
        }else if (windspeed <= 7.9){
            $("#bjShape").css("animation-duration", "6.4s");
        }else if (windspeed <= 10.7){
            $("#bjShape").css("animation-duration", "3.2s");
        }else if (windspeed <= 13.8){
            $("#bjShape").css("animation-duration", "1.6s");
        }else if (windspeed <= 17.1){
            $("#bjShape").css("animation-duration", "0.8s");
        }else if (windspeed > 17.1){
            $("#bjShape").css("animation-duration", "0.4s");
        }

    var temp = data.main.temp;
    console.log(temp);
    if (temp <= 5){
            $("#bjShape").css("width", "5vmax");
        }else if (temp <= 10){
            $("#bjShape").css("width", "10vmax");
        }else if (temp <= 15){
            $("#bjShape").css("width", "15vmax");   
        }else if (temp <= 20){
            $("#bjShape").css("width", "20vmax");   
        }else if (temp <= 25){
            $("#bjShape").css("width", "25vmax");   
        }else if (temp <= 30){
            $("#bjShape").css("width", "30vmax");   
        }else if (temp <= 35){
            $("#bjShape").css("width", "35vmax");   
        }else if (temp <= 40){
            $("#bjShape").css("width", "40vmax");   
        }else if (temp > 40){
            $("#bjShape").css("width", "45vmax");
        }



    });


});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=1796236&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#shShape").attr("data","1.svg");
        } else if (humidity <= 40){
            $("#shShape").attr("data","2.svg");
        } else if (humidity <= 60){
            $("#shShape").attr("data","3.svg");
        } else if (humidity <= 80){
            $("#shShape").attr("data","4.svg");
        } else if (humidity <= 100){
            $("#shShape").attr("data","5.svg");
        }

    //$("#shBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    //$("#shBlock").append("Wind Degree: "+ winddeg + "</br>");

        if (winddeg <= 180){
            $("#shShape").css("animation-name", "rotation");
            $("#shShape").css("animation-duration", "10s");
            $("#shShape").css("animation-iteration-count", "infinite");
            $("#shShape").css("animation-direction", "normal");
            $("#shShape").css("animation-timing-function", "linear");
        } else {
            $("#shShape").css("animation-name", "rotation");
            $("#shShape").css("animation-duration", "10s");
            $("#shShape").css("animation-iteration-count", "infinite");
            $("#shShape").css("animation-direction", "reverse");
            $("#shShape").css("animation-timing-function", "linear");
        }

    var windspeed = data.wind.speed;
    console.log(windspeed);
    //$("#shBlock").append("Wind Speed: "+ windspeed);

    if (windspeed <= 0.5){
            $("#shShape").css("animation-duration", "102.4s");
        }else if (windspeed <= 1.5){
            $("#shShape").css("animation-duration", "51.2s");
        }else if (windspeed <= 3.4){
            $("#shShape").css("animation-duration", "25.6s");
        }else if (windspeed <= 5.5){
            $("#shShape").css("animation-duration", "12.8s");
        }else if (windspeed <= 7.9){
            $("#shShape").css("animation-duration", "6.4s");
        }else if (windspeed <= 10.7){
            $("#shShape").css("animation-duration", "3.2s");
        }else if (windspeed <= 13.8){
            $("#shShape").css("animation-duration", "1.6s");
        }else if (windspeed <= 17.1){
            $("#shShape").css("animation-duration", "0.8s");
        }else if (windspeed > 17.1){
            $("#shShape").css("animation-duration", "0.4s");
        }

    var temp = data.main.temp;
    console.log(temp);
    if (temp <= 5){
            $("#shShape").css("width", "5vmax");
        }else if (temp <= 10){
            $("#shShape").css("width", "10vmax");
        }else if (temp <= 15){
            $("#shShape").css("width", "15vmax");   
        }else if (temp <= 20){
            $("#shShape").css("width", "20vmax");   
        }else if (temp <= 25){
            $("#shShape").css("width", "25vmax");   
        }else if (temp <= 30){
            $("#shShape").css("width", "30vmax");   
        }else if (temp <= 35){
            $("#shShape").css("width", "35vmax");   
        }else if (temp <= 40){
            $("#shShape").css("width", "40vmax");   
        }else if (temp > 40){
            $("#shShape").css("width", "45vmax");
        }

    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#tkShape").attr("data","1.svg");
        } else if (humidity <= 40){
            $("#tkShape").attr("data","2.svg");
        } else if (humidity <= 60){
            $("#tkShape").attr("data","3.svg");
        } else if (humidity <= 80){
            $("#tkShape").attr("data","4.svg");
        } else if (humidity <= 100){
            $("#tkShape").attr("data","5.svg");
        }

    //$("#tkBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    //$("#tkBlock").append("Wind Degree: "+ winddeg + "</br>");

        if (winddeg <= 180){
            $("#tkShape").css("animation-name", "rotation");
            $("#tkShape").css("animation-duration", "10s");
            $("#tkShape").css("animation-iteration-count", "infinite");
            $("#tkShape").css("animation-direction", "normal");
            $("#tkShape").css("animation-timing-function", "linear");
        } else {
            $("#tkShape").css("animation-name", "rotation");
            $("#tkShape").css("animation-duration", "10s");
            $("#tkShape").css("animation-iteration-count", "infinite");
            $("#tkShape").css("animation-direction", "reverse");
            $("#tkShape").css("animation-timing-function", "linear");
        }

    var windspeed = data.wind.speed;
    console.log(windspeed);
    //$("#tkBlock").append("Wind Speed: "+ windspeed);

    if (windspeed <= 0.5){
            $("#tkShape").css("animation-duration", "102.4s");
        }else if (windspeed <= 1.5){
            $("#tkShape").css("animation-duration", "51.2s");
        }else if (windspeed <= 3.4){
            $("#tkShape").css("animation-duration", "25.6s");
        }else if (windspeed <= 5.5){
            $("#tkShape").css("animation-duration", "12.8s");
        }else if (windspeed <= 7.9){
            $("#tkShape").css("animation-duration", "6.4s");
        }else if (windspeed <= 10.7){
            $("#tkShape").css("animation-duration", "3.2s");
        }else if (windspeed <= 13.8){
            $("#tkShape").css("animation-duration", "1.6s");
        }else if (windspeed <= 17.1){
            $("#tkShape").css("animation-duration", "0.8s");
        }else if (windspeed > 17.1){
            $("#tkShape").css("animation-duration", "0.4s");
        }

    var temp = data.main.temp;
    console.log(temp);
    if (temp <= 5){
            $("#tkShape").css("width", "5vmax");
        }else if (temp <= 10){
            $("#tkShape").css("width", "10vmax");
        }else if (temp <= 15){
            $("#tkShape").css("width", "15vmax");   
        }else if (temp <= 20){
            $("#tkShape").css("width", "20vmax");   
        }else if (temp <= 25){
            $("#tkShape").css("width", "25vmax");   
        }else if (temp <= 30){
            $("#tkShape").css("width", "30vmax");   
        }else if (temp <= 35){
            $("#tkShape").css("width", "35vmax");   
        }else if (temp <= 40){
            $("#tkShape").css("width", "40vmax");   
        }else if (temp > 40){
            $("#tkShape").css("width", "45vmax");
        }
    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=1733046&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#klShape").attr("data","1.svg");
        } else if (humidity <= 40){
            $("#klShape").attr("data","2.svg");
        } else if (humidity <= 60){
            $("#klShape").attr("data","3.svg");
        } else if (humidity <= 80){
            $("#klShape").attr("data","4.svg");
        } else if (humidity <= 100){
            $("#klShape").attr("data","5.svg");
        }

    //$("#klBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    //$("#klBlock").append("Wind Degree: "+ winddeg + "</br>");

        if (winddeg <= 180){
            $("#klShape").css("animation-name", "rotation");
            $("#klShape").css("animation-duration", "10s");
            $("#klShape").css("animation-iteration-count", "infinite");
            $("#klShape").css("animation-direction", "normal");
            $("#klShape").css("animation-timing-function", "linear");
        } else {
            $("#klShape").css("animation-name", "rotation");
            $("#klShape").css("animation-duration", "10s");
            $("#klShape").css("animation-iteration-count", "infinite");
            $("#klShape").css("animation-direction", "reverse");
            $("#klShape").css("animation-timing-function", "linear");
        }

    var windspeed = data.wind.speed;
    console.log(windspeed);
    //$("#klBlock").append("Wind Speed: "+ windspeed);

    if (windspeed <= 0.5){
            $("#klShape").css("animation-duration", "102.4s");
        }else if (windspeed <= 1.5){
            $("#klShape").css("animation-duration", "51.2s");
        }else if (windspeed <= 3.4){
            $("#klShape").css("animation-duration", "25.6s");
        }else if (windspeed <= 5.5){
            $("#klShape").css("animation-duration", "12.8s");
        }else if (windspeed <= 7.9){
            $("#klShape").css("animation-duration", "6.4s");
        }else if (windspeed <= 10.7){
            $("#klShape").css("animation-duration", "3.2s");
        }else if (windspeed <= 13.8){
            $("#klShape").css("animation-duration", "1.6s");
        }else if (windspeed <= 17.1){
            $("#klShape").css("animation-duration", "0.8s");
        }else if (windspeed > 17.1){
            $("#klShape").css("animation-duration", "0.4s");
        }

    var temp = data.main.temp;
    console.log(temp);
    if (temp <= 5){
            $("#klShape").css("width", "5vmax");
        }else if (temp <= 10){
            $("#klShape").css("width", "10vmax");
        }else if (temp <= 15){
            $("#klShape").css("width", "15vmax");   
        }else if (temp <= 20){
            $("#klShape").css("width", "20vmax");   
        }else if (temp <= 25){
            $("#klShape").css("width", "25vmax");   
        }else if (temp <= 30){
            $("#klShape").css("width", "30vmax");   
        }else if (temp <= 35){
            $("#klShape").css("width", "35vmax");   
        }else if (temp <= 40){
            $("#klShape").css("width", "40vmax");   
        }else if (temp > 40){
            $("#klShape").css("width", "45vmax");
        }

    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#ldShape").attr("data","1.svg");
        } else if (humidity <= 40){
            $("#ldShape").attr("data","2.svg");
        } else if (humidity <= 60){
            $("#ldShape").attr("data","3.svg");
        } else if (humidity <= 80){
            $("#ldShape").attr("data","4.svg");
        } else if (humidity <= 100){
            $("#ldShape").attr("data","5.svg");
        }

    //$("#ldBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    //$("#ldBlock").append("Wind Degree: "+ winddeg + "</br>");

        if (winddeg <= 180){
            $("#ldShape").css("animation-name", "rotation");
            $("#ldShape").css("animation-duration", "10s");
            $("#ldShape").css("animation-iteration-count", "infinite");
            $("#ldShape").css("animation-direction", "normal");
            $("#ldShape").css("animation-timing-function", "linear");
        } else {
            $("#ldShape").css("animation-name", "rotation");
            $("#ldShape").css("animation-duration", "10s");
            $("#ldShape").css("animation-iteration-count", "infinite");
            $("#ldShape").css("animation-direction", "reverse");
            $("#ldShape").css("animation-timing-function", "linear");
        }

    var windspeed = data.wind.speed;
    console.log(windspeed);
    //$("#ldBlock").append("Wind Speed: "+ windspeed);

    if (windspeed <= 0.5){
            $("#ldShape").css("animation-duration", "102.4s");
        }else if (windspeed <= 1.5){
            $("#ldShape").css("animation-duration", "51.2s");
        }else if (windspeed <= 3.4){
            $("#ldShape").css("animation-duration", "25.6s");
        }else if (windspeed <= 5.5){
            $("#ldShape").css("animation-duration", "12.8s");
        }else if (windspeed <= 7.9){
            $("#ldShape").css("animation-duration", "6.4s");
        }else if (windspeed <= 10.7){
            $("#ldShape").css("animation-duration", "3.2s");
        }else if (windspeed <= 13.8){
            $("#ldShape").css("animation-duration", "1.6s");
        }else if (windspeed <= 17.1){
            $("#ldShape").css("animation-duration", "0.8s");
        }else if (windspeed > 17.1){
            $("#ldShape").css("animation-duration", "0.4s");
        }

    var temp = data.main.temp;
    console.log(temp);
    if (temp <= 5){
            $("#ldShape").css("width", "5vmax");
        }else if (temp <= 10){
            $("#ldShape").css("width", "10vmax");
        }else if (temp <= 15){
            $("#ldShape").css("width", "15vmax");   
        }else if (temp <= 20){
            $("#ldShape").css("width", "20vmax");   
        }else if (temp <= 25){
            $("#ldShape").css("width", "25vmax");   
        }else if (temp <= 30){
            $("#ldShape").css("width", "30vmax");   
        }else if (temp <= 35){
            $("#ldShape").css("width", "35vmax");   
        }else if (temp <= 40){
            $("#ldShape").css("width", "40vmax");   
        }else if (temp > 40){
            $("#ldShape").css("width", "45vmax");
        }

    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=2147714&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#snShape").attr("data","1.svg");
        } else if (humidity <= 40){
            $("#snShape").attr("data","2.svg");
        } else if (humidity <= 60){
            $("#snShape").attr("data","3.svg");
        } else if (humidity <= 80){
            $("#snShape").attr("data","4.svg");
        } else if (humidity <= 100){
            $("#snShape").attr("data","5.svg");
        }

    //$("#snBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    //$("#snBlock").append("Wind Degree: "+ winddeg + "</br>");

        if (winddeg <= 180){
            $("#snShape").css("animation-name", "rotation");
            $("#snShape").css("animation-duration", "10s");
            $("#snShape").css("animation-iteration-count", "infinite");
            $("#snShape").css("animation-direction", "normal");
            $("#snShape").css("animation-timing-function", "linear");
        } else {
            $("#snShape").css("animation-name", "rotation");
            $("#snShape").css("animation-duration", "10s");
            $("#snShape").css("animation-iteration-count", "infinite");
            $("#snShape").css("animation-direction", "reverse");
            $("#snShape").css("animation-timing-function", "linear");
        }

    var windspeed = data.wind.speed;
    console.log(windspeed);
    //$("#snBlock").append("Wind Speed: "+ windspeed);

    if (windspeed <= 0.5){
            $("#snShape").css("animation-duration", "102.4s");
        }else if (windspeed <= 1.5){
            $("#snShape").css("animation-duration", "51.2s");
        }else if (windspeed <= 3.4){
            $("#snShape").css("animation-duration", "25.6s");
        }else if (windspeed <= 5.5){
            $("#snShape").css("animation-duration", "12.8s");
        }else if (windspeed <= 7.9){
            $("#snShape").css("animation-duration", "6.4s");
        }else if (windspeed <= 10.7){
            $("#snShape").css("animation-duration", "3.2s");
        }else if (windspeed <= 13.8){
            $("#snShape").css("animation-duration", "1.6s");
        }else if (windspeed <= 17.1){
            $("#snShape").css("animation-duration", "0.8s");
        }else if (windspeed > 17.1){
            $("#snShape").css("animation-duration", "0.4s");
        }

    var temp = data.main.temp;
    console.log(temp);
    if (temp <= 5){
            $("#snShape").css("width", "5vmax");
        }else if (temp <= 10){
            $("#snShape").css("width", "10vmax");
        }else if (temp <= 15){
            $("#snShape").css("width", "15vmax");   
        }else if (temp <= 20){
            $("#snShape").css("width", "20vmax");   
        }else if (temp <= 25){
            $("#snShape").css("width", "25vmax");   
        }else if (temp <= 30){
            $("#snShape").css("width", "30vmax");   
        }else if (temp <= 35){
            $("#snShape").css("width", "35vmax");   
        }else if (temp <= 40){
            $("#snShape").css("width", "40vmax");   
        }else if (temp > 40){
            $("#snShape").css("width", "45vmax");
        }
    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=2988507&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#prShape").attr("data","1.svg");
        } else if (humidity <= 40){
            $("#prShape").attr("data","2.svg");
        } else if (humidity <= 60){
            $("#prShape").attr("data","3.svg");
        } else if (humidity <= 80){
            $("#prShape").attr("data","4.svg");
        } else if (humidity <= 100){
            $("#prShape").attr("data","5.svg");
        }

    //$("#prBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    //$("#prBlock").append("Wind Degree: "+ winddeg + "</br>");

        if (winddeg <= 180){
            $("#prShape").css("animation-name", "rotation");
            $("#prShape").css("animation-duration", "10s");
            $("#prShape").css("animation-iteration-count", "infinite");
            $("#prShape").css("animation-direction", "normal");
            $("#prShape").css("animation-timing-function", "linear");
        } else {
            $("#prShape").css("animation-name", "rotation");
            $("#prShape").css("animation-duration", "10s");
            $("#prShape").css("animation-iteration-count", "infinite");
            $("#prShape").css("animation-direction", "reverse");
            $("#prShape").css("animation-timing-function", "linear");
        }

    var windspeed = data.wind.speed;
    console.log(windspeed);
    //$("#prBlock").append("Wind Speed: "+ windspeed);

    if (windspeed <= 0.5){
            $("#prShape").css("animation-duration", "102.4s");
        }else if (windspeed <= 1.5){
            $("#prShape").css("animation-duration", "51.2s");
        }else if (windspeed <= 3.4){
            $("#prShape").css("animation-duration", "25.6s");
        }else if (windspeed <= 5.5){
            $("#prShape").css("animation-duration", "12.8s");
        }else if (windspeed <= 7.9){
            $("#prShape").css("animation-duration", "6.4s");
        }else if (windspeed <= 10.7){
            $("#prShape").css("animation-duration", "3.2s");
        }else if (windspeed <= 13.8){
            $("#prShape").css("animation-duration", "1.6s");
        }else if (windspeed <= 17.1){
            $("#prShape").css("animation-duration", "0.8s");
        }else if (windspeed > 17.1){
            $("#prShape").css("animation-duration", "0.4s");
        }

    var temp = data.main.temp;
    console.log(temp);
    if (temp <= 5){
            $("#prShape").css("width", "5vmax");
        }else if (temp <= 10){
            $("#prShape").css("width", "10vmax");
        }else if (temp <= 15){
            $("#prShape").css("width", "15vmax");   
        }else if (temp <= 20){
            $("#prShape").css("width", "20vmax");   
        }else if (temp <= 25){
            $("#prShape").css("width", "25vmax");   
        }else if (temp <= 30){
            $("#prShape").css("width", "30vmax");   
        }else if (temp <= 35){
            $("#prShape").css("width", "35vmax");   
        }else if (temp <= 40){
            $("#prShape").css("width", "40vmax");   
        }else if (temp > 40){
            $("#prShape").css("width", "45vmax");
        }
    });

});

$(function() {
var a = new Date().getHours();
console.log(a);

if ((a == 3) || (a == 4)||(a == 5) || (a == 6) || (a == 7) || (a == 8) || (a == 9) || (a == 10)){
            $('#nyShape').css('margin-left','-65vw');
            $('#bjShape').css('margin-left','-65vw');
            $('#shShape').css('margin-left','-65vw');
            $('#tkShape').css('margin-left','-65vw');
            $('#klShape').css('margin-left','-65vw');
            $('#ldShape').css('margin-left','-65vw');
            $('#snShape').css('margin-left','-65vw');
            $('#prShape').css('margin-left','-65vw');
        } 
if ((a == 11) || (a == 12) || (a == 13) || (a == 14) || (a == 15) || (a == 16) || (a == 17) || (a == 18)){
            $('#nyShape').css('margin-left','0');
            $('#bjShape').css('margin-left','0');
            $('#shShape').css('margin-left','0');
            $('#tkShape').css('margin-left','0');
            $('#klShape').css('margin-left','0');
            $('#ldShape').css('margin-left','0');
            $('#snShape').css('margin-left','0');
            $('#prShape').css('margin-left','0');
        }
if ((a == 19) || (a == 20) || (a == 21) || (a == 22) || (a == 23) || (a == 24) || (a == 1) || (a == 2)){
            $('#nyShape').css('margin-left','65vw'); 
            $('#bjShape').css('margin-left','65vw');
            $('#shShape').css('margin-left','65vw');
            $('#tkShape').css('margin-left','65vw');
            $('#klShape').css('margin-left','65vw');
            $('#ldShape').css('margin-left','65vw');
            $('#snShape').css('margin-left','65vw');
            $('#prShape').css('margin-left','65vw'); 
        }
});

$(function() {
var a = new Date().getHours();
//console.log(a);

if ((a == 3) || (a == 4)||(a == 5) || (a == 6) || (a == 7) || (a == 8) || (a == 9) || (a == 10)){
            $('#nyShape').css('margin-left','-65vw');
        } 
if ((a == 11) || (a == 12) || (a == 13) || (a == 14) || (a == 15) || (a == 16) || (a == 17) || (a == 18)){
            $('#nyShape').css('margin-left','0');
        }
if ((a == 19) || (a == 20) || (a == 21) || (a == 22) || (a == 23) || (a == 24) || (a == 1) || (a == 2)){
            $('#nyShape').css('margin-left','65vw'); 
        }
});

$(function() {
var b = new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"});
var a = new Date(b).getHours();
//console.log(a);

if ((a == 3) || (a == 4)||(a == 5) || (a == 6) || (a == 7) || (a == 8) || (a == 9) || (a == 10)){
            $('#bjShape').css('margin-left','-65vw');
            $('#shShape').css('margin-left','-65vw');
        } 
if ((a == 11) || (a == 12) || (a == 13) || (a == 14) || (a == 15) || (a == 16) || (a == 17) || (a == 18)){
            $('#bjShape').css('margin-left','0');
            $('#shShape').css('margin-left','0');
        }
if ((a == 19) || (a == 20) || (a == 21) || (a == 22) || (a == 23) || (a == 24) || (a == 1) || (a == 2)){
            $('#bjShape').css('margin-left','65vw');
            $('#shShape').css('margin-left','65vw');
        }
});

$(function() {
var b = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
var a = new Date(b).getHours();
//console.log(a);

if ((a == 3) || (a == 4)||(a == 5) || (a == 6) || (a == 7) || (a == 8) || (a == 9) || (a == 10)){
            $('#tkShape').css('margin-left','-65vw');
        } 
if ((a == 11) || (a == 12) || (a == 13) || (a == 14) || (a == 15) || (a == 16) || (a == 17) || (a == 18)){
            $('#tkShape').css('margin-left','0');
        }
if ((a == 19) || (a == 20) || (a == 21) || (a == 22) || (a == 23) || (a == 24) || (a == 1) || (a == 2)){
            $('#tkShape').css('margin-left','65vw');
        }
});

$(function() {
var b = new Date().toLocaleString("en-US", {timeZone: "Asia/Kuala_Lumpur"});
var a = new Date(b).getHours();
//console.log(a);

if ((a == 3) || (a == 4)||(a == 5) || (a == 6) || (a == 7) || (a == 8) || (a == 9) || (a == 10)){
            $('#klShape').css('margin-left','-65vw');
        } 
if ((a == 11) || (a == 12) || (a == 13) || (a == 14) || (a == 15) || (a == 16) || (a == 17) || (a == 18)){
            $('#klShape').css('margin-left','0');
        }
if ((a == 19) || (a == 20) || (a == 21) || (a == 22) || (a == 23) || (a == 24) || (a == 1) || (a == 2)){
            $('#klShape').css('margin-left','65vw');
        }
});

$(function() {
var b = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
var a = new Date(b).getHours();
//console.log(a);

if ((a == 3) || (a == 4)||(a == 5) || (a == 6) || (a == 7) || (a == 8) || (a == 9) || (a == 10)){
            $('#ldShape').css('margin-left','-65vw');
        } 
if ((a == 11) || (a == 12) || (a == 13) || (a == 14) || (a == 15) || (a == 16) || (a == 17) || (a == 18)){
            $('#ldShape').css('margin-left','0');
        }
if ((a == 19) || (a == 20) || (a == 21) || (a == 22) || (a == 23) || (a == 24) || (a == 1) || (a == 2)){
            $('#ldShape').css('margin-left','65vw');
        }
});

$(function() {
var b = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"});
var a = new Date(b).getHours();
//console.log(a);

if ((a == 3) || (a == 4)||(a == 5) || (a == 6) || (a == 7) || (a == 8) || (a == 9) || (a == 10)){
            $('#snShape').css('margin-left','-65vw');
        } 
if ((a == 11) || (a == 12) || (a == 13) || (a == 14) || (a == 15) || (a == 16) || (a == 17) || (a == 18)){
            $('#snShape').css('margin-left','0');
        }
if ((a == 19) || (a == 20) || (a == 21) || (a == 22) || (a == 23) || (a == 24) || (a == 1) || (a == 2)){
            $('#snShape').css('margin-left','65vw');
        }
});

$(function() {
var b = new Date().toLocaleString("en-US", {timeZone: "Europe/Paris"});
var a = new Date(b).getHours();
//console.log(a);

if ((a == 3) || (a == 4)||(a == 5) || (a == 6) || (a == 7) || (a == 8) || (a == 9) || (a == 10)){
            $('#prShape').css('margin-left','-65vw');
        } 
if ((a == 11) || (a == 12) || (a == 13) || (a == 14) || (a == 15) || (a == 16) || (a == 17) || (a == 18)){
            $('#prShape').css('margin-left','0');
        }
if ((a == 19) || (a == 20) || (a == 21) || (a == 22) || (a == 23) || (a == 24) || (a == 1) || (a == 2)){
            $('#prShape').css('margin-left','65vw');
        }
});

