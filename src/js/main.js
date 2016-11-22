import reqwest from 'reqwest'
import hatHTML from './text/hat.html!text'
import wandHTML from './text/wand.html!text'
import trainHTML from './text/train.html!text'
import schoolHTML from './text/school.html!text'
import owlHTML from './text/owl.html!text'
import snitchHTML from './text/snitch.html!text'
import glassesHTML from './text/glasses.html!text'


export function init(el, context, config, mediator) {
	//var params = splitURL();
	var params = {graphic: el.getAttribute('data-alt')}
	var mainHTML;
	if (params.graphic == 'hat'){ mainHTML = hatHTML };
	if (params.graphic == 'wand'){ mainHTML = wandHTML };
	if (params.graphic == 'train'){ mainHTML = trainHTML };
	if (params.graphic == 'school'){ mainHTML = schoolHTML };
	if (params.graphic == 'owl'){ mainHTML = owlHTML };
	if (params.graphic == 'snitch'){ mainHTML = snitchHTML };
	if (params.graphic == 'glasses'){ mainHTML = glassesHTML };

    el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);
}



function getDataAlt(el){
	console.log(config)

	var x = document.getElementsByClassName('element element-interactive interactive');
	//var container = 
}


function splitURL(){
		var query = window.location.search.substring(1),
			vars = query.split("&"),
			params = {},
			p;

		for (var i=0; i<vars.length;i++){
		p = vars[i].split("=");
		params[ p[0] ] = p[1];
		};

		return params;
};