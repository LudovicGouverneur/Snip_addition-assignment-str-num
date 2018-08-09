# addition-assignment-str-num


dunno yet

___

## Learning Objectives: 

* += (str) 
* += (num) 
* %

___

## The Code:

```js
let input = 0;
(input += String(input += 1)) % 6;
  // input: (number, 0)
  input += 1;
  // input: (number, 1)
  String(input);
  // (string, "1")
  input += "1";
  // input: (string, "11")
  "11" % 6;
  // (number, 5)
```

___

## Practice Points:

input += "1"; // when input is a number  
%  
strange: same output, even with top line uncommented  
* https://goo.gl/auvsed

