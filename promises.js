let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("errrouuu");
  }
});

//for resolve
p.then((message) => {
  console.log("Then", message);
}).catch((message) => {
  console.log("Catch", message);
});
