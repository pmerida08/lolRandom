document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  const campeonElegido = document.querySelector("p");
  const campeonImage = document.querySelector("img");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const select = document.querySelector("select");

    const roles = ["top", "jungle", "mid", "adc", "support"]
    const rol = select.value;

    switch (rol) {
      case "all":
        $.ajax({
          url: "champs.json",
          dataType: "json",
          success: function (response) {
            const roles = Object.keys(response);

            const randomRol = roles[Math.floor(Math.random() * roles.length)];
            const campeones = response[randomRol];
    
            const random = Math.floor(Math.random() * campeones.length);
            const campeon = campeones[random];
    
            campeonElegido.textContent = campeon.nombre;
            campeonImage.src = campeon.imagen;
          },
        });
        break;
      default:
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
        break;
    }
  });
});
