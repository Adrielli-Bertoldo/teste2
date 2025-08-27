// Credenciais válidas
const validEmail = "fcb.teste@empresa.com";
const validPassword = "123456";

// Mostrar toast
function showToast(message, success = false) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: success ? "#22c55e" : "#ef4444",
    stopOnFocus: true,
  }).showToast();
}

// Função de login
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    showToast("Preencha todos os campos!");
    return;
  }

  if (email === validEmail && password === validPassword) {
    showToast("Login realizado com sucesso!", true);
  } else {
    showToast("E-mail ou senha inválidos.");
  }
}

// Alternar Dark Mode com animação suave
function toggleTheme() {
  const body = document.body;
  const buttonIcon = document.querySelector(".theme-toggle i");

  body.classList.add("transition");
  setTimeout(() => body.classList.remove("transition"), 500);

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    buttonIcon.classList.remove("fa-moon");
    buttonIcon.classList.add("fa-sun");
  } else {
    buttonIcon.classList.remove("fa-sun");
    buttonIcon.classList.add("fa-moon");
  }
}
