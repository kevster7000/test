// Eye follows cursor
const eye = document.querySelector("#eye");
const eyeIris = document.querySelector("#eye-iris");
const eyeReflection = document.querySelector("#eye-reflection");

addEventListener("mousemove", (event) => {
    let widthBuf = innerWidth/2.0;
    let heightBuf = (innerHeight + 40)/2.0;

    let widthTrans = (event.clientX - widthBuf) / (widthBuf);
    let heightTrans = (event.clientY - heightBuf) / (heightBuf);

    eye.setAttribute("transform", `translate(${22 * widthTrans}, ${19 * heightTrans})`);
    eyeIris.setAttribute("transform", `translate(${29 * widthTrans}, ${26 * heightTrans})`);
    eyeReflection.setAttribute("transform", `translate(${28 * widthTrans}, ${25 * heightTrans})`);
});

// Eye blink periodically between 0.25 - 15.25s
let blinkInterval = (Math.sqrt(Math.random()) * 15) + 0.25;
let eyeInactive = false;
setTimeout(() => eyeInactive = true, 1000 * blinkInterval);

const eyeOuter = document.querySelector("#frame1");
const eyeInner = document.querySelector("#frame10");

setInterval(() => {
    if(eyeInactive) {
        blinkInterval = (Math.sqrt(Math.random()) * 15) + 0.25;
        eyeOuter.beginElement();
        eyeInner.beginElement();

        eyeInactive = false;

        setTimeout(() => eyeInactive = true, 1000 * blinkInterval);
    }
}, 125);

// BG effect with start/stop button
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const body = document.querySelector("body");
let bgInactive = true;
let degreeCount = 0;
let degreeInterval;

startBtn.addEventListener("click", () => {
    if(bgInactive) {
        body.style.setProperty("background-color", `hsla(240, 5%, 9%, 0.7)`);
        document.documentElement.style.setProperty("--rotateHueCover", "hsla(240, 5%, 9%, 0.4)");
        document.documentElement.style.setProperty("--rotateHueAnimation", "rotateHue 15s linear infinite");
        document.documentElement.style.setProperty("--rotateHueBackground", `
            radial-gradient(circle, lime, transparent 30%),
            conic-gradient(from var(--rotateHueDegrees),
                salmon,
                teal,
                green,
                yellow,
                violet,
                magenta,
                cyan,
                yellow,
                orangered,
                salmon)`
        );
        bgInactive = false;

        degreeInterval = setInterval(() => {
            degreeCount = (degreeCount + 0.05) % 360;
            document.documentElement.style.setProperty("--rotateHueDegrees", `${degreeCount}deg`);
        }, 10);
    }
});

stopBtn.addEventListener("click", () => {
    if(!bgInactive) {
        document.documentElement.style.setProperty("--rotateHueCover", "hsl(240, 5%, 9%)");
        setTimeout(() => {
            body.style.setProperty("background-color", "hsl(240, 5%, 9%)");
            document.documentElement.style.setProperty("--rotateHueAnimation", "none");
            document.documentElement.style.setProperty("--rotateHueBackground", "transparent");
            bgInactive = true;
        }, 1300);
        clearInterval(degreeInterval);
    }
});