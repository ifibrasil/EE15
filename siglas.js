// Código para carregar as tooltips das siglas RA e EM

var siglasRA = document.getElementsByClassName("RA");
var siglasEM = document.getElementsByClassName("EM");

for (i = 0; i < siglasRA.length; i++) {
	siglasRA[i].innerHTML = 
		siglasRA[i].innerHTML +
		"<span class='tooltiptext'>" +
			"RA = reforma administrativa.<br><br>" +
			"Trata-se do acionamento de uma ou mais das seguintes medidas:<br><br>" +
			"• alongamento de carreiras;<br>" +
			"• redução do salário inicial;<br>" +
			"• redução da taxa de reposição por aposentadoria ou morte.<br><br>" +
			"Quando acionada, vigora de 2022 em diante."
		"</span>";
};

for (i = 0; i < siglasEM.length; i++) {
	siglasEM[i].innerHTML = 
		siglasEM[i].innerHTML +
		"<span class='tooltiptext'>" +
			"SPP = suspensão de progressões e promoções.<br><br>" +
			"Quando acionada, vigora em 2025 e 2026."
		"</span>";
};
