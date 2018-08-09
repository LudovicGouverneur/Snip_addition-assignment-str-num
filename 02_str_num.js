debugger;

str_1 = "1";
let str_num;
{ // str_1 += 1;
  let Step_1 = String(1);
  str_num = str_1 + Step_1;
};
actual = "1";
actual += 1;
console.assert(str_num === actual, "fail: str_num");
