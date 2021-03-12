(function () {
  "use strict";

  //instantiating new ajax object
  var ajax = new XMLHttpRequest();
  //open connection specifiyng its method
  ajax.open("GET", "/data.json");
  //send data if data exists
  ajax.send();

  //verifies state changes
  ajax.onreadystatechange = function () {};

  ajax.addEventListener(
    "readystatechange",
    function () {
      if (isRequestOk()) {
        var data = JSON.parse(ajax.responseText);
        console.log("Ok =)", data.whateverKey);
      } else {
        console.log("Not Ok or Loading =(");
      }
    },
    false
  );

  // checks current req state
  // 0 = req not sent, open not called yet
  // 1 = open connection
  // 2 = headers received
  // 3 = loading req body
  // 4 = finishes, http status via ajax.status
  ajax.readyState;
  ajax.status;

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  ajax.responseText;
})();
