// let i = 0;

// while (i <= 100) {
//     i = i++;

//     console.log(i);
// }
// pro

// Function
// function myFunction() {
//   alert("hello");
//   alert("uuu");
// }

// myFunction();
// myFunction();
// myFunction();

// Hàm nhập số kiểm tra số chẵn hay lẻ
// function check_odd() {
//   let i = +prompt("Nhập số: ","");
//   if (i % 2 == 0) {
//     alert(`${i} là số chẵn`);
//   } else {
//     alert(`${i} là số lẻ`);
//   }
// }

// check_odd();

// Hàm nhập tên, hiển thị lời chào

// function hello() {
//   let name = prompt("Nhập tên: ", "");
//   alert(`Xin chào ${name}`);
// }

// hello();

//Hàm nhập hai số, hiển thị số lớn nhất

// function check_number() {
// let number_one = +prompt("Nhập số 1: ","");
// let number_two = +prompt("Nhập số 2: ","");
// if (number_one > number_two) {
//   alert(number_one);
// } else {
//   alert(number_two);
// }
// }

// check_number();

//  Viết chương trình in ra bảng cửu chương ngược (từ 10 về 1)

let multiTable = "";
let multi = 0;
for (i = 10; i >= 0; i--) {
    
  for (j = 0; j <= 10; j++) {
    multi = i * j;
    multiTable = multiTable + `${i} * ${j} = ` + multi + "   ";
  }
  multiTable = multiTable + "\n " ;
}
console.log(multiTable);