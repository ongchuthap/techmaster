// Viết chương trình in ra màn hình nếu số chia hết cho 3 thì in “Fizz”, số chia hết cho 5 thì in ra “Buzz”, nếu chia hết cho cả 3 và 5 thì in “FizzBuzz”, nếu không chia hết cho cả 2 thì in “BuzzFizz” trong khoảng từ 0 đến 100
function myFunction() {
  //số trong khoảng từ 1 - 100
  for (let i = 0; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      alert("FizzBuzz");
    } else if (i % 3 == 0) {
      alert("Fizz");
    } else if (i % 5 == 0) {
      alert("Buzz");
    } else "BuzzFizz";
  }
}
myFunction();

//  Viết chương trình tính tổng tất cả bội chung của 3 và 5 trong khoảng từ 0 đến 1000
function myFunction() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}
myFunction();

//  Viết chương cho phép nhập một số, kiểm tra số đó có phải số nguyên tố hay không

function isPrime() {
  let n = +prompt("Nhập số: ", "");
  if (n < 2) {
    console.log(`${n} không phải số nguyên tố`);
  } else if (n == 3) {
    console.log(`${n} là số nguyên tố`);
  }
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      return console.log(`${n} không phải là số nguyên tố`);
    }
    console.log(`${n} là số nguyên tố`);
  }
}
isPrime();

//  --------------------Viết chương trình cho phép nhập một số “n”, in ra tất cả số nguyên tố trong khoảng từ 0 đến “n”--------------------------


function checkPrime(number) {
  // Viết chương trình kiểm tra số cho trước number có là số nguyên tố hay không, nếu có thì console.log ra
  let check = true;
  if (number == 0 || number == 1) {
    check = false;
  }
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      check = false;
      break;
    }
  }
  if (check == true) {
    console.log(number);
  }
}

let n = +prompt("Nhập số: ", "");
if (n == 0 || n == 1) {
  console.log("Không có số nguyên tố nào");
} else if (n == 2) {
  console.log(2);
}
for (j = 2; j < n; j++) {
  checkPrime(j);
}


//------------------------  Viết chương trình cho phép nhập một hai số a b, tính tổng tất cả số nguyên tố trong khoảng từ a đến b------------------------------

let a = +prompt("Nhập số a: ", "");
let b = +prompt("Nhập số b: ", "");

let sum = 0;
for (let j = a; j < b; j++) {
  checkPrime(j);
}
console.log(sum);

function checkPrime(number) {
  let check = true;
  if (number == 0 || number == 1) {
    check = false;
  }
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      check = false;
      break;
    }
  }
  if (check == true) {
    sum = sum + number;
  }
}

//  Viết chương trình in ra bảng cửu chương ngược (từ 10 về 1)

let multiTable = "";
let multi = 0;
for (i = 10; i >= 0; i--) {
  for (j = 0; j <= 10; j++) {
    multi = i * j;
    multiTable = multiTable + `${i} * ${j} = ` + multi + "   ";
  }
  multiTable = multiTable + "\n ";
}
console.log(multiTable);

//  Viết chương trình cho phép nhập vào một số, in ra số đầu tiên và cuối cùng của số đó (VD: 12345 => 15)



//  Viết chương trình cho phép nhập một số, kiểm tra xem số đó có phải là số Palindrome hay không (Số Palindrome là số đối xứng) (VD: 141 => true, 123 => false)

var n = 12345;
var copy = n;
var reverse = 0;
var remainder;

while (n > 0) {
  remainder = n % 10;
  n = Math.floor(n / 10);
  reverse = reverse * 10 + remainder;
}
console.log(reverse == copy);

//  Viết chương trình cho phép nhập một số, tính giai thừa của số đó

// Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Armstrong hay không (Số Armstrong là số bằng tổng lập phương của tất cả các chữ số của nó) (VD: 371 = 3*3 + 7*3 + 1*3 => true, 123 != 1*3 + 2*3 + 3*3 => false)

// Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Perfect hay không (Số n là số Perfect nếu n bằng tổng tất cả các số từ 1 đến n / 2) (VD: 6 = 1 + 2 + 3 => true)

// Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Strong hay không (Số Strong là số bằng tổng giai thừa các chữ số của nó) (VD: 145 = 1! + 4! + 5! => true)

// Viết chương trình cho phép nhập một số n, in ra dãy số Fibonacci trong khoảng từ 0 đến n (Dãy Fibonacci có số bắt đầu là 0, 1 hoặc 1, 1 và các số sau có tổng bằng 2 số trước đó cộng lại)

// Viết chương trình cho phép nhập 2 số, tìm bội chung nhỏ nhất của 2 số đó

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n)

// 1 1 1 1 1

// 1 1 1 1 1

// 1 1 1 1 1

// 1 1 1 1 1

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n)

// 1 0 1 0 1

// 0 1 0 1 0

// 1 0 1 0 1

// 0 1 0 1 0

// 1 0 1 0 1

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng = n)

//     1

//    1 1

//   1 2 1

// 1 3 3 1

// 1 4 6 4 1

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n, n lẻ)

// 1 0 0 0 1

// 0 1 0 1 0

// 0 0 1 0 0

// 0 1 0 1 0

// 1 0 0 0 1

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n)

// 1

// 2 6

// 3 7 10

// 4 8 11 13

// 5 9 12 14 15

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (n lẻ)

// 1       1

//  2     2

//   3   3

//    4 4

//     5

//    6 6

//   7   7

//  8     8

// 9       9

// Hàm

//  Viết hàm tính lập phương của một số

//  Viết hàm tìm chu vi, diện tích hình tròn

//  Viết hàm tìm số lớn nhất giữa 2 số

//  Viết hàm kiểm tra số Prime

//  Viết hàm kiểm tra số Armstrong

//  Viết hàm kiểm tra số Perfect

//  Viết hàm kiểm tra số Strong

//  Viết hàm kiểm tra số Palindrome

//  Viết hàm tính số Fibonacci

// Viết hàm tính giai thừa

// Viết hàm kiểm tra một số có phải là số nguyên tố hay không, kết quả trả về true hoặc false

// Viết hàm tính tổng tất cả số lẻ trong khoảng từ 0 đến n (n là tham số truyền vào) và trả về giá trị đó
