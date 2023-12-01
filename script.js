document.addEventListener("DOMContentLoaded", () => {
    const rateInputs = document.querySelectorAll('input[name="rating"]');
    const myBtn = document.getElementById("submitBtn");
    const mainContainer = document.getElementById("main__container");
    const thankYouState = document.getElementById("thankyoustate");
    const myText = document.getElementById("myLabel");
  
    myBtn.addEventListener("click", () => {
      let selectedValue = null;
      rateInputs.forEach(input => {
        if (input.checked) {
          selectedValue = input.value;
          // window.location.href = `thankyoustate.html`;
          mainContainer.classList.add("hidden");
          thankYouState.classList.add("show");
          myText.innerHTML = `You selected ${selectedValue} out of 5 `
        }
      });
  
      if (selectedValue === null) {
        window.confirm("No rating selected");
      }
    });
  });
  