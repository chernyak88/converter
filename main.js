const c = {
    'USD':'74.25', 
    'EUR':'90.26', 
    'RUB':'1'
};

const val = document.getElementById('val');
const currency1 = document.getElementById('cur1');
const currency2 = document.getElementById('cur2');
const result = document.querySelector('.convert_result');

function convert() {
    if (currency1.value === currency2.value) {
        result.innerHTML = val.value;
    } else {
        if (currency1.value !== 'RUB') {
            result.innerHTML = Math.ceil((val.value*c[currency1.value]/c[currency2.value])*100)/100;
        } else {
            result.innerHTML = Math.ceil((val.value/c[currency2.value])*100)/100;
        }
    }
};

window.addEventListener("load", function() {
    convert();
});

function onInput() {
    val.value = val.value.replace(/^0|[^\d]/g, '');
    convert();
};