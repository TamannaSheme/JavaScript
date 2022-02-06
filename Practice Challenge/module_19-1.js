 var number = 13;
 var count = 0;


 function multiplicationTable() {

     for (i = 1; i <= 10; i++) {
         count = (i * number);
         console.log(' 13' + ' * ' + i +
             ' = ' +
             count);
     }
     return count;
 }

 multiplicationTable();