const sec1=document.querySelector(".main1");
const sec2=document.querySelector(".main2");
const sec3=document.querySelector(".main3");
const btn1=document.querySelector("#notes-btn");
const btn2=document.querySelector("#amnt-btn");
const btn3=document.querySelector("#inr-btn");

// btn1.addEventListener("click",()=>{
//     sec1.style.display='block';
//     sec2.style.display='none';
//     sec3.style.display='none';
// });
// btn2.addEventListener("click",()=>{
//     sec1.style.display='none';
//     sec2.style.display='block';
//     sec3.style.display='none';
// });
// btn3.addEventListener("click",()=>{
//     sec1.style.display='none';
//     sec2.style.display='none';
//     sec3.style.display='block';
// });





function calculatenotes(){
    let num1=document.querySelector(".amount").value;
    let num2=document.querySelector(".currency").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    let res=Math.floor(num1/num2);
    let result=document.querySelector(".result");
    result.value=res;
}

function calculateamnt(){
    let num1=document.querySelector(".count").value;
    let num2=document.querySelector(".currency-2").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    let res=Math.floor(num1*num2);
    let result=document.querySelector(".result2");
    result.value=res;
}


function calculatedenomination(){
    let amount=document.querySelector(".amnt").value;
    const textarea=document.querySelector(".res");
    amount=parseInt(amount);
    let value='';
    textarea.value="";
    let count=0;
    if(amount>=500){
        count=Math.floor(amount/500)
        amount -= 500*count;
        value="₹ 500 have "+count+" notes \n";
        console.log(`500 have ${count}`);
        
    }
    if(amount>=200 && amount<500){
        count=Math.floor(amount/200)
        amount -= 200*count;
        value+="₹ 200 have "+count+" notes \n";
        console.log(`200 have ${count}`);
    }
    if(amount>=100 && amount<200){
        count=Math.floor(amount/100)
        amount -= 100*count;
        value+="₹ 100 have "+count+" notes \n";
        console.log(`100 have ${count}`);
    }
    if(amount>=50 && amount<100){
        count=Math.floor(amount/50)
        amount -=50*count;
        value+="₹ 50 have "+count+" notes \n";
        console.log(`50 have ${count}`);
    }
    if(amount>=20 && amount<50){
        count=Math.floor(amount/20)
        amount -= 20*count;
        value+="₹ 20 have "+count+" notes \n";
        console.log(`20 have ${count}`);
    }
    if(amount>=10 && amount<200){
        count=Math.floor(amount/10)
        amount -= 10*count;
        value+="₹ 10 have "+count+" notes \n";
        console.log(`10 have ${count}`);
    }
    if(amount>=5 && amount<10){
        count=Math.floor(amount/5)
        amount -= 5*count;
        value+="₹ 5 have "+count+" notes \n";
        console.log(`5 have ${count}`);
    }
    if(amount>=2 && amount<5){
        count=Math.floor(amount/2)
        amount -= 2*count;
        value+="₹ 2 have "+count+" notes \n";
        console.log(`2 have ${count}`);
    }
    if(amount>=1 && amount<2){
        count=Math.floor(amount/1)
        amount -= 1*count;
        value+="₹ 1 have "+count+" notes \n";
        console.log(`1 have ${count}`);
    }
    // console.log(value);
    textarea.value+=value +'\n';
    
}