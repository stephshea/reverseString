//5 versions of reverseString script
//shortest to longest
//1 shortest
function r(s) {
	return s.split('').reverse().join('');
}
r("hello");
//2
// function reverseString(str) {
//   return str.split("").reverse().join("");
//   }
// reverseString("hello");
// 3
// function reverseString(s) {
// 	var r = s.split("").reverse().join("");
// 	return r;
// }
// reverseString("hello");
//4
// function reverseString(str) {
//   str = str.split("");
//   str.reverse();
//   return str.join("");
//   }
//5
// function reverseString(str) {
//   var strArray = str.split("");
//   strArray.reverse();
//   var reversedStr = strArray.join("");
//   return reversedStr;
// }
// reverseString("hello");