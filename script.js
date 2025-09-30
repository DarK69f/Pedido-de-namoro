function Ebaa() {
    document.getElementById("elaAceitou").innerHTML = "EBAAA 🥰";
    elementToRemove = document.getElementById("Nem_pense")
    elementToRemove.remove();
}

function Nananina_nao() {
    const btn = document.getElementById("Nem_pense");

    btn.addEventListener("mouseenter", () => {
        const maxX = window.innerWidth - btn.offsetWidth;
        const maxY = window.innerHeight - btn.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        btn.style.left = randomX + "px";
        btn.style.top = randomY + "px";
    });
}

function Droga() {
    document.getElementById("elaAceitou").innerHTML = "Tudo bem, se é assim então... 😭😥"
}