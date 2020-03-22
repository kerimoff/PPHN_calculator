var checkboxDrf = document.querySelector("input[name=drf]");
var checkboxUti = document.querySelector("input[name=uti]");
var checkboxReObst = document.querySelector("input[name=re_obst]");
var numberDrfValue = document.querySelector("input[name=drf_value]");
var spanResult = document.getElementById("result");


// window.onload = recalculate
checkboxDrf.addEventListener( 'change', function() {
    numberDrfValue.disabled = this.checked ? false : true
    recalculate()
});

checkboxUti.addEventListener( 'change', function() {
    recalculate()
});

checkboxReObst.addEventListener( 'change', function() {
    recalculate()
});

numberDrfValue.addEventListener( 'change', function() {
    recalculate()
});

function recalculate() {
    let y = 0
    var uti_val = checkboxUti.checked ? 1 : 0;
    var reobst_val = checkboxReObst.checked ? 1 : 0;
    
    if (checkboxDrf.checked) {
        y = 3.881 + (2.9 * reobst_val) + (1.45 * uti_val) - (0.11 * numberDrfValue.value)
    } else {
        y = (2.68 * reobst_val) + (1.7 * uti_val) - 1.291
    }
    let expy = Math.exp(y)
    spanResult.innerHTML = ((expy * 100) / (1 + expy)).toFixed(3)
}

document.onload = recalculate()

