// Toán tử

//  Viết chương trình cho phép nhập 2 số, tính tổng 2 số đó
let number_1 = +prompt("Nhập số 1", "");
let number_2 = +prompt("Nhập số 2", "");

alert(`Tổng hai số là: ${number_1 + number_2}`);

//  Viết chương trình cho phép nhập 2 số, in ra kết quả của tất cả các phép tính số học giữa 2 số đó
let number_1 = +prompt("Nhập số thứ nhất: ", "");
let number_2 = +prompt("Nhập số thứ hai: ", "");

let plus = `${number_1} + ${number_2} = ${number_1 + number_2}`;
let multi = `${number_1} * ${number_2} = ${number_1 * number_2}`;
let divide = `${number_1} / ${number_2} = ${number_1 / number_2}`;
let minus = `${number_1} - ${number_2} = ${number_1 - number_2}`;

alert(plus);
alert(multi);
alert(divide);
alert(minus);

//  Viết chương trình cho phép nhập chiều dài và rộng của hình chữ nhật, tính ra chu vi của nó

let width = +prompt("Chiều dài của hình chữ nhật là: ", "");
let height = +prompt("Chiều rộng của hình chữ nhật là: ", "");

let perimeter = `Chu vi của hình chữ nhật là: ${(width + height) * 2}`;
alert(perimeter);

//  Viết chương trình cho phép nhập chiều dài và rộng của hình chữ nhật, tính ra diện tích của nó

let width = +prompt("Chiều dài của hình chữ nhật là: ", "");
let height = +prompt("Chiều rộng của hình chữ nhật là: ", "");

let area = `Chu vi của hình chữ nhật là: ${width * height}`;
alert(area);

//  Viết chương trình cho phép nhập vào bán kính hình tròn, in ra kết quả đường kính, chu vi và diện tích của nó

let R = +prompt("Nhập bán kính hình tròn: ", "");

let d = `Đường kính của hình tròn là: ${R * 2}`;
let chu_vi = `Chu vi hình tròn là: ${R * 2 * Math.PI}`;
let dien_tich = `Diện tích hình tròn là: ${R ** 2 * Math.PI}`;
alert(d);
alert(chu_vi);
alert(dien_tich);

//  Viết chương trình cho phép nhập vào 1 số ở đơn vị cm, chuyển đổi và in ra giá trị ở đơn vị m và km

let length = +prompt("Nhập cm: ", "");

alert(`chiều dài tính ra m là: ${length / 100} m`);
alert(`chiều dài tính ra km là: ${length / 100000} km`);

//  Viết chương trình cho phép nhập nhiệt độ có đơn vị Celsius, in ra nhiệt độ Fahrenheit

let celsius = +prompt("Nhập Celsius: ", "");

alert(`Nhiệt độ tính ra Fahrenheit: ${(celsius * 9) / 5 + 32}`);

// Cấu trúc điều khiển

//  Viết chương trình cho phép nhập 2 số, tìm số lớn nhất trong 2 số
let number_1 = prompt("Nhập số 1", "");
let number_2 = prompt("Nhập số 2", "");

if (number_1 >= number_2) {
  alert(number_1);
} else {
  alert(number_2);
}

//  Viết chương trình cho phép nhập 3 số, tìm số lớn nhất trong 3 số

let number_one = +prompt("Nhập số thứ nhất: ", "");
let number_two = +prompt("Nhập số thứ hai: ", "");
let number_three = +prompt("Nhập số thứ ba: ", "");

if (number_one >= number_two && number_one >= number_three) {
  alert(`Số lớn nhất là ${number_one}`);
} else if (number_two >= number_one && number_two >= number_three) {
  alert(`Số lớn nhất là ${number_two}`);
} else if (number_three >= number_one && number_three >= number_two) {
  alert(`Số lớn nhất là ${number_three}`);
} else {
  alert(`Số lớn nhất là ${number_one}`);
}

//  Viết chương trình cho phép nhập 1 số, kiểm tra xem một số là số âm, dương, hay bằng 0

let number = +prompt("Nhập số: ", "");

if (number > 0) {
  alert(`${number} là số dương`);
} else if (number < 0) {
  alert(`${number} là số âm`);
} else {
  alert(`${number} là 0`);
}

//  Viết chương trình cho phép nhập 1 số, kiểm tra số đó có chia hết cho 5 và 11 hay không

let number = +prompt("Nhập số: ", "");

if (number % 5 == 0 && number % 11 == 0) {
  alert(`${number} chia hết cho 5 và 11`);
} else if (number % 5 == 0 && number % 11 != 0) {
  alert(`${number} chia hết cho 5, không chia hết cho 11`);
} else if (number % 5 != 0 && number % 11 == 0) {
  alert(`${number} không chia hết cho 5, chia hết cho 11`);
} else if (number % 5 != 0 && number % 11 != 0) {
  alert(`${number} không chia hết cho 5, không chia hết cho 11`);
}

//  Viết chương trình cho phép nhập 1 số, kiểm tra số đó là chẵn hay lẻ

let number = +prompt("Nhập số: ", "");

if (number % 2 == 0) {
  alert(`${number} là số chẵn`);
} else if (number % 2 != 0) {
  alert(`${number} là số lẻ`);
} else {
  alert("Số không hợp lệ");
}

//  Viết chương trình cho phép nhập 1 năm, kiểm tra số đó là năm nhuận hay không

let year = +prompt("Nhập năm: ", "");

if (year % 400 == 0) {
  alert(`${year} là năm nhuận`);
} else if (year % 4 != 0) {
  alert(`${year} không phải là năm nhuận`);
} else if (year % 100 == 0 && year % 400 != 0) {
  alert(`${year} không phải là năm nhuận`);
} else {
  alert(`${year} là năm nhuận`);
}

//  Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó có thuộc bảng alphabe hay không (a-zA-Z)

let char = prompt("Nhập ký tự: ", "");

if (a <= char <= Z) {
  alert(`${char} thuộc trong bảng alphabe`);
} else {
  alert(`${char} không có trong bảng alphabe`);
}

//  Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó là nguyên âm hay phụ âm

let char = prompt("Nhập ký tự: ", "");

if ((char = "a" || char = "e" || char = "o" || char = "i" || char = "u")) {
  alert(`${char} là nguyên âm`);
} else {
  alert(`${char} là phụ âm`);
}

//  Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó là chữ thường hay chữ hoa

let char = prompt("Nhập ký tự: ", "");

if (A <= char <= Z) {
  alert(`${char} là chữ in hoa`);
} else {
  alert(`${char} là chữ in thường`);
}

// Viết chương trình cho phép nhập 1 số là ngày trong tuần, in ra thứ tương ứng

let day = +prompt("Nhập ngày trong tuần: ", "");

switch (day) {
  case 1:
    alert(`ngày ${day} là thứ hai`);
    break;
  case 2:
    alert(`ngày ${day} là thứ ba`);
    break;
  case 3:
    alert(`ngày ${day} là thứ tư`);
    break;
  case 4:
    alert(`ngày ${day} là thứ năm`);
    break;
  case 5:
    alert(`ngày ${day} là thứ sáu`);
    break;
  case 6:
    alert(`ngày ${day} là thứ bảy`);
    break;
  case 7:
    alert(`ngày ${day} là chủ nhật`);
    break;
  default:
    alert("không hợp lệ");
}

// Viết chương trình cho phép nhập 1 tháng, in ra số ngày trong tháng

let month = +prompt("Nhập tháng: ", "");

switch (month) {
  case 1:
    alert(`Tháng ${month} có 31 ngày`);
    break;
  case 2:
    alert(`Tháng ${month} có 29 hoặc 28 ngày`);
    break;
  case 3:
    alert(`Tháng ${month} có 31 ngày`);
    break;
  case 4:
    alert(`Tháng ${month} có 30 ngày`);
    break;
  case 5:
    alert(`Tháng ${month} có 31 ngày`);
    break;
  case 6:
    alert(`Tháng ${month} có 30 ngày`);
    break;
  case 7:
    alert(`Tháng ${month} có 31 ngày`);
    break;
  case 8:
    alert(`Tháng ${month} có 31 ngày`);
    break;
  case 9:
    alert(`Tháng ${month} có 30 ngày`);
    break;
  case 10:
    alert(`Tháng ${month} có 31 ngày`);
    break;
  case 11:
    alert(`Tháng ${month} có 30 ngày`);
    break;
  case 12:
    alert(`Tháng ${month} có 31 ngày`);
    break;
  default:
    alert("Không hợp lệ");
}

// Viết chương trình cho phép nhập 3 số a b c, in ra nghiệm phương trình bậc 2 tương ứng

let a = +prompt("Nhập số đầu tiên: ", "");
let b = +prompt("Nhập số thứ hai: ", "");
let c = +prompt("Nhập số thứ ba: ", "");

let d = b ** 2 - 4 * a * c;

if (d < 0) {
  alert("Vô nghiệm");
} else if ((d = 0)) {
  alert(`Phương trình có nghiệm ${(-b / 2) * a}`);
} else {
  alert(
    `Phương trình có hai nghiệm là ${(-b + Math.sqrt(d)) / (2 * a)} và ${
      (-b - Math.sqrt(d)) / (2 * a)
    }`
  );
}

// Viết chương trình đổi điểm từ hệ số 10 sang hệ chữ cho sinh viên, điểm nhập từ bàn phím

// Điểm < 4 => F

// Điểm < 5.5 => D

// Điểm < 7 => C

// Điểm < 8.5 => B

// Điểm <= 10 => A

let result = +prompt("Nhập điểm: ", "");

result < 4
  ? alert("F")
  : result < 5.5
  ? alert("D")
  : result < 7
  ? alert("C")
  : result < 8.5
  ? alert("B")
  : result <= 10
  ? alert("A")
  : alert("Không hợp lệ");

// 14. Viết chương trình cho phép nhập lương cơ bản, tính tổng lương của nhân viên theo công thức: Lương = Lương cơ bản + HRA + DA

//  Nếu lương cơ bản < 2.000.000 => HRA = 20% và DA = 80% lương cơ bản

//  Nếu lương cơ bản < 5.000.000 => HRA = 25% và DA = 90% lương cơ bản

//  Nếu lương cơ bản >= 5.000.000 => HRA = 30% và DA = 100% lương cơ bản

let basic_salary = +prompt("Nhập lương cơ bản: ", "");
let HRA_1 = basic_salary * 0.2;
let HRA_2 = basic_salary * 0.25;
let HRA_3 = basic_salary * 0.3;
let DA_1 = basic_salary * 0.8;
let DA_2 = basic_salary * 0.9;
let DA_3 = basic_salary;

if (basic_salary < 2000000) {
  var salary = basic_salary + HRA_1 + DA_1;
  alert(salary);
} else if (2000000 <= basic_salary < 5000000) {
  var salary = basic_salary + HRA_2 + DA_2;
  alert(salary);
} else if (basic_salary >= 5000000) {
  var salary = basic_salary + HRA_3 + DA_3;
  alert(salary);
} else {
  // do nothing
}
