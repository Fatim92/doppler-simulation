let speedSlider = document.getElementById("speed");
let freqText = document.getElementById("freq");
let caseText = document.getElementById("caseText");

function updateFrequency() {
    let v = speedSlider.value;

    // simulation simple Doppler
    let freq = 100 + v * 10;

    freqText.innerText = freq;
}

speedSlider.oninput = updateFrequency;
updateFrequency();

function normalCase() {
    caseText.innerText = "Normal blood flow detected. No risk.";
}

function stenosisCase() {
    caseText.innerText = "High velocity detected → possible arterial stenosis!";
}
