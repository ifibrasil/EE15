// Scroll-box horizontal para as tabelas
// ----------------------------------------------------------

window.onload = function(){

	var tabelas = document.getElementsByClassName("tabelaifi");
	for (i = 0; i < tabelas.length; i++) {
		var div_com_scroll = document.createElement("DIV");
		div_com_scroll.style.overflowX = "scroll";
		tabelas[i].insertAdjacentElement("beforebegin", div_com_scroll);
		div_com_scroll.appendChild(tabelas[i]);
	};

	var tabelas = document.getElementsByClassName("tabelaifi-resumo");
	for (i = 0; i < tabelas.length; i++) {
		var div_com_scroll = document.createElement("DIV");
		div_com_scroll.style.overflowX = "scroll";
		tabelas[i].insertAdjacentElement("beforebegin", div_com_scroll);
		div_com_scroll.appendChild(tabelas[i]);
	};

};
