$(function() {
var a = new Date().getHours();
console.log(a);

if ((a == 5) || (a == 6) || (a == 7) || (a == 8)){
            $('#hour').attr('src','1.svg');
        } 
if ((a == 9) || (a == 10) || (a == 11) || (a == 12)){
            $('#hour').attr('src','2.svg');
        } 
if ((a == 13) || (a == 14) || (a == 15) || (a == 16)){
            $('#hour').attr('src','3.svg');
        }
if ((a == 17) || (a == 18) || (a == 19) || (a == 20)){
            $('#hour').attr('src','4.svg');
        }
if ((a == 21) || (a == 22) || (a == 23) || (a == 24)){
            $('#hour').attr('src','5.svg');
        }
if ((a == 1) || (a == 2) || (a == 3) || (a == 4) ){
            $('#hour').attr('src','6.svg');
        }
});