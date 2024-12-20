const btns = document.getElementsByClassName("btn");
const operator = document.getElementsByClassName("operator");
const ac = document.getElementsByClassName("ac");
const del = document.getElementsByClassName("del");
const display = document.getElementById("input");
const eq = document.getElementsByClassName("eq");

let obj = {
  "+": "-",
  "-": "+",
  "*": "/",
  "/": "*",
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    display.value += btns[i].innerHTML;

    console.log("button is clicked");
  });
}

for (let i = 0; i < ac.length; i++) {
  ac[i].addEventListener("click", () => {
    display.value = "";
  });
}

for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
  });
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    display.value += operator[i].innerHTML;
  });
}

for (let i = 0; i < eq.length; i++) {
  eq[i].addEventListener("click", () => {
    let expression = display.value;

    // Faulty logic: 10% of the time, swap operators in the expression
    if (Math.random() < 0.1) {
      console.log("Faulty calculation triggered!");
      for (let key in obj) {
        if (expression.includes(key)) {
          expression = expression.replace(key, obj[key]);
          break;
        }
      }
    }

    // Calculate the result and update the display
    try {
      let result = eval(expression);
      display.value = result;
      display.value = "";
    } catch (error) {
      display.value = "Error";
      console.error("Invalid expression:", expression);
    }
  });
}
