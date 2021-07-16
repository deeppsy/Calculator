const insert = (num) => {
  document.form.children[0].value = document.form.children[0].value + num;
};

const equal = () => {
  const exp = document.form.children[0].value;
  if (exp) {
    //this is to ensure that what you click on the equals to without any expression, it doesn't run
    document.form.children[0].value = eval(exp);
  }
};

const clean = () => {
  document.form.children[0].value = "";
};

const back = () => {
  document.form.children[0].value = document.form.children[0].value.slice(
    0,
    -1
  );
};
