const efectoCifrar = document.getElementById('btn-txt');

const cifrar = () => {
  let string = document.getElementById('text-1').value;
  let offset = document.getElementById('despla').value;
  const fCifrar = cipher.encode(offset, string);
  document.getElementById('resultado').innerHTML = fCifrar;
}
efectoCifrar.addEventListener('click', cifrar);



const efectoDescifrar = document.getElementById('btn-txt2');

const decifrar = () => {
  let string = document.getElementById('text-1').value;

  let offset = document.getElementById('despla').value;
  const dCifrar = cipher.decode(offset, string);
  document.getElementById('resultado').innerHTML = dCifrar;

}
efectoDescifrar.addEventListener('click', decifrar);
