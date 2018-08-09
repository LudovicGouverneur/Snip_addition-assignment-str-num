// experimental conditions
//     str += str
//     str += num 
//     num += str 
//     num += num

debugger;

let num_1 = 1;
let num_str;
{ // str_1 += "1";
 let Step_1 =  String(num_1)
 num_str = Step_1 + "1";
};
actual = 1;
actual += "1";
console.assert(num_str === actual, "fail: num_str");
