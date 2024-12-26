document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const locationNextBtn = document.getElementById("location-next");
  const orderNextBtn = document.getElementById("order-next");
  const paymentNextBtn = document.getElementById("payment-next");
  const paymentDetails = document.getElementById("payment-details");
  const paymentForm = document.getElementById("payment-form");

 
  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index);
    });
  }

  
  paymentForm.addEventListener("change", () => {
    const selectedPayment = document.querySelector('input[name="payment-method"]:checked').value;

    if (selectedPayment === "Bank Transfer") {
      paymentDetails.innerHTML = `<p>Bank Account Number: <strong class="account-number">4000001110000111</strong></p>`;
      paymentDetails.classList.remove("hidden");
    } else if (selectedPayment === "QR Code") {
      paymentDetails.innerHTML = `<p>Scan this QR Code to complete your payment:</p>
                                  <img src="qr-code-placeholder.png" alt="DelivryQr.png">`;
      paymentDetails.classList.remove("hidden");
    }
  });

  
  locationNextBtn.addEventListener("click", () => showPage(1)); 
  orderNextBtn.addEventListener("click", () => showPage(2)); 
  paymentNextBtn.addEventListener("click", () => showPage(3));
});

