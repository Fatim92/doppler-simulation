let speedSlider = document.getElementById("speed");
let freqText = document.getElementById("freq");
let caseText = document.getElementById("caseText");
let dbList = document.getElementById("db");

// Base de données simulée (cas médicaux)
let cases = [
    { name: "Normal blood flow", speed: 4, risk: "Low" },
    { name: "Moderate stenosis", speed: 7, risk: "Medium" },
    { name: "Severe stenosis", speed: 10, risk: "High" }
];

// 🔹 Update Doppler frequency (simplified model)
function updateFrequency() {
    let v = Number(speedSlider.value);

    // simple Doppler-like variation
    let f0 = 100; // base frequency
    let observed = f0 + v * 12;

    freqText.innerText = observed.toFixed(1);
}

speedSlider.addEventListener("input", updateFrequency);
updateFrequency();

// 🏥 Medical cases
function normalCase() {
    caseText.innerText = "✅ Normal flow detected. No medical risk.";
}

function stenosisCase() {
    caseText.innerText = "⚠️ High velocity detected → possible arterial stenosis!";
}

// 📊 Show "database"
function showDatabase() {
    dbList.innerHTML = "";

    cases.forEach(c => {
        let li = document.createElement("li");
        li.innerText = `${c.name} | speed: ${c.speed} | risk: ${c.risk}`;
        dbList.appendChild(li);
    });
}
