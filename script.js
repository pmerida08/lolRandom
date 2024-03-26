document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  const campeonElegido = document.querySelector("p");
  const campeonImage = document.querySelector("img");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const select = document.querySelector("select");

    const rol = select.value;

    $.ajax({
      url: "champs.json",
      dataType: "json",
      success: function (response) {
        const campeones = response[rol];

        const random = Math.floor(Math.random() * campeones.length);

        const campeon = campeones[random];

        campeonElegido.textContent = campeon.nombre;
        campeonImage.src = campeon.imagen;
      },
    });
  });
});
