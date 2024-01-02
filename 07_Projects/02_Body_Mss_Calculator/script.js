function calculateBMI() {
  const height = document.getElementById("height").Value;
  const weight = document.getElementById("weight").value;

  if (height === "" || weight === "") {
    alert("please enter both height and weight.");
    return;
  }
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  let result = `Your BMI is ${bmi}.`;

  if (bmi < 18.5) {
    result += "you are underweight.";
  } else if (bmi >= 18.5 && bmi < 25) {
    result += "You have a normal weight.";
  } else if (bmi >= 25 && bmi < 30) {
    result += "You are overweight.";
  } else {
    result += " You are obese.";
  }

  document.getElementById("reslut").innerText = results;
}
function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (
    height === "" ||
    height < 0 ||
    isNaN(height) ||
    weight === "" ||
    weight < 0 ||
    isNaN(weight)
  ) {
    alert("Please enter both valid height and vaid weight.");
    return;
  }

  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  let result = `Your BMI is ${bmi}.`;

  if (bmi < 18.5) {
    result += " You are underweight.";
  } else if (bmi >= 18.5 && bmi < 25) {
    result += " You have a normal weight.";
  } else if (bmi >= 25 && bmi < 30) {
    result += " You are overweight.";
  } else {
    result += " You are obese.";
  }

  document.getElementById("result").innerText = result;
}
