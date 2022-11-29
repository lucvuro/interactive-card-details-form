const addEmptyError = (element, message) => {
  element.classList.add("error");
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("card-error");
  errorMessage.innerHTML = message;
  if (element.id === "card-input-year" || element.id === "card-input-month") {
    element.parentElement.parentElement.appendChild(errorMessage);
  } else {
    element.parentElement.appendChild(errorMessage);
  }
};
const resetError = (element) => {
  element.classList.remove("error");
  if (element.id === "card-input-year" || element.id === "card-input-month") {
    const p = element.parentElement.parentElement.getElementsByTagName("p")[0];
    if (p) {
      element.parentElement.parentElement.removeChild(p);
    }
  } else {
    const p = element.parentElement.getElementsByTagName("p")[0];
    if (p) {
      element.parentElement.removeChild(p);
    }
  }
};
const checkEmpty = (list) => {
  let error = false;
  for (let element of list) {
    resetError(element);
    if (element.value === "") {
      addEmptyError(element, "Can't be blank");
      error = true;
    } else {
    }
  }
  return error;
};
const setCardFront = (cardName, cardNumber, cardMonth, cardYear) => {
  document.getElementById("card-front-number").innerHTML = cardNumber.value;
  document.getElementById("card-front-name").innerHTML = cardName.value;
  document.getElementById(
    "card-front-date"
  ).innerHTML = `${cardMonth.value}/${cardYear.value}`;
};
const setCardBack = (cardCVC) => {
  document.getElementById("card-back-cvc").innerHTML = cardCVC.value;
};
const setComplete = (isVisble) => {
  if (isVisble === true) {
    document.getElementsByClassName("card-content")[0].classList.add("hide");
    document.getElementsByClassName("complete")[0].classList.remove("hide");
  } else {
    document.getElementsByClassName("card-content")[0].classList.remove("hide");
    document.getElementsByClassName("complete")[0].classList.add("hide");
  }
};
const resetInput = () => {
  document.getElementById("card-input-name").value = "";
  document.getElementById("card-input-number").value = "";
  document.getElementById("card-input-month").value = "";
  document.getElementById("card-input-year").value = "";
  document.getElementById("card-input-cvc-number").value = "";
};
document.getElementById("confirm").addEventListener("click", (e) => {
  e.preventDefault();
  const cardName = document.getElementById("card-input-name");
  const cardNumber = document.getElementById("card-input-number");
  const cardMonth = document.getElementById("card-input-month");
  const cardYear = document.getElementById("card-input-year");
  const cardCVC = document.getElementById("card-input-cvc-number");
  if (!checkEmpty([cardName, cardNumber, cardMonth, cardYear, cardCVC])) {
    setCardFront(cardName, cardNumber, cardMonth, cardYear);
    setCardBack(cardCVC);
    resetInput();
    setComplete(true);
  }
});
document.getElementById("continue").addEventListener("click", (e) => {
  e.preventDefault();
  setComplete(false);
  setCardFront(
    { value: "LUC VU" },
    { value: "0000 0000 0000 0000" },
    { value: "00" },
    { value: "00" }
  );
  setCardBack({ value: "000" });
});
document
  .getElementById("card-input-number")
  .addEventListener("input", function (e) {
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  });
document
  .getElementById("card-input-month")
  .addEventListener("input", function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, "").trim();
  });
document
  .getElementById("card-input-year")
  .addEventListener("input", function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, "").trim();
  });
document
  .getElementById("card-input-cvc-number")
  .addEventListener("input", function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, "").trim();
  });
