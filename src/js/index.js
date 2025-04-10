// Seleciona todos os botões e personagens do DOM
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

/**
 * Remove a classe "selecionado" do botão atualmente selecionado.
 */
function desmarcarBotaoSelecionado() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	if (botaoSelecionado) {
		botaoSelecionado.classList.remove("selecionado");
	}
}

/**
 * Marca o botão clicado como selecionado.
 * @param {HTMLElement} botao - O botão que foi clicado.
 */
function marcarBotaoComoSelecionado(botao) {
	botao.classList.add("selecionado");
}

/**
 * Remove a classe "selecionado" do personagem atualmente exibido.
 */
function esconderPersonagemSelecionado() {
	const personagemSelecionado = document.querySelector(".personagem.selecionado");
	if (personagemSelecionado) {
		personagemSelecionado.classList.remove("selecionado");
	}
}

/**
 * Exibe o personagem correspondente ao índice do botão clicado.
 * @param {number} indice - Índice do botão clicado.
 */
function mostrarPersonagem(indice) {
	personagens[indice].classList.add("selecionado");
}

/**
 * Função principal que configura os eventos de clique dos botões.
 */
function inicializarEventosDosBotoes() {
	botoes.forEach((botao, indice) => {
		botao.addEventListener("click", () => {
			desmarcarBotaoSelecionado();
			marcarBotaoComoSelecionado(botao);
			esconderPersonagemSelecionado();
			mostrarPersonagem(indice);
		});
	});
}

// Inicializa a aplicação
inicializarEventosDosBotoes();
