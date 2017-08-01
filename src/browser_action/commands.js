document.getElementById("copyButton").addEventListener("click", copyButtonHandler);
document.getElementById("generateButton").addEventListener("click", generateButtonHandler);

function loremIpsum(){
	var localeSelectd =document.getElementById("localeSelect").value;
	var words = document.getElementById("words").value;
	//var lines = document.getElementById("lines").value;
	
	var strlocale_enUS ="Lorem ipsum  sit amet consectetur adipiscing elit Fusce viverra dolor  nec vulputate  vehicula in Vestibulum pretium libero at lacinia laoreet interdum sem a pharetra tortor arcu maximus nisl Donec justo sem lobortis non porttitor vel dignissim a velit Curabitur accumsan augue dictum tellus rhoncus vitae Quisque egestas malesuada ante  sagittis nunc tristique Praesent quis ligula";
	
	var strlocale_esES ="Lorem ipsum Se espera de los colaboradores que se comporten de manera civilizada y que los debates que puedan producirse en las páginas de discusión de cada artículo tengan el único propósito de mejorarlo. Perseguir los intereses propios o tratar de imponer ciertos puntos de vista son errores en los que no debe caerse Los artículos deben escribirse cuidadosamente, vigilando las faltas que se puedan cometer y la forma de expresarse; en el momento de hacer una consulta, es muy agradable leer una redacción de buena calidad. Un método fácil para escribir de forma correcta es imaginarse en todo momento las aportaciones dentro de una enciclopedia impresa, y eliminar o modificar el texto convenientemente cuando parezca fuera de lugar. Además, existe un manual de estilo que ayuda a que los artículos adquieran una apariencia homogénea Nunca debe olvidarse que el objetivo de este proyecto es el de construir un recurso básico en todas las áreas del conocimiento humano. Los  deben ser atractivos y legibles, pero al mismo tiempo  mantener la seriedad en su contenido y explicar los temas de concisa";
	
	var strlocale_frCA ="Lorem ipsum Le deuxième niveau de contrôle consiste, pour un rédacteur inscrit, à examiner sur sa « liste de suivi liste des pages qu'il a marquées pour les surveiller) les modifications apportées récemment. Cet examen permet de détecter et corriger assez rapidement les principaux problèmes de fond erreurs manifestes, ajouts hors sujet, ou manque d'objectivité ou de neutralité dans la formulation. Les coauteurs de l'article peuvent ainsi contrôler de manière plus approfondie les ajouts suspects, si nécessaire en s'appuyant sur des sources de référence";
	
	var strlocale_arSA = "بسبب طريقة تحرير المقالات من خلال نظام الويكي الذي يسمح لأي شخص إضافة وتعديل وحذف معلومات من معظم مقالات ويكيبيديا، اتهم بعض المتخصصين الويكي، بكونها ليست ذات مرجعية  عبارة: نص ضعيف بمصدر، أفضل من كتابة جيدة غير موثوقة، تدل على أن المحررين المجهولين، لا يمكن تتبعهم، أو مناقشتهم، للاستفادة منهم، أو لمجادلتهم. يجيب إداريو الويكي، أن هذا يشجع الزوار الجدد على الإضافة، بإغرائهم للتغيير، والاستفادة ولو بتلميحات عديدة منهم، كما أنه غالباً ما يدفع هؤلاء المحررين للتسجيل في آخر المطاف  كما أن دراسات لتأثير التخريب، أثبتت أنه لا داعي في المبالغة بتأثيره، غالباً، ما تكون المقالات المحايدة، أطول مدة وأكثر استقرارا. إن مختلف صلاحيات إداريي الويكي، تمكنهم من حماية المقالات التي تحتاج مراقبة مكثفة، أو تتعرض لتخريب متنوع، كمقالات البلدان مثلا، أو المقالات عن المواضيع الدينية والسياسية.";
	
	var langLocale;
	document.getElementById("generatedContent").dir ="auto";
	if (localeSelectd =="locale-esES"){
		langLocale = strlocale_esES.split(" ");
	}else if (localeSelectd =="locale-caFR"){
		langLocale = strlocale_frCA.split(" ");
	}else if (localeSelectd =="locale-arSA"){
		langLocale = strlocale_arSA.split(" ");
		document.getElementById("generatedContent").dir ="rtl";
	}else{
		langLocale = strlocale_enUS.split(" ");
		
	}
	
	var generatedContent="Lorem Ipsum";
	for (i= 0; i < words;i++){
		generatedContent = generatedContent + " " + langLocale[randomBetween(0,langLocale.length -2 )]
		
	}
	document.getElementById("generatedContent").innerHTML =	generatedContent;
	
}

function randomBetween(min,max){
	return Math.floor(Math.random() * max) + 1;
}



function copyButtonHandler() {
   copyToClipboard(document.getElementById("generatedContent").value);
}

function generateButtonHandler() {
    //document.getElementById("generatedContent").value = "Hello World - generateButtonHandler";
	loremIpsum();
}

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

/*
Lorem ipsum  sit amet consectetur adipiscing elit Fusce viverra dolor  nec vulputate  vehicula in Vestibulum pretium libero at lacinia laoreet interdum sem a pharetra tortor arcu maximus nisl Donec justo sem lobortis non porttitor vel dignissim a velit Curabitur accumsan augue dictum tellus rhoncus vitae    Quisque egestas malesuada ante  sagittis nunc tristique Praesent quis ligula

*/