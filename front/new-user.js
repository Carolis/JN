(function () {
  var ajax = new XMLHttpRequest();
  ajax.open("POST", "http://localhost:3000/user");
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ajax.send("nome=carol&idade=20");

  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
      console.log("cadastrado");
    }
  };
})();
