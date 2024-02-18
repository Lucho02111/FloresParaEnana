// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "El tiempo pasa muy rapido", time: 15 },
  { text: "Pero a cuando estoy a tu lado se siente lento", time: 18 },
  { text: "Disfruto cada momento ", time: 27 },
  { text: "Cada instante ", time: 32 },
  { text: "Tenerte conmigo es lo más importante", time: 33 },
  { text: "Cambias mi vida a cada segundo ", time: 41 },
  { text: "Te conviertes en mi todo", time: 47 },
  { text: "Te conviertes en mi mundo ", time: 54 },
  { text: "En mis pensamientos en mis sentimientos", time: 59 },
  { text: "Eres el complemento que más necesitaba", time: 67 },
  { text: "Que Dios me bendiga de está manera", time: 72 },
  { text: "Bendecirme con una enana tan hermosa", time: 78 },
  { text: "Y que aparte me quiera", time: 83 },
  { text: "Quisiera que la vida entera", time: 91 },
  { text: "La pases conmigo ", time: 97 },
  { text: "Disfrutar lo prohibido ", time: 104 },
  { text: "Vivir lo no vivido", time: 108 },
  { text: "Pero todo a tu lado ", time: 144 },
  { text: "lleno de risas y sonrisas", time: 148 },
  { text: "De aventuras", time: 153 },
  { text: "Y que este amor", time: 158 },
  { text: "Sea esencia pura", time: 164 },
  { text: "Te quiero con locura ", time: 169 },
  { text: "Eso mi cora de poshito te lo asegura ", time: 176 },
  { text: "I Love you enane ❤!", time: 183 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 21600);
