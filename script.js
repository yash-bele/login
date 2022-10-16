const eye_hidden = document.getElementById("eye-hidden");
const eye_show = document.getElementById("eye-show");
const pass_input = document.getElementById("pass-input");

eye_show.addEventListener("click", () => {
  eye_show.style.display = "none";
  eye_hidden.style.display = "block";
  pass_input.type = "text";
});

eye_hidden.addEventListener("click", () => {
  eye_hidden.style.display = "none";
  eye_show.style.display = "block";
  pass_input.type = "password";
});
