const counterNum = document.querySelector(".countNumber");
let num = 0;
const updateCounterNum = setInterval(function () {
  num++;
  counterNum.innerHTML = num;

  if (num >= 400) {
    clearInterval(updateCounterNum);
    //  counterNum.style.color = "#01ad71";
  }
}, 1000);
