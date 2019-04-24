$(function() {
var a = new Date().getHours();
console.log(a);

if ((a == 6) || (a == 7) || (a == 8) || (a == 9) || (a == 10)){
            $('#hour').attr('src','1.svg');
        } 
if ((a == 11) || (a == 12) || (a == 13) || (a == 14)){
            $('#hour').attr('src','2.svg');
        } 
if ((a == 15) || (a == 16) || (a == 17) || (a == 18)){
            $('#hour').attr('src','3.svg');
        }
if ((a == 19) || (a == 20) || (a == 21) || (a == 22)){
            $('#hour').attr('src','4.svg');
        }
if ((a == 23) || (a == 24) || (a == 1) || (a == 2)){
            $('#hour').attr('src','5.svg');
        }
if ((a == 3) || (a == 4) || (a == 5)){
            $('#hour').attr('src','6.svg');
        }
});