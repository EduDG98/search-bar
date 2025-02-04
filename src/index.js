document.addEventListener("keyup", e => {
  if (e.target.matches("#buscador")) {
    document.querySelectorAll(".articulo").forEach(fruta => {
      if (fruta.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
        fruta.classList.remove("filtro");
      } else {
        fruta.classList.add("filtro");
      }
    });
  }
});
