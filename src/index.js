// number 6000000

// var i = 10;
// var j = 12;
// var t = i + j;

// var string = "hello";
// var arr = [1,2,3,4];

// node src\index.js 用来运行程序

var allTheCities = require("all-the-cities");

// console.log(allTheCities)
// function uuse(num){
//     return allTheCities.filter(function(i){//filter用来循环
//         return i.population > num;
//     });
// }

// function ccity(cname){
//     return allTheCities.filter(function(i){//filter用来循环
//         return i.name === cname;
//     });
// }

// const getC = function(number){
//     const isB = allTheCities.filter(function(it){
//         var keep = it.population > number;
//         return keep;
//     })
//     return isB;
    
// }

//.find() 用来找东西，至少一次找到

// console.log(uuse(6000000));//用来打印的
// console.log(ccity("Istanbul"));
// console.log(getC(6000));

//filter() 返回的是Array

const looa = function(number,population){
    const llll = allTheCities.find(function(item){
        return item.cityId > number && item.population > population;
    })
    return llll;
}
 

console.log(looa(6,1000));

// git add .//"."是指所有文件，可将"."换为文件名
// git commit -M "initial commit"

//或直接点放大镜下面的图标，在Message里面输入initial commit，点击√即可