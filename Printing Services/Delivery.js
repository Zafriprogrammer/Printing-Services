document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const locationNextBtn = document.getElementById("location-next");
  const orderNextBtn = document.getElementById("order-next");
  const paymentNextBtn = document.getElementById("payment-next");
  const paymentDetails = document.getElementById("payment-details");
  const paymentForm = document.getElementById("payment-form");
  const locationForm = document.getElementById("location-form");
  const orderForm = document.getElementById("order-form");

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index);
    });
  }

  function validateDropdown(fieldId) {
    const dropdown = document.querySelector(`#${fieldId}`);
    if (dropdown.value === "") {
      alert(`Please choose a valid ${dropdown.name.replace("-", " ")}.`);
      return false;
    }
    return true;
  }

  function validateBlockInput() {
    const blockInput = document.querySelector("#block");
    if (blockInput.value.length > 2) {
      alert("Enter a valid block (max 2 characters).");
      return false;
    }
    return true;
  }

  function validateForm(form) {
    if (!form.checkValidity()) {
      alert("Please fill out all required fields.");
      return false;
    }
    return true;
  }

  paymentForm.addEventListener("change", () => {
    const selectedPayment = document.querySelector('input[name="payment-method"]:checked').value;

    if (selectedPayment === "Bank Transfer") {
      paymentDetails.innerHTML = `<p>Bank Account Number: <strong class="account-number">1622 0035 3205 (Maybank)</strong></p>`;
      paymentDetails.classList.remove("hidden");
    } else if (selectedPayment === "QR Code") {
      paymentDetails.innerHTML = `<p>Scan this QR Code to complete your payment:</p>
                                  <img src="Images/QRpay.jpeg" alt="QR Code for payment">`;
      paymentDetails.classList.remove("hidden");
    }
  });

  locationNextBtn.addEventListener("click", () => {
    const mahallahDropdown = document.querySelector("#mahallah");

    if (validateForm(locationForm) && validateBlockInput() && validateDropdown("mahallah")) {
      showPage(1);
    }
  });

  orderNextBtn.addEventListener("click", () => {
    if (
      validateForm(orderForm) &&
      validateDropdown("page-size") &&
      validateDropdown("ink-type") &&
      validateDropdown("quality")
    ) {
      showPage(2);
    }
  });

  paymentNextBtn.addEventListener("click", () => {
    if (validateForm(paymentForm)) {
      showPage(3);
    }
  });
});
