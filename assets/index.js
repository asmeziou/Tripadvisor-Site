const bouton = document.getElementById("buttonAfficheForm");
const formulaire = document.getElementById("frm-popup");
const closeBtn = document.getElementById("closePopup");

bouton.addEventListener("click", () => {
  formulaire.style.display = "block";
});

// Fermer popup
closeBtn.addEventListener("click", () => {
  formulaire.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };

      console.log(data);

      const response = await axios.post("http://localhost:3000/form", data);
      console.log(response);
    });
});
