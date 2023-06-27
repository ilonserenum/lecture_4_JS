// დავალება:

// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   დაბეჭდეთ მასივისი ახალი ელემენტები.

let array = [5, 25, 89, 120, 36];
array.push("javascript", "pyhton");
array.unshift("html", "css");
console.log(`There are ${array.length} elements in the array.`);
array.pop();
array.shift();
console.log(array);

// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let fruits = ["orange", "banana", "pear"];
console.log(`There are ${fruits.length} elements in the array.`);
fruits.push("apple", "pineapple");
fruits.unshift("watermelon");
console.log(`Now there are ${fruits.length} elements in the array.`);
// ვამატებთ ელემენტს რომელიც იქნება ინდექსად მესამე, ხოლო მეოთხე ადგილე.
fruits.splice(3, 0, "mango");
fruits.pop();
fruits.shift();
console.log(`Now there are ${fruits.length} elements in the array.`);
console.log(fruits);

// 3.მოცემულია მასივი let array =[1, 2, 3, 4, 5]. Splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

array = [1, 2, 3, 4, 5];
array.splice(3, 0, "a", "b", "c");
console.log(array);

// 4.მოცემულია მასივი:
// let arr = [1, 2, 3, 4, 5];
// Foreach საშუალებით გამოთვალეთ რიცხვების ჯამი

let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach((element) => (sum += element));
console.log(`My sum = ${sum}`);

// 5. ციკლის საშუალებით გამოიტანეთ რიცხვების სვეტი 100 დან 1 მდე;

for (let i = 100; i != 0; i--) {
    console.log(i);
}

// 6. დაწერეთ ფუნქცია, რომელსაც პარამეტრად გადაეცემა ორი რიცხვი(ნებისმიერი ჩაწერეთ) და რომელიც შეასრულებს შემდეგ ლოგიკას:
// თუ პირველი რიცხვი მეტია მეორეზე დაიბეჭდოს - num1 is the largest; თუ მეორე რიცხვი მეტია პირველზე - დაიბეჭდოს num2 is the largest; ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - error;

function compareNubers(num1, num2) {
    if (num1 > num2) {
        console.log("num1 is the largest");
    } else if (num2 > num1) {
        console.log(`num2 is the largest`);
    } else {
        console.error("error");
    }
}

compareNubers(2, 6);
compareNubers(658, 89);
compareNubers(-8754, -92378);
compareNubers(5974, 72);
compareNubers(5, 5);

//  7.  მოცემულია მასივი:
// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

array = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray = array.map((el) => el / 3);
console.log(newArray);

// 8.მოცემულია მასივი:
// let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ["html", "css", "javascript", "python", "php"];
let newLanguages = languages.filter((x) => x.length > 3);
console.log(newLanguages);

// 9. Მოცემულია მასივი:
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ["Madrid", "Rome", "Milan", "Berlin"];
// ვარიანტი 1
let newWords = words.filter((w) => w.includes("m"));
newWords = newWords.filter((w) => w.includes("M"));
// ვარიანტი 2
newWords = words.filter((x) => x.includes("M") || x.includes("m"));
// ვარიანტი 3
newWords = words.filter((x) => x.toLowerCase().includes("m"));
console.log(newWords);

// 10.შეამოწმეთ მოცელუმ მასივში let arr = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით.
arr = [-1, -2, -3, 4];
console.log(arr.some((x) => x > 0));

// 11. მოცემულია მასივი:
// Let array=[2,15,10,24] წაშალეთ ამ
// მასივიდან რიცხვი 10;

array = [2, 15, 10, 24];
// ვარიანტი 1
let newArr = array.filter((a) => a != 10);
console.log(newArr);
// ვარიანტი 2
array.splice(2, 1);
console.log(array);
