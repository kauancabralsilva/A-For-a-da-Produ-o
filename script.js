let tamanhoFonte = 16;
let brilho = 100;

const infoBox = document.getElementById("infoBox");

function atualizarEstilo() {
    document.body.style.fontSize = tamanhoFonte + "px";
    document.body.style.filter = "brightness(" + brilho + "%)";
}

/* ACESSIBILIDADE */
function aumentarFonte() {
    tamanhoFonte += 2;
    atualizarEstilo();
}

function diminuirFonte() {
    tamanhoFonte -= 2;
    atualizarEstilo();
}

function aumentarBrilho() {
    brilho += 10;
    atualizarEstilo();
}

function diminuirBrilho() {
    brilho -= 10;
    atualizarEstilo();
}

/* INFORMAÇÕES DOS BOTÕES */
function mostrarInfo(tipo) {
    if (tipo === "plantio") {
        infoBox.innerHTML = "🌱 O plantio de qualidade melhora a produtividade e preserva o solo através de práticas sustentáveis como rotação de culturas e uso de sementes selecionadas.";
    }

    if (tipo === "colheita") {
        infoBox.innerHTML = "🌾 A colheita no momento certo garante alimentos mais nutritivos, reduz perdas e aumenta a eficiência da produção agrícola.";
    }

    if (tipo === "armazenagem") {
        infoBox.innerHTML = "🏡 A armazenagem adequada evita desperdícios, protege contra pragas e mantém a qualidade dos alimentos por mais tempo.";
    }
}

/* CURIOSIDADES */
function mostrarCuriosidade() {
    infoBox.innerHTML = "🌽 Curiosidade: O Brasil é um dos maiores exportadores de soja, milho e café do mundo!";
}
