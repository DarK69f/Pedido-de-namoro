function Ebaa() {
    document.getElementById("elaAceitou").innerHTML = "EBAAA 🥰 <br> Aqui está meu número:<br> +55 99 99999 9999";
    elementToRemove = document.getElementById("Nem_pense")
    elementToRemove.remove();

    elementToRemove1 = document.getElementById("YesBaby")
    elementToRemove1.remove();
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
    elementToRemove = document.getElementById("YesBaby")
    elementToRemove.remove();

    elementToRemove1 = document.getElementById("Nem_pense")
    elementToRemove1.remove();
}

let hora = new Date().getHours();

if (hora < 12) {
    document.getElementById("dia").innerHTML = "Eiii, bom dia 🌞. <br> Eu tenho uma pergunta!"
} else if (hora < 18) {
    document.getElementById("dia").innerHTML = "Eiii, boa tarde ⛅. <br> Eu tenho uma pergunta!"
} else {
    document.getElementById("dia").innerHTML = "Eiii, boa noite 🌙. <br> Eu tenho uma pergunta!"
}