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


function courseHander(course, index){
    //  console.log(course);

    return{
        id: course.id,
        name: `Khoa hoc ${course.name}`,
        coin: course.coin,
        context: `Gia: ${course.coin}`,
        index:index,
        originArray:courses

    }
}
var newCourses = courses.map(courseHander);
// console.log(newCourses);


var i =0;
function coinHander(accumulator, curentValue, currentIndex, originArray){
// accumulator -->bien luu tru
i++;
// console.log(i, accumulator)
var total = accumulator + curentValue.coin;

console.table({
    'Luot chay: ' : i,
    'Bien luu tru: ': accumulator,
    'Gia khoa hoc: ': curentValue.coin,
    'tích tru duoc' : total,
});
return total;

// console.log(curentValue)
}
var totalCoin = courses.reduce(coinHander, 0);
// 0 khoi tao gia tri ban dau cho bien luu tru
