var fullName = 'TRAN THANH LUAN';
var age = 19;
// alert(fullName);
// alert(age);
// console.log('day la connsole.log');
// console.warn(fullName)

// confirm("nhap thong tin day du");


// set tgian in ra man hinh thong bao trong 1000ms
// setTimeout(function() {alert('thong bao')},1000 )

// sau 1s thi lap 1 lan
// setInterval(function() {console.log('thong bao interval')},3000 )

// gioi thieu ve toan tu
// 1. Toan tu so hoc

// 2. Toan tu gan
// 3. Toan tu so sanh
// 4. toan tu logic

var a = 4;
var b = 9;

a = a-- + a++;
// a--: a copy=4  + a-1=3 return sau đấu+ là a=3 + a=4 -->7
// console.log(a);

function writelog() {
    var myString = '';

    for (var param of arguments) {
        myString += `${param} - `
        // console.log('Parameter' ,param);
    }
    console.log(myString);

}

writelog('log 1', 'log 2', 'log 3');


var flag = false;
var i = 0;
while (i < 2) {
    if (i % 2 == 0) {
        flag = true;
        break;
    }
    i++;
}
console.log(flag);
(function (a, b) { return a + b; })(1, 2);


function declarF() { }
var empre = function () { }

var lastName = 'luan';
var firstName = 'tran thanh';
console.log(`Tôi là: ${firstName} ${lastName}`);


var myString = 'Hoc JavaScipt at F8 at W3 at Wcb'

console.log(myString.indexOf('at'));
console.log(myString.lastIndexOf());

console.log(myString.slice(3, 6));

console.log(myString.replace('JavaScipt', 'js'));

console.log(myString.replace(/at/g, 'o'));

var myLanguages = 'JS, HTML, CSS';
console.log(myLanguages.split(', '));

// var myArray = myString.split('');


// array
var languages = [
    'PHP',
    'React',
    'NoteJS',
];

console.log(languages);
console.log(Array.isArray(languages));
console.log(languages.toString());
console.log(languages.join( " - "))

console.log(languages.pop())


var emailKey='email';
var myInfo= {
   FirstName: 'Tran',
   LastName: 'Thanh',
    Age: 19,
   [emailKey]: 'luan.tran',
   getAge:function(){
    return this.Age;
   }
};


// myInfo['email']='luan.tran25';

var myKey='Age';
console.log(myInfo[myKey]);
console.log(myInfo);
 
console.log(typeof myInfo.getAge);


// create obj student

// obj constructor

function User(firstName, lastName, avt){
    this.firstName=firstName;
    this.lastName=lastName;
    this.avt=avt;

   this.getName=function(){
    return `${this.firstName} ${this.lastName}`
   }
}

// protoptpe

User.prototype.className ='F8';
User.prototype.getClassName = function(){
    return this.className;
}

var author = new User('Son Dang', 'Luan', 'cute');
var user= new User('tran', 'thanh', 'deptrai');


author.title='chia se taij f8';
user.comment='lieu co khoa nao cho nguoi moi khong a';

console.log(author.getClassName());
console.log(user.className);


// Obj Date
console.log('onject date');
var date1 = new Date();  //--obj
var date2 = Date(); //--str

console.log(date1); //date1.toStr
console.log(date2);

var year=date1.getFullYear();
console.log(year);

var month=date1.getMonth()+1; //return 0-11
console.log(month);

var day=date1.getDate();
console.log(day);

console.log(`${day}/${month}/${year}`);




var random = Math.floor(Math.random()*10);

var bonus =[
    'a',
    'b',
    'c',
    'd'
]

console.log(bonus[random]);


console.log('cau lenh re nhanh if- else');

//  cau lenh re nhanh if- else
function run(a) {
    if (a%15===0){
        return 3;
    }
    else if (a%5===0){
        return 2;
    }
    else if (a%3===0){
        return 1;
    }
}

console.log(run(0));

// switch - case ;
console.log('switch-case ');

var date = 10;

switch (date) {
    case 2:
        console.log(' today is monnday');
        break;
    
    case 3:
        console.log(' today is tuesday');
        break;
        
    case 4:
        console.log(' today is Wednesday');
        break;

    default:
        console.log('the first');
}

// toan tu 3 ngoi - ternary operator
console.log('toan tu 3 ngoi - ternary operator' );

var course={
    name : 'js',
    coin: 0,
}

var  result = course.coin>0 ? `${course.coin} Coins` : `Free`;
// ddkien ok thi thuc hien sau ? neu ko ok thi sau :\
console.log(result);

// loop for - for in -while - do-while
console.log('loop for - for in -while - do-while');

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// Làm bài
function getRandNumbers(min, max, length){
    var arr=[];
     for (var i = 0; i<length; i++){
         arr[i] = Math.floor(Math.random()*(max - min) + min);
     }
     return arr;
}

console.log(getRandNumbers(3,99,5));

function getTotal(arr) {
    var result=0;
    var lengthArr= arr.length ;
    for (var i = 0; i< lengthArr ; i++){
        result+=arr[i];
    }
    return result;
}

// Expected results
console.log(getTotal([-111, 12, -33]));



var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

var orderLength = orders.length;

function getTotal(orders){
      var total=0;
      for (var i =0; i<orderLength; i++){
        total+=orders[i].price;
      }
     return total;

}


// Expected results:
console.log('Total: ' ,getTotal(orders)) // Output: 8700000

// for - in
var myInfor2={
    name: 'luan',
    age: 25,
    address: 'Ha Noi',
};
for (var key in myInfor2){
    console.log (key, myInfor2[key]);
};

var languages2 =['JS', 'DB', 'PY', 'AGA'];
for (var key in languages2){
    console.log(key, languages2[key]);
};

// -------------------------------------

function run(object) {
    var result=[];
    for (var key in object){
        result.push(`Thuoc tinh ${key} co gia tri ${object[key]}`)

    }
    return result;

}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]


//  loop for --of
var languages3 = 'Java';
for (var i of languages3){
    console.log(i);
}


// ---------------------
var myInfor3={
    name: 'luan',
    age: 25,
    address: 'Ha Noi',
};

console.log(Object.values(myInfor3));

for (var value of Object.keys(myInfor3)){
    console.log(value, myInfor3[value]);
}


for (var value of Object.values(myInfor3)){
    console.log ('---', value);
}

// ---------------while - do-while-------------
console.log('while $ do-while-------------')

var i=0;
while (i<1){

};

var isSucess=false;


do {
    i++;
    console.log("Nap the lan" , i);
    if (true){
        isSucess=true;
    }
}

while (!isSucess && isSucess<3);


// break - continnue

for (var i = 0; i <10 ; i++){

    if (i%2 !==0){
        continue; //in ra so chan, so le se bi bo qua
    }
    console.log(i);

    // if (i>5){
    //     break;
    // }
}


// nested loop - vong lap long nhau

var myArr = [
    [1,2],
    [3,4],
    [5,6],

]

for (var i = 0; i < myArr.length ;i++ ){
      for (var j=0; j < myArr[i].length; j++){
        console.log(myArr[i][j]);
      }
}


// array - 2

var courses = [
    { id:1,
        name:'js basic',
        coin:249,
    },
    { id:2,
        name:'db basic',
        coin:249,
    },
    { id:3,
        name:'py basic',
        coin:249,
    },

]

// courses.forEach(function(course, index )
// {
//     console.log(index, course);
// })

// every - some
// var isFree= courses.every(function(course, index )
// { return course.coin===0;
// })
// console.log(isFree);


// var course= courses.find(function(course, index )
// { return course.name ='db basic';
// })
// console.log(course);


// var newCourses = courses.map();







