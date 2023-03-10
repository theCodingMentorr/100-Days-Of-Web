const btn = document.getElementById("btn");
const div = document.getElementById("div");
btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 10000000).toString(16);
  const hex = "#" + random;
  const body = document.body;
  body.style.backgroundColor = hex;
  div.innerHTML = hex;
});
