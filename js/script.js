let incomeForm = document.getElementById('incomeForm');
let grossIncome = document.getElementById('gross_income');
let extraIncome = document.getElementById('extra_income');
let ageGroup = document.getElementById('age_group');
let deduction = document.getElementById('deduction');
let btn = document.getElementById('btn');

incomeForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    let grossIncomeValue = parseFloat(grossIncome.value);
    let extraIncomeValue = parseFloat(extraIncome.value);
    let deductionValue = parseFloat(deduction.value);

    let overallIncome = grossIncomeValue + extraIncomeValue - deductionValue;

    let tax = 0;
    if (overallIncome > 800000) {
        let taxrate = 0;

        let ageGroupValue = ageGroup.value;

        if(ageGroupValue === "bellow 40")
        {
            taxrate = 0.3;
        }
        else if(ageGroupValue === "40-59")
        {
            taxrate = 0.4;
        }
        else if(ageGroupValue === "above 60")
        {
            taxrate = 0.1;
        }
        
        tax = taxrate * (overallIncome - 800000);
    }
    
    let taxResultElement = document.getElementById("taxResult");
    taxResultElement.innerHTML = "Your overall income will be" + "<br><center>" + tax.toFixed(2) + "<br>"+"<span style='font-size: smaller;'> after tax deduction</span>";

    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    
    grossIncome.value = '';
    extraIncome.value = '';
    ageGroup.value = '';
    deduction.value = '';
    
    var close = document.getElementsByClassName("close")[0];
    
    close.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

});
