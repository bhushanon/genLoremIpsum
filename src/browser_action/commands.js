document.getElementById("copyButton").addEventListener("click", copyButtonHandler);
document.getElementById("generateButton").addEventListener("click", generateButtonHandler);

function loremIpsum(){
	var localeSelectd =document.getElementById("localeSelect").value;
	var words = document.getElementById("words").value;
	var lines = document.getElementById("lines").value;
	
	var strlocale_enUS ="Lorem ipsum  sit amet consectetur adipiscing elit Fusce viverra dolor  nec vulputate  vehicula in Vestibulum pretium libero at lacinia laoreet interdum sem a pharetra tortor arcu maximus nisl Donec justo sem lobortis non porttitor vel dignissim a velit Curabitur accumsan augue dictum tellus rhoncus vitae Quisque egestas malesuada ante  sagittis nunc tristique Praesent quis ligula";
	
	var strlocale_esES ="Lorem ipsum  sit amet consectetur adipiscing elit Fusce viverra dolor  nec vulputate  vehicula in Vestibulum pretium libero at lacinia laoreet interdum sem a pharetra tortor arcu maximus nisl Donec justo sem lobortis non porttitor vel dignissim a velit Curabitur accumsan augue dictum tellus rhoncus vitae Quisque egestas malesuada ante  sagittis nunc tristique Praesent quis ligula";
	
	var strlocale_frCA ="Lorem ipsum  sit amet consectetur adipiscing elit Fusce viverra dolor  nec vulputate  vehicula in Vestibulum pretium libero at lacinia laoreet interdum sem a pharetra tortor arcu maximus nisl Donec justo sem lobortis non porttitor vel dignissim a velit Curabitur accumsan augue dictum tellus rhoncus vitae Quisque egestas malesuada ante  sagittis nunc tristique Praesent quis ligula";
		
	var locale_enUS = strlocale_enUS.split(" ");
	var locale_esES = strlocale_esES.split(" ");
	var locale_frCA = strlocale_frCA.split(" ");
	var generatedContent="Lorem Ipsum";
	for (i= 0; i < words;i++){
		generatedContent = generatedContent + " " + locale_enUS[randomBetween(0,locale_enUS.length -2 )]
		
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