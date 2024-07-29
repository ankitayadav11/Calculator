var input = document.getElementById("inputVal");
var sub = document.getElementById("subVal");

function getValue(val) {
  if (input.value == "0") {
    input.value = val;
  } else {
    input.value += val;
  }
}

function clearAll() {
  input.value = "0";
  sub.value = "";
}

function backSpace() {
  if (input.value.length == "1") {
    input.value = "0";
  } else {
    input.value = input.value.slice(0, -1);
  }
}

function solve() {
  var equation = input.value;
  var ans = eval(equation);

  input.value = ans;
  sub.value = equation + "=";

  showHistory(equation, ans);
}

function showHistory(equ, ans) {
  historyDiv.innerHTML += `<div class="his">
                                <p>${equ} =</p>
                                <p>${ans}</p>
                            </div>`;
}

function clearHistory(){
  var historyDivLen = document.querySelectorAll("#historyDiv div").length;
  if(historyDivLen>0){
    var select = confirm("Do you want to clear the history?");
    if(select)
      historyDiv.innerHTML="";
  }
}
