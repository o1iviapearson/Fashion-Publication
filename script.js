// Get the text input
const word = document.getElementById("word");
const titleInput = document.getElementById("title-input");

// Get the sliders
const icecreamSizeInput = document.getElementById("icecream-size");

const cherryXInput = document.getElementById("cherry-x");
const cherryYInput = document.getElementById("cherry-y");

const oreoXInput = document.getElementById("oreo-x");
const oreoYInput = document.getElementById("oreo-y");
const oreoSizeInput = document.getElementById("oreo-size");

const coneSizeInput = document.getElementById("cone-size");

// Get the images
const icecream = document.getElementById("icecream");
const cherry = document.getElementById("cherry");
const oreo = document.getElementById("oreo");
const cone = document.getElementById("cone");


// -----------------------------
// ICE CREAM NAME
// -----------------------------

function updateText() {
  word.textContent = titleInput.value || "ice cream dream";
}


// -----------------------------
// ICE CREAM SIZE
// -----------------------------

function updateIcecream() {
  const scale = Number(icecreamSizeInput.value);

  icecream.style.transform = `scale(${scale})`;
}


// -----------------------------
// CHERRY POSITION
// -----------------------------

function updateCherry() {
  const x = Number(cherryXInput.value);
  const y = Number(cherryYInput.value);

  cherry.style.transform = `translate(${x}px, ${y}px)`;
}


// -----------------------------
// OREO POSITION + SIZE
// -----------------------------

function updateOreo() {
  const x = Number(oreoXInput.value);
  const y = Number(oreoYInput.value);
  const scale = Number(oreoSizeInput.value);

  oreo.style.transform =
    `translate(${x}px, ${y}px) scale(${scale})`;
}


// -----------------------------
// CONE SIZE
// -----------------------------

function updateCone() {
  const scale = Number(coneSizeInput.value);

  cone.style.transform = `scale(${scale})`;
}


// -----------------------------
// EVENT LISTENERS
// -----------------------------

titleInput.addEventListener("input", updateText);

icecreamSizeInput.addEventListener("input", updateIcecream);

cherryXInput.addEventListener("input", updateCherry);
cherryYInput.addEventListener("input", updateCherry);

oreoXInput.addEventListener("input", updateOreo);
oreoYInput.addEventListener("input", updateOreo);
oreoSizeInput.addEventListener("input", updateOreo);

coneSizeInput.addEventListener("input", updateCone);


// -----------------------------
// INITIALIZE
// -----------------------------

updateText();
updateIcecream();
updateCherry();
updateOreo();
updateCone();