function animateGauge(gaugeId, targetValue) {
    const gauge = document.querySelector(`#${gaugeId}`);
    const arc = gauge.querySelector("path");
    const temperature = gauge.querySelector(".temperature");

    const arcLength = arc.getTotalLength();
    const maxValue = 100;

    let currentValue = 0;

    const interval = setInterval(() => {
        if (currentValue <= targetValue) {
            temperature.textContent = `${currentValue}%`;
            const value = (currentValue / maxValue) * arcLength;
            arc.style.strokeDasharray = `${value} ${arcLength - value}`;
            currentValue++;
        } else {
            clearInterval(interval);
        }
    }, 20); 
}

animateGauge("gauge1", 90); 
animateGauge("gauge2", 90);
animateGauge("gauge3", 5); 
animateGauge("gauge4", 50); 
animateGauge("gauge5", 10); 
animateGauge("gauge6", 100); 
