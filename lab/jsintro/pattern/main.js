$(document).ready(function(){

	var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + "," + g + "," + b + ")";

  for(var counter=0; counter<5; counter++){
    
      var postop = 0 + (counter * 300);
      var posleft = 0 + (counter * 300);
      
      var mydynamicbox = '<div style="position: absolute; top: ' + postop + 'px; left: ' + posleft + 'px; width: 300px; height: 300px; background-color: ' + color + ';"></div>'

      var postop2 = 1200 - (counter * 300);
      var posleft2 = 0 + (counter * 300);

  	  var mydynamicbox2 = '<div style="position: absolute; top: ' + postop2 + 'px; left: ' + posleft2 + 'px; width: 300px; height: 300px; background-color: ' + color + ';"></div>'
  
      $('body').append(mydynamicbox);
      $('body').append(mydynamicbox2);

  }
  
  });

