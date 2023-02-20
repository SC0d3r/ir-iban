// read more about mod function at 
// https://www.geeksforgeeks.org/how-to-compute-mod-of-a-big-number/

// xy (mod a) ≡ ((x (mod a) * 10) + (y (mod a))) mod a
// where, x : left-most digit
// y: rest of the digits except x.
// for example: 
// 625 % 5 = (((6 % 5)*10) + (25 % 5)) % 5 = 0
function mod(num, a) {

  // Initialize result
  let res = 0;

  // One by one process
  // all digits of 'num'
  for (let i = 0; i < num.length; i++)
    res = (res * 10 +
      parseInt(num[i])) % a;

  return res;
}

module.exports = mod