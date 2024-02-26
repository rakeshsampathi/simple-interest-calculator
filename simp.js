function simple() {
  var P = document.getElementById("pcplamt").value;
  var T = document.getElementById("Time").value;
  var R = document.getElementById("intrst").value;
  var interest = (P * T * R) / 100;
  var total = interest + parseInt(P);
  document.getElementById("itotal").value = interest;
  document.getElementById("atotal").value = total;
}
