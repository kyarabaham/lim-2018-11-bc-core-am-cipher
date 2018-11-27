window.cipher = {
 encode: function (offset , string){
 	 let textCifrado ="";
 	 for (let i = 0; i < string.length ; i ++){
 		let codigoAc = string.toUpperCase().charCodeAt(i);
 		if (codigoAc === 32){
 			textCifrado += " ";
 		} else {
 		let letra = (codigoAc - 65 + parseInt(offset));
 		let residuo = (letra % 26) + 65;
 		let resultadoC = String.fromCharCode(residuo);
 		textCifrado += resultadoC
 		}
 	}
 	return textCifrado;
 }, 

 decode: function (offset , string){
 	let textCifrado ="";
 	for (let i = 0; i < string.length ; i ++){	
 		let codigoAc = string.toUpperCase().charCodeAt(i);
 		if (codigoAc === 32){
 			textCifrado += " ";
 		} else {
 			let letra = (codigoAc - 65 - parseInt(offset));
 			let residuo = (letra % 26) + 65;
 			if (residuo < 65) {
 			residuo += 26; 
 			}
 			let resultadoC = String.fromCharCode(residuo);
 			textCifrado += resultadoC;
 		}
 	}
 		return textCifrado;
 }

};



