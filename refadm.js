Dygraph.Plugins.SelectSeries = (function(){

	"use strict";

	var boxes = function(){this.div_ = null;};

	var largura = $(window).width();
	$(window).on('resize', function() {
	if ($(this).width() !== largura) {
		largura = $(this).width();
	}
	});

	boxes.prototype.activate = function(dygraph){
		

		boxes.div_ = document.createElement("div");

		if (largura < 1050) {
			boxes.div_.style = 'width:100%;text-align:left;float:none;margin-top:80px;margin-left:0px';
		}
		else {
			boxes.div_.style = 'width:260px;text-align:left;float:right;margin-top:80px;margin-left:0px';
		}

		var colunas = dygraph.getLabels();
		colunas.shift();

		colunas.forEach(function(value){
			boxes.div_.innerHTML += '<p style="font-size:16px;margin-bottom:5px;font-family:Cambria;text-align:left"><input type="checkbox" checked=""> ' + value + '</p>';
		});		

		colunas.forEach(function(value,index){
			var i = boxes.div_.getElementsByTagName("input")[index];
			i.addEventListener('change',function(){dygraph.setVisibility(index,i.checked);});
		});

		dygraph.graphDiv.parentNode.insertAdjacentElement("beforebegin", boxes.div_);
	};

	return boxes;

})();

