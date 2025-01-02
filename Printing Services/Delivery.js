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

  function validateForm(form) {
    if (!form.checkValidity()) {
      alert("Please fill out all required fields.");
      return false;
    }
    return true;
  }

  paymentForm.addEventListener("change", () => {
    const selectedPayment = document.querySelector('input[name="payment-method"]:checked').value;

    if (selectedPayment === "Bank Transfer") {
      paymentDetails.innerHTML = `<p>Bank Account Number: <strong class="account-number">1622 0035 3205</strong></p>`;
      paymentDetails.classList.remove("hidden");
    } else if (selectedPayment === "QR Code") {
      paymentDetails.innerHTML = `<p>Scan this QR Code to complete your payment:</p>
                                  <img src="QRpay.jpg" alt="C:\Users\Abdullah\Downloads">`;
      paymentDetails.classList.remove("hidden");
    }
  });

  
  locationNextBtn.addEventListener("click", () => {
    if (validateForm(locationForm)) {
      showPage(1);
    }
  });

  
  orderNextBtn.addEventListener("click", () => {
    if (validateForm(orderForm)) {
      showPage(2);
    }
  });

  
  paymentNextBtn.addEventListener("click", () => {
    if (validateForm(paymentForm)) {
      showPage(3);
    }
  });
});
