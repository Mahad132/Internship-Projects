let [miliSeconds, secs, mints, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".time-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [miliSeconds, secs, mints, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer() {
    miliSeconds += 10;
    if (miliSeconds == 1000) {
        miliSeconds = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mints++;
            if (mints == 60) {
                mints = 0;
                hours++;
            }
        }
    }
    
    let h = hours < 10 ? "0" + hours : hours;
    let m = mints < 10 ? "0" + mints : mints;
    let s = secs < 10 ? "0" + secs : secs;
    let ms = miliSeconds < 10 ? "00" + miliSeconds : (miliSeconds < 100 ? "0" + miliSeconds : miliSeconds);

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
