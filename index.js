function Validate_Age() {
  let Age = document.getElementById("age").value;
  let Result = document.getElementById("result");

  if (Age <= 0) {
    Result.innerHTML = "Enter Valid Age!";
  }
  if (Age >= 1 && Age < 18) {
    Result.innerHTML = "Not Eligible For Vote!";
  }
  if (Age >= 18 && Age <= 110) {
    Result.innerHTML = "Eligible For Vote";
  }
  if (Age > 110 && Age < 9999999) {
    Result.innerHTML = "Please Enter Valid Age";
  }
  if (Age == "") {
    Result.innerHTML = "Please Enter Age First!";
  }
}

function showRefreshPopup() {
  // let userConfirmed = window.confirm(
  //   "Are you sure you want to refresh the page ?"
  // );
  // if (userConfirmed) {
  //   location.reload();
  // }
  location.reload();
}

document.getElementById("age").addEventListener("input", function () {
  var inputValue = this.value;
  if (/[^0-9]/.test(inputValue)) {
    this.value = "";
  }
});
