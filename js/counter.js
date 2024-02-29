const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = Math.ceil(target / 300); // Incremento dinámico
        if (count < target) {
            counter.innerText = `${Math.min(count + increment, target)}`;
            setTimeout(updateCounter, 1);
        }
    };
    updateCounter();
});
