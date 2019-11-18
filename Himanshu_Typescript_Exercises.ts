
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("Program - 1 : To Print the Hello World");

let msg:string = "Hello World" 
console.log(msg)

console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("Program - 2 : To Check The Leap Year");

let isLeapYear = (year:number):void =>
 {
    let leap_year:boolean;
    if (year % 4 == 0) 
    {
        leap_year = true;
        if (year % 100 == 0 && year % 400 != 0) 
        {
            leap_year = false;
        }
    }
    else 
    {
        leap_year = false;
    }
    if (leap_year)
    {
        console.log("This is a leap year");
    }
    else 
    {
        console.log("This is not a leap year");
    }
};
isLeapYear(2012);


console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("Program - 3 To Calaculate the Age");

let listNumOfDaysInYear = new Map<string,number>();
listNumOfDaysInYear.set("Earth",365);
listNumOfDaysInYear.set("Mars",687);

let GetAgeInYears = (ageSeconds:number,planet:string):void => {
    let ageYears = ageSeconds / (3600*24*listNumOfDaysInYear.get(planet));
    console.log(Math.round(ageYears));
}

GetAgeInYears(5200000000,"Earth");
GetAgeInYears(5200000000,"Mars"); 

console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("Program - 4 To Count the Occurrences of word in a phrase");

let CountWordOccurence = (_phrase:string) => {
        let _word_array = _phrase.split(' ');
        let i:number = 0;
        let _word_ocrrnc_map = new Map<string,number>();
        for(; i < _word_array.length; i++)
        {
         _word_ocrrnc_map.has(_word_array[i]) == true ? _word_ocrrnc_map.set(_word_array[i],_word_ocrrnc_map.get(_word_array[i]) + 1)
            : _word_ocrrnc_map.set(_word_array[i],1);
        }
        console.log(_word_ocrrnc_map);
    }
    CountWordOccurence("Once upon a time . There was a king who was very cruel .");  

    console.log("-----------------------------------------------------------------------------------------------------------------");
    console.log("Program - 5 To Reverse a String");

    let reversestring = (username:string):string => username.split("").reverse().join("");
    console.log(reversestring("himanshu"));

    console.log("-----------------------------------------------------------------------------------------------------------------");
    console.log("Program - 6 To Check Whether Triangle is Scalene, Isosceles or Equilateral");

    let triangle_check = (num1: number,num2:number,num3: number):void=>
{
    if((num1==num2)&&(num2==num3)&&(num1==num3))
    {
        console.log("Given Triangle is an Equilateral Traingle");
        console.log(num1,num2,num3);
    }

        else if ((num1 != num2)&&(num2 != num3)&&(num1!=num3))
        {
            console.log("Given Triangle is an Scalene Traingle");
            console.log(num1,num2,num3);
        }
        else 
        {
            console.log("Given Triangle is an Isosceles Traingle");
            console.log(num1,num2,num3);
        }
    }       
    triangle_check(7,6,7);

    console.log("-----------------------------------------------------------------------------------------------------------------");
    console.log("Program - 7 TO Check whether the number is Armstrong or not");

let armstr = (armschk:number) =>
{
    
return new Promise(function(resolve,reject){

    if(armschk==0)
    {
reject("Invalid number.")        ;
    }

    let arm: number=0;
    let a: number=0;
    let temp:number=armschk;
    var check=armschk.toString().length;
    while(temp>0)
        {
            a=temp%10;
            temp=Math.floor(temp/10); 
            arm=arm+Math.pow(a,check);
        }   
    if(arm==armschk)
        {
         
      return  resolve(armschk+ " is Armstrong Number");
        }
    else
        {
            return  resolve(armschk+ " is Not Armstrong Number");
        }
})
}
armstr(1634).then(success,failure);
function success(Smessage)
{
console.log(Smessage);    
}
function failure(Fmessage)
{
console.log(Fmessage);    
}

