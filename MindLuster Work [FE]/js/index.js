
var input = document.querySelector("#iPt");
var cnt = document.querySelector("#cnt");
var maxi = 100;



function countDown(content, maxi) {
  if (content.length > maxi) {
    return false;
  }
  else {
    return true;
  }
}



input.addEventListener("keyup", function () {
  cnt.innerText = maxi - this.value.length;
    if (!countDown(this.value, (maxi - 1))){
          this.disabled = true;
    }
});
