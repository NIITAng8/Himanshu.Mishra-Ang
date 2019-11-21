console.log('Excercise 7: Armstrong number')
let armstr = (armschk:number) =>
{
    
return new Promise(function(resolve,reject){

    if(armschk==0)
    {
reject("invalid number.")        ;
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
