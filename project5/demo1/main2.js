$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#nyShape").attr("src","1.svg");
        } else if (humidity <= 40){
            $("#nyShape").attr("src","2.svg");
        } else if (humidity <= 60){
            $("#nyShape").attr("src","3.svg");
        } else if (humidity <= 80){
            $("#nyShape").attr("src","4.svg");
        } else if (humidity <= 100){
            $("#nyShape").attr("src","5.svg");
        }
            $("#nyBlock").append("Humidity: "+ humidity + "%" + "</br>");


    var winddeg = data.wind.deg;
    console.log(winddeg);
    $("#nyBlock").append("Wind Degree: "+ winddeg);

    $('#nyShape').on("mouseover", function () {

        if (winddeg <= 180){
            $("#nyShape").css("animation-name", "rotation");
            $("#nyShape").css("animation-duration", "10s");
            $("#nyShape").css("animation-iteration-count", "infinite");
            $("#nyShape").css("animation-direction", "normal");
            $("#nyShape").css("animation-timing-function", "linear");
        } else {
            $("#nyShape").css("animation-name", "rotation");
            $("#nyShape").css("animation-duration", "10s");
            $("#nyShape").css("animation-iteration-count", "infinite");
            $("#nyShape").css("animation-direction", "reverse");
            $("#nyShape").css("animation-timing-function", "linear");
        }
    });

    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=1816670&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#bjShape").attr("src","1.svg");
        } else if (humidity <= 40){
            $("#bjShape").attr("src","2.svg");
        } else if (humidity <= 60){
            $("#bjShape").attr("src","3.svg");
        } else if (humidity <= 80){
            $("#bjShape").attr("src","4.svg");
        } else if (humidity <= 100){
            $("#bjShape").attr("src","5.svg");
        }

    $("#bjBlock").append("Humidity: "+ humidity + "%" + "</br>");


    var winddeg = data.wind.deg;
    console.log(winddeg);
    $("#bjBlock").append("Wind Degree: "+ winddeg);

    $('#bjShape').on("mouseover", function () {

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
    });

    });


});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=1796236&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#shShape").attr("src","1.svg");
        } else if (humidity <= 40){
            $("#shShape").attr("src","2.svg");
        } else if (humidity <= 60){
            $("#shShape").attr("src","3.svg");
        } else if (humidity <= 80){
            $("#shShape").attr("src","4.svg");
        } else if (humidity <= 100){
            $("#shShape").attr("src","5.svg");
        }

    $("#shBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    $("#shBlock").append("Wind Degree: "+ winddeg);

    $('#shShape').on("mouseover", function () {

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
    });

    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#tkShape").attr("src","1.svg");
        } else if (humidity <= 40){
            $("#tkShape").attr("src","2.svg");
        } else if (humidity <= 60){
            $("#tkShape").attr("src","3.svg");
        } else if (humidity <= 80){
            $("#tkShape").attr("src","4.svg");
        } else if (humidity <= 100){
            $("#tkShape").attr("src","5.svg");
        }

    $("#tkBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    $("#tkBlock").append("Wind Degree: "+ winddeg);

    $('#tkShape').on("mouseover", function () {

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
    });

    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=1733046&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#klShape").attr("src","1.svg");
        } else if (humidity <= 40){
            $("#klShape").attr("src","2.svg");
        } else if (humidity <= 60){
            $("#klShape").attr("src","3.svg");
        } else if (humidity <= 80){
            $("#klShape").attr("src","4.svg");
        } else if (humidity <= 100){
            $("#klShape").attr("src","5.svg");
        }

    $("#klBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    $("#klBlock").append("Wind Degree: "+ winddeg);

    $('#klShape').on("mouseover", function () {

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
    });

    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#ldShape").attr("src","1.svg");
        } else if (humidity <= 40){
            $("#ldShape").attr("src","2.svg");
        } else if (humidity <= 60){
            $("#ldShape").attr("src","3.svg");
        } else if (humidity <= 80){
            $("#ldShape").attr("src","4.svg");
        } else if (humidity <= 100){
            $("#ldShape").attr("src","5.svg");
        }

    $("#ldBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    $("#ldBlock").append("Wind Degree: "+ winddeg);

    $('#ldShape').on("mouseover", function () {

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
    });

    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=2147714&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#snShape").attr("src","1.svg");
        } else if (humidity <= 40){
            $("#snShape").attr("src","2.svg");
        } else if (humidity <= 60){
            $("#snShape").attr("src","3.svg");
        } else if (humidity <= 80){
            $("#snShape").attr("src","4.svg");
        } else if (humidity <= 100){
            $("#snShape").attr("src","5.svg");
        }

    $("#snBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    $("#snBlock").append("Wind Degree: "+ winddeg);

    $('#snShape').on("mouseover", function () {

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
    });
    });

});

$(function() {

var url = 'http://api.openweathermap.org/data/2.5/weather?id=2988507&units=metric&APPID=ed033f7d01912749792cad70400599c3'

  $.get(url, function(data) {

    
    var humidity = data.main.humidity;
    console.log(humidity);

    if (humidity <= 20){
            $("#prShape").attr("src","1.svg");
        } else if (humidity <= 40){
            $("#prShape").attr("src","2.svg");
        } else if (humidity <= 60){
            $("#prShape").attr("src","3.svg");
        } else if (humidity <= 80){
            $("#prShape").attr("src","4.svg");
        } else if (humidity <= 100){
            $("#prShape").attr("src","5.svg");
        }

    $("#prBlock").append("Humidity: "+ humidity + "%" + "</br>");

    var winddeg = data.wind.deg;
    console.log(winddeg);
    $("#prBlock").append("Wind Degree: "+ winddeg);

    $('#prShape').on("mouseover", function () {

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
    });
    });

});
