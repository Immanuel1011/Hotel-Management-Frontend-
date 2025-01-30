function selectRoom(roomType, pricePerNight) {
    const checkinDate = document.getElementById("checkin").value;
    const checkoutDate = document.getElementById("checkout").value;

    if (!checkinDate || !checkoutDate) {
        alert("Please select both check-in and check-out dates.");
        return;
    }

    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    const days = (checkout - checkin) / (1000 * 60 * 60 * 24);

    if (days <= 0) {
        alert("Check-out date must be after check-in date.");
        return;
    }

    const totalAmount = days * pricePerNight;

    // Store booking details in sessionStorage
    sessionStorage.setItem("roomType", roomType);
    sessionStorage.setItem("pricePerNight", pricePerNight);
    sessionStorage.setItem("checkinDate", checkinDate);
    sessionStorage.setItem("checkoutDate", checkoutDate);
    sessionStorage.setItem("days", days);
    sessionStorage.setItem("totalAmount", totalAmount);

    // Redirect to payment page
    window.location.href = "payment.html";
}
// Validate payment fields
function validatePayment() {
    const cardNumber = document.getElementById("card-number").value;
    const cvv = document.getElementById("cvv").value;
    const otp = document.getElementById("otp").value;

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert("Card number must be 16 digits.");
        return false;
    }
    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("CVV must be 3 digits.");
        return false;
    }
    if (otp.length !== 4 || isNaN(otp)) {
        alert("OTP must be 4 digits.");
        return false;
    }

    alert("Payment successful!");
    return true;
}

// Generate OTP
function generateOTP() {
    const otp = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("otp").value = otp;
}
