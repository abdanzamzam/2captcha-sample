async function sum() {
  let a = 20;
  let b = 30;

  let d = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000); // after 2 second
  });

  d.then((result) => {
    return result;
  }).then((d) => {
    let e = d * 10;
    console.log(e);
  });
}

sum();
