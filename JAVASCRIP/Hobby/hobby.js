
function CheckPayment() {
    var checkbox1 = document.getElementById("hoppy1");
    var checkbox2 = document.getElementById("hoppy2");
    var checkbox3 = document.getElementById("hoppy3");
    var checkbox4 = document.getElementById("hoppy4");

    var hobbyName1 = document.querySelector('label[for="hoppy1"]').textContent;
    var hobbyName2 = document.querySelector('label[for="hoppy2"]').textContent;
    var hobbyName3 = document.querySelector('label[for="hoppy3"]').textContent;
    var hobbyName4 = document.querySelector('label[for="hoppy4"]').textContent;


    var checkboxIds = [checkbox1, checkbox2, checkbox3, checkbox4];
    var hobbyNames = [hobbyName1, hobbyName2, hobbyName3, hobbyName4];


    var selectedHobbies = [];
    var totalPrice = 0;

    for (var i = 0; i < checkboxIds.length; i++) {
        var checkbox = (checkboxIds[i]);
        
        if (checkbox.checked) {
            var hobbyPrice = parseInt(checkbox.value);
            selectedHobbies.push(hobbyNames[i] + ": " + hobbyPrice + "K");
            totalPrice += hobbyPrice;
        }
    }


    var personType = document.querySelector('input[name="person"]:checked').value;
    var discount = 0;

    if (personType === "sinhvien") {
        discount = 0.1;

    }

    else if (personType === "hocsinh") {
        discount = 0.08;
    }
    else {
        discount = 0.05;
    }

    var discountAmount = totalPrice * discount;

    var returnMoney = totalPrice - discountAmount;

    var resultElement = document.getElementById("result");

    resultElement.innerHTML = "Thành tiền: " + selectedHobbies.join(", ") + ", Tổng: " + totalPrice + "K";

    document.getElementById('discount').innerHTML = "Giảm giá: " + discountAmount + "K";
    document.getElementById('returnMoney').innerHTML = "Tiền cần trả: " + returnMoney + "K";
}

function Cancel() {
    var checkboxElements = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxElements.length; i++) {
        checkboxElements[i].checked = false;
    }

    var radioElements = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < radioElements.length; i++) {
        radioElements[i].checked = false;
    }


    document.getElementById('result').innerHTML = "Thành tiền";
    document.getElementById('discount').innerHTML = "Giảm giá ";
    document.getElementById('returnMoney').innerHTML = "Tiền cần trả ";
}

