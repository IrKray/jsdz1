let a = prompt('Enter A');
let b = prompt('Enter B');
let c = prompt('Enter C');

let result = solveQuadr(a,b,c);
alert(result);

function solveQuadr(a, b, c) {
   let d = b * b - 4 * a * c;
   let dn = Math.sqrt(d);
   let xOne, xTwo;
  if ( d < 0 ) {
    xOne = "no result";
    xTwo = "no result";
  } else  if ( d == 0 ) {
       xOne = -b/(2*a);
       xOne = xOne;
      } else {
        xOne = (-b+dn)/(2*a);
        xTwo = (-b-Math.sqrt(d))/(2*a);
      }
    return ('X1 = ' + xOne + ' X2 = ' + xTwo);
}

