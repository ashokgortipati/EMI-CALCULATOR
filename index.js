let inputbox1 = document.querySelector('#box1');
let inputbox2 = document.querySelector('#box2');
let inputbox3 = document.querySelector('#box3');
let result = document.querySelector("#box4");
let result1 = document.querySelector("#box5");
let result2 = document.querySelector("#box6");
let calculate = document.querySelector('.calculate');
let para = document.querySelector('.graph');
let button = document.querySelector('.btn');
let body = document.body;
button.addEventListener("click",(num)=>
{
num.preventDefault();
    body.classList.toggle('dark');
    if(body.classList.contains("dark"))
    {  
        button.textContent="🌞";
    }
    else{
        button.textContent="🌙"
    }

}
)

function emicalculator(event)
{
    event.preventDefault();
    if(inputbox1.value ==="" || inputbox2.value ==="" || inputbox3.value ==="")
    {
        para.textContent = "Enter the numbers";
        return;
    }

    

    let principal = Number(inputbox1.value);
    let interest = Number(inputbox2.value);
    let year = Number(inputbox3.value);
      if (principal <= 0 || interest <= 0 || year <= 0) {
    para.textContent = "Please enter values greater than zero.";
    return;
}

    let monthlyRate = interest /(12*100);
    let months = year *12;
    let power = Math.pow(1 + monthlyRate, months);
    let numerator = principal *monthlyRate*power;
    let denominator = power -1;
    let emi = numerator / denominator;
    let totalPayment = emi * months;
let totalInterest = totalPayment - principal;
   result.value = "₹ " + emi.toFixed(2);
result1.value = "₹ " + totalPayment.toFixed(2);
result2.value = "₹ " + totalInterest.toFixed(2);


}
calculate.addEventListener('click',emicalculator);
