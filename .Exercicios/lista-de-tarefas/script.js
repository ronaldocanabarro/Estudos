const input = document.querySelector("#inputTarefa");
const btnAdd = document.querySelector("#btnAdd");
const lista = document.querySelector("#areaLista");
let contador = 0;

function addTarefa() {
    let valorInput = input.value;

    if (valorInput !== "") {
        ++contador;

        // Criar o container da tarefa
        const item = document.createElement("div");
        item.id = `item${contador}`;
        item.className = "item";

        item.onclick = () => {
            marcarTarefa(item.id);
        };

        // Ícone
        const itemIcone = document.createElement("div");
        itemIcone.className = "item-icone";
        const icone = document.createElement("i");
        icone.className = "mdi mdi-circle-outline";
        itemIcone.appendChild(icone);

        // Nome da tarefa
        const itemNome = document.createElement("div");
        itemNome.className = "item-nome";
        itemNome.textContent = valorInput;

        // Botão de deletar
        const itemBotaoDeletar = document.createElement("div");
        itemBotaoDeletar.className = "item-botao-deletar";
        const deletar = document.createElement("button");
        deletar.className = "delete";
        deletar.innerHTML = `<i class="mdi mdi-delete"></i> Deletar`;

        deletar.onclick = (event) => {
            event.stopPropagation();
            deletarTarefa(item.id);
        };

        itemBotaoDeletar.appendChild(deletar);

        // Montar o item completo
        item.appendChild(itemIcone);
        item.appendChild(itemNome);
        item.appendChild(itemBotaoDeletar);

        // Adicionar à lista
        lista.appendChild(item);

        // Limpar input
        input.value = "";
        input.focus();
    };
};

function deletarTarefa(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
};

function marcarTarefa(id) {
    const tarefa = document.getElementById(id);
    tarefa.classList.toggle("clicado");
    const icone = tarefa.querySelector("i");
    icone.classList.toggle("mdi-circle-outline");
    icone.classList.toggle("mdi-check-circle");
    
    tarefa.parentNode.appendChild(tarefa);
};

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        btnAdd.click();
    };
});