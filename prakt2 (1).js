Задание 1:
function minAndMax(a,b,c){
    var min,max;
    if(a > b && a > c){
      max = a;
    }else if (b > c){
      max = b;
    }else{
      max = c;
    }
     if(a < b && a < c){
      min = a;
    }else if (b < c){
      min = b;
    }else{
      min = c;
    }
    return [min, max]
  }
  let a = 5;
  let b = 4;
  let c = 3;
  console.log(minAndMax(a,b,c))
  
Задание 2:
let numberMonth = prompt("Введите номер месяца")
  switch(numberMonth) {
   case 1: console.log(31); break;
    case 2: console.log(28); break;
    case 3: console.log(31); break;
    case 4: console.log(30); break;
    case 5: console.log(31); break;
    case 6: console.log(30); break;
    case 7: console.log(31); break;
    case 8: console.log(31); break;
    case 9: console.log(30); break;
    case 10: console.log(31); break;
    case 11: console.log(30); break;
    case 12: console.log(31); break;
    default:  break;
}
Задание 3:

var num =2, exp =10, result =1; count = 0;
while (count<exp) {
	result = result*num;
	count++;
}
console.log(result);

Задание 4(а):
function sayHello()
{
    var name = Tom;
    return document.write( " Здравствуйте," + name );
}


Задание 4(б):

function getRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min)**2;
  }

 console.log(getRandom(1, 100));
 



   
