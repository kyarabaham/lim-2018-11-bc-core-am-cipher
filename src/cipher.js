window.cipher ={
 

};
	const efectoCifrar = document.getElementById('btn-txt');

 const cipherText = () =>{
 	let text1 = document.getElementById('text-1').value;
 	let offset = document.getElementById('despla').value;
 	console.log(typeof offset)
  	let textCifrado ="";

 	for (let i = 0; i < text1.length ; i ++){debugger
 		let codigoAc = text1.toUpperCase().charCodeAt(i);
 		if (codigoAc === 32){
 			textCifrado += " ";

 		}else{
 		let letra = (codigoAc - 65 + parseInt(offset));
 		let residuo = (letra % 26) + 65;
 		let resultadoC = String.fromCharCode(residuo);
 		textCifrado += resultadoC

 		}
 		

 		document.getElementById('resultado').innerHTML = textCifrado;
 	}

 }
 	efectoCifrar.addEventListener('click', cipherText); 



 	const efectoDescifrar = document.getElementById('btn-txt2');
 	
 	const cipherText1 = () =>{
 	let text1 = document.getElementById('text-1').value;
 	let offset = document.getElementById('despla').value;
 	console.log(typeof offset)
  	let textCifrado ="";
   
 	for (let i = 0; i < text1.length ; i ++){debugger
 		let codigoAc = text1.toUpperCase().charCodeAt(i);
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
 		

 		document.getElementById('resultado').innerHTML = textCifrado;
 	}

 }
 	efectoDescifrar.addEventListener('click', cipherText1); 



