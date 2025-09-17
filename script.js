const frases = [
 "Gracias por todo mi princesa👑",
 "Nunca olvides lo mucho que te amo❤️‍🩹",
 "Cada dia que pasa reafiermo mas mi amor hacia ti",
 "Lo siento por los fallos que tengo, trato de mejorar",
 "Tranquila mi amor todo estara bien",
 "Alguna vez te dije que eres muy bella?",
 "Eres muy muy bella :D",
 "No te vas a poder salvar de mi",
 "Adoro cada detalle que tienes conmigo mi amor",
 "Me encanta como nos complementamos tan bien",
 "Espero que esto nunca acabe",
 "Estoy muy orgulloso de ti mi princesa",
 "Adoro mucho a mi novia",
 "Quiero que esto nunca acabe",
 "Nunca me voy a ir de tu lado",
 "Si algun dia te sientes mas no dudes que estare para ti siempre",
 "Ya te amarre no tienes escapatoria :D",
 "Gracias por comprenderme y apoyarme en todo",
 "Te amo.",
 "Si llegaste hasta aqui andas emocionada si o que jsjs",
 "Es el mismo sentimiento que tengo cuando te veo",
 "Quiero verte cumplir todas tus metas",
 "Quiero que me veas cumplir mis metas",
 "Quiero tener una familia contigo",
 "Adoro que seas mi pequeña princesa mimada",
 "Una nota no te define corazon",
 "Me encanta ver como cada dia das lo mejor de ti",
 "Quiero que se cumplan todos nuestros sueños juntos",
 "Seremos muy felices",
 "Tranquila, fue una promesa, no volvera a pasar",
 "Respira y calmese muas",
 "Mua mua mua mua mua mua",
 "Nunca me cansare de verte",
 "Aqui un listado de lo que mas me gusta de ti: (sigue dando click)",
 "Tus ojos",
 "Tu sonrrisa",
 "Tu cuelpo muejeje",
 "tu personalidad",
 "Que podemos ser nosotros mismos sin ningun miedo <3",
 "Por ahora esto acaba aqui, pero tendras actualizaciones :3"
];

let indiceActual = 0;

const boton = document.getElementById('miBoton');
const popupContainer = document.getElementById('popupContainer');
const popupMensaje = document.getElementById('popupMensaje');

boton.addEventListener('click', () => {
 popupMensaje.textContent = frases[indiceActual];
 popupContainer.style.display = 'flex';
 indiceActual = (indiceActual + 1) % frases.length;
});

popupContainer.addEventListener('click', (evento) => {
 if (evento.target === popupContainer) {
  popupContainer.style.display = 'none';
 }
});