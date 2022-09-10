function clearScreen() {
  document.getElementById("result").value = "";
  //   console.log(oneItem.substring(0,oneItem.length -1).value += value)
}

const display = (value) => {
  document.getElementById("result").value += value;
};

const calculate = () => {
  let p = document.getElementById("result").value;
  console.log({ p });
  let q = eval(p);
  console.log({ q });
  document.getElementById("result").value = q;
};
