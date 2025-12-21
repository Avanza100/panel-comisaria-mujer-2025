document.getElementById("btnLogin").addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  if (usuario === "admin" && password === "admin123") {
    localStorage.setItem("auth", "true");
    window.location.href = "panel.html";
  } else {
    document.getElementById("error").innerText =
      "Usuario o contraseña incorrectos";
  }
});
