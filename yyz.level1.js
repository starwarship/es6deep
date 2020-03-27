//方法一
let arr=[1,2,[3,4]];
console.log(arr.flat());

let arr1=[1,2,[3,4,[5,6]]];
console.log(arr1.flat(Infinity));

//方法二
let arr = [[1, 2, [3,[3.1,3.2] ,4], 5], [6, 7, 8], [[9, 10], 11]];

    function flat(arr)
    {
       while(arr.some(item=>Array.isArray(item)))
       {
           arr=[].concat(...arr);
       }
       return arr;
    }
    arr=flat(arr);
    console.log(arr);

//方法三：递归+循环
let arr = [
  [1, 2, [3, 4], 5],
  [6, 7, 8],
  [[9, 10], 11]
];

function Flat(arr) {
  let copy = [];
  arr.map(item => {
    if (Array.isArray(item)) {
      copy = copy.concat(Flat(item)); //关键！
    } else {
      copy.push(item);
    }
  });
  return copy;
}

console.log(Flat(arr));
