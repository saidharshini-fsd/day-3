// 1. Declare four values without assigning the values and print them in a console.
var a="" ;
var b="";
var c="";
var d="";
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 2. How to get value of the variable myvar as output
var myvar = 1;
console.log(myvar);

// 3.Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstName ="sai";
var lastName ="dharshini";
var maritalStatus="Single";
var country="India";
var age ="20";
console.log(firstName);
console.log(lastName);
console.log(maritalStatus);
console.log(country);
console.log(age);

//4.Declare variables to store your first name, last name, marital status, country and age in a single line

let firstName ="sai";
let lastName ="dharshini";
let maritalStatus="Single";
let country="India";
let age ="20";
console.log(firstName,lastName,maritalStatus,country,age);

5./*Convert the string to integer

1) parseInt()
 2)Number()
 3)Plus sign(+) */

var num = '10';
numInt = parseInt(Num);
console.log(numInt);

var num ='10';
 numInt =Number(num);
console.log(numInt);

var num ='10';
numInt =+ num ;
console.log(numInt);

 //8.write 6 statements which provide truely or falsy value.
  
  let number1;
  console.log(!!number1); // false
  const number2 = 10;
  console.log(!!number2); // true
  const name1 = 'Tim';
  console.log(!!name1); // true
  const name2 = '';
  console.log(!!name2); // false
  const nullValue = null;
  console.log(!!nullValue); // false

// task 2  Simple Programs todo for Operators

//1)square a number
let a = 13;
a *= 13;
console.log(a); // 169

//2) swapping a number

let a = 1;
let b =2;
[a,b] =[b,a];
console.log(a);//2
console.log(b);//1

//3) Addition of 3 numbers

var a = 10;
var b =20;
var c =30;
sum = a+b+c;
console.log(sum);//60

//4)Celsius to Fahrenheit conversion     

function CelsiusToFahrenheit(Celsius)
{
    return ( Celsius * 9 / 5)+32;
}
console.log(CelsiusToFahrenheit(90)); 

//5.Meter to miles

function MeterToMiles(Meter)
{
    return ("Meter = * 0.00062137119");
}
console.log(MeterToMiles(100));

//6.pounds to kilogram

function convertPoundsToKilograms(pounds) {
    var kilograms = pounds * 0.453592;
    return kilograms;
  }

  //7.calculate the batting average

  const hits = 10;
  const atBats = 20;
  const averagebatsman = ToCalculateBattingAverage(hits,atBats);
  console.log(averagebatsman);//0.0333

  //8.Calculate five test scores and print their average

  var s1 = 100;
  var s2 =200;
  var s3 =300;
  var s4=110;
  var s5=240;
  var average =(s1+s2+s3+s4+s5)/5;
  console.log(average);
  
  //9. power of any values x^y.

  console.log( 3 ** 4);//81
  console.log( 10 ** -2);//0.01

  //10. calculate the simple interest

  function calculateSimpleInterest(principal, rate, time) {
    const interest = (principal * rate * time) / 100;
    return interest;
  }

  const principle = 1000;
  const rate = 5;
  const time = 1;
  const interest = CalculateSimpleAverage(principle,rate,time);
  console.log(interest);//50
 
  //11. calculate equailateral triangle


  var side1 = 5; 
  var side2 = 6; 
  var side3 = 7; 
  var perimeter = (side1 + side2 + side3)/2;
  var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
  console.log(area);

  // 12.Area Of Isosceles Triangle

  
  function AreaOfIsoscelesTriangle ( base ,height ) 
  {
  const Area = (base * height) / 2;
   return Area;
  }
  const area = AreaOfIsoscelesTriangle(10,5)
  console.log(area);//20

  //13.volume of sphere
  
  function VolumeOfSphere (radius)
   {
    const pi = 3.14159;
    return (4 / 3) * pi * Math.pow(radius, 3);
   }
   const volume = VolumeOfSphere(5);//392.695 cubic units.

   //14.volume of prism

    function FindVolume(l,b,h)
   {
   let volume =( l *b *h)/2;
   return volume;
   }
   let l=18,b=9,h=3;
   console.log("The volume of prism :" + FindVolume(1,b,h)); 

   //15.find the area of the triangle

   function getArea(side1, side2, side3) {
   
    const semiPerimeter = (side1 + side2 + side3) / 2;
  
   
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
  
    // Return the area.
    return area;
  } 
  area =getArea(5,6,7);
  console.log(area);//15.0

  //16.Give the Actual cost and Sold cost, Calculate Discount Of Product

  function DiscountOfProduct(M,S)
  {
    let Discount = (M-S);
    return Discount;
  }
  let M=120; let S=100;
  console.log(DiscountOfProduct(M,S).toFixed(2));//16.67%

  //17. area and perimeter of the circle

  class circle {
    constructor(radius) {
        this.radius = radius;
        // area method
        this.area = function () {
            return Math.PI * this.radius * this.radius;
        };
        // perimeter method
        this.perimeter = function () {
            return 2 * Math.PI * this.radius;
        };
    }
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));//Area = 28.27 //perimeter = 18.85

// 18. Given two numbers and perform all arithmetic operations.
 // add 
 let a=10;
let b=20;
sum=a += b;
console.log(sum);//30

 // sub
 let a=10;
 let b=20;
 sub=a -= b;
 console.log(sub);//-10

//mul
let a =10;
let b=20;
mul=a *= b;
console.log(mul);//200

//div

let a=10;
let b=20;
div=  a/= b;
console.log(div);//0.5

//mod
let a=10;
let b=20;
mod=a %= b;
console.log(mod);//10

//19.Display the asterisk pattern as shown below(No loop needed):

var a="*****";
var b="*****";
var c="*****";
var d="*****";
var e="*****";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//20.Calculate electricity bill?
//For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 1

function calculateBill(units)
{
	
	
	if (units <= 100)
	{
		return units * 10;
	}
	else if (units <= 200)
	{
		return (100 * 10)
			+ (units - 100)
				* 15;
	}
	else if (units <= 300)
	{
		return (100 * 10)
			+ (100 * 15)
			+ (units - 200)
				* 20;
	}
	else if (units > 300)
	{
		return (100 * 10)
			+ (100 * 15)
			+ (100 * 20)
			+ (units - 300)
				* 25;
	}
	return 0;

	

var units = 250;

console.log(calculateBill(units));
}

//21. calculate the cpga

function calculateGPA(grades, credits) {
    var totalCredits = 0;
    var totalGradePoints = 0;
  
    for (var i = 0; i < grades.length; i++) {
      totalCredits += credits[i];
      totalGradePoints += grades[i] * credits[i];
    }
  
    var cgpa = totalGradePoints / totalCredits;
  
    return cgpa;
  }
  var grades = ["A", "B", "C"];
var credits = [3, 3, 3];

var cgpa = calculateGPA(grades, credits);

console.log("The CGPA is " + cgpa);//3.33



//22.: Write a loop that makes seven calls to console.log to output the following triangle.

function printTriangle() {
    for (var i = 1; i <= 7; i++) {
      var str = "";
      for (var j = 0; j < i; j++) {
        str += "#";
      }
      console.log(str);
    }
  }

