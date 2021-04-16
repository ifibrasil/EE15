// Código para carregar as tooltips das siglas RA e EM

var pi = document.getElementsByClassName("page-inner")[0];
var R = pi.getBoundingClientRect().right;
var T = pi.getBoundingClientRect().top;
var B = pi.getBoundingClientRect().bottom;

var siglasRA = document.getElementsByClassName("RA");
var siglasEM = document.getElementsByClassName("EM");

for (i = 0; i < siglasRA.length; i++) {

	var meuSpan = document.createElement("SPAN");
	meuSpan.className = "tooltiptext";
	meuSpan.innerHTML = 
		"RA = reforma administrativa.<br><br>" +
		"Trata-se do acionamento de uma ou mais das seguintes medidas:<br><br>" +
		"• alongamento de carreiras;<br>" +
		"• redução do salário inicial;<br>" +
		"• redução da taxa de reposição por aposentadoria ou morte.<br><br>" +
		"Quando acionada, vigora de 2022 em diante.";

	s = siglasRA[i].appendChild(meuSpan);

	// As linhas de código a seguir reposicionam as tooltips caso haja overflow, isto é, suas bordas estejam além das bordas da área de visualização do texto (o que leva à ocultação de parte das tooltips).

	var sr = s.getBoundingClientRect().right;
	var sb = s.getBoundingClientRect().bottom;

	if (sr > R){ s.style.right = "100%"; };
	if (sb > B){ s.style.bottom = "100%"; };

	var st = s.getBoundingClientRect().top;
	if (st < T){ s.style.bottom = "-100px"; }; // Se mesmo após o reposicionamento anterior o overflow persiste, deixa a tooltip em altura intermediária

};

for (i = 0; i < siglasEM.length; i++) {

	var meuSpan = document.createElement("SPAN");
	meuSpan.className = "tooltiptext";
	meuSpan.innerHTML = 
			"SPP = suspensão de progressões e promoções.<br><br>" +
			"Quando acionada, vigora em 2025 e 2026.";

	s = siglasEM[i].appendChild(meuSpan);

	// As linhas de código a seguir reposicionam as tooltips caso haja overflow, isto é, suas bordas estejam além das bordas da área de visualização do texto (o que leva à ocultação de parte das tooltips).

	var sr = s.getBoundingClientRect().right;
	var sb = s.getBoundingClientRect().bottom;

	if (sr > R){ s.style.right = "100%"; };
	if (sb > B){ s.style.bottom = "100%"; };

	var st = s.getBoundingClientRect().top;
	if (st < T){ s.style.bottom = "-30px"; }; // Se mesmo após o reposicionamento anterior o overflow persiste, deixa a tooltip em altura intermediária

};
