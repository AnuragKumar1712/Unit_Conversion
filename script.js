const div1 = document.getElementById('temperature');
const div2 = document.getElementById('weight');
const div3 = document.getElementById('distance');

// Function to show a specific div and hide the others
function showDiv(divToShow) {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';

    // Show the div you want to display
    divToShow.style.display = 'block';
}

// Adding event listeners to buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

button1.addEventListener('click', () => showDiv(div1));
button2.addEventListener('click', () => showDiv(div2));
button3.addEventListener('click', () => showDiv(div3));

// Converting Temperature to & from Celsius to fahrenheit
function convert1(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = parseFloat(x);
    } else {
        x = (document.getElementById("f").value - 32) * 5 / 9;
        document.getElementById("c").value = parseFloat(x);
    }
}

// Clear button
window.addEventListener('load', () => {
    const button = document.querySelector('#clear');
    button.addEventListener('click', () => {
        document.querySelector('#c').value = "";
        document.querySelector('#f').value = "";
    });
});


// Converting Weight to & from Kilogram to Pounds
function convert2(kg) {
    var x;
    if (kg == "KG") {
        x = document.getElementById("kg").value * 2.2046;
        document.getElementById("lbs").value = parseFloat(x);
    } else {
        x = (document.getElementById("lbs").value) / 2.2046;
        document.getElementById("kg").value = parseFloat(x);
    }
}

// Clear button
window.addEventListener('load', () => {
    const button = document.querySelector('#clear2');
    button.addEventListener('click', () => {
        document.querySelector('#kg').value = "";
        document.querySelector('#lbs').value = "";
    });
});


// Converting Distance to & from Kilometers to Miles
function convert3(km) {
    var x;
    if (km == "KM") {
        x = document.getElementById("km").value / 1.60934;
        document.getElementById("m").value = parseFloat(x);
    } else {
        x = (document.getElementById("m").value) * 1.60934;
        document.getElementById("km").value = parseFloat(x);
    }
}

// Clear button
window.addEventListener('load', () => {
    const button = document.querySelector('#clear3');
    button.addEventListener('click', () => {
        document.querySelector('#km').value = "";
        document.querySelector('#m').value = "";
    });
}); 