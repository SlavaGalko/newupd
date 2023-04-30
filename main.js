let btn_calculate = document.querySelector(".btn_calculate");
let h3 = document.querySelector(".h3");
let h3_2 = document.querySelector('.h3_2');

let value;
let valueWithCommision;

let summ = document.querySelector(".summ");
let after_sum = document.querySelector('.after-summ');
let after_after_summ = document.querySelector('.after-after-summ');

let inp_perc = document.querySelector(".input_percent");
let inp_vol = document.querySelector(".input_volume");

inp_perc.focus()

// document.addEventListener('keydown', (e)=>{
//     if (e.key == 'Enter'){
//         funcCalcMoney()
//     }
//     else if (e.key == 'ArrowRight'){
//         inp_vol.focus();
//     }
// })

let counter = 0;

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (counter == 0) {
      counter++;
      inp_vol.focus();
    } else {
      funcCalcMoney();
    }
  }
});

btn_calculate.addEventListener("click", funcCalcMoney);

function funcCalcMoney() {
  let input_percent = document.querySelector(".input_percent").value;
  let input_volume = document.querySelector(".input_volume").value;

  if (
    input_percent != null &&
    input_percent != undefined &&
    input_percent != NaN &&
    input_percent != "" &&
    input_volume != null &&
    input_volume != undefined &&
    input_volume != NaN &&
    input_volume != ""
  ) {
    value = (input_volume / 100) * input_percent;
    valueWithCommision = (input_volume / 100 ) * 0.0800;
    fullValueWithCom = value - valueWithCommision;


    if (isNaN(value)) {
      alert("Введіть числа а не букви");
    } else {
      h3.textContent = `${value}`;
      h3_2.textContent = `${fullValueWithCom}`
      summ.classList.remove("hide");
      after_sum.classList.remove('hide');
      after_after_summ.classList.remove('hide');

    }
  } else {
    alert("Введи корректні значення!");
  }
}
