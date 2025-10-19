let rol = "admin";

if (rol === "admin") {
  console.log("Acceso total");
} else if (rol === "user") {
  console.log("Acceso limitado");
} else if (rol === "guest") {
  console.log("Inicia sesión para continuar");
} else {
  console.log("Rol no válido");
}
