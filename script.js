document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userName = form.userName.value.trim();
    const userFirstName = form.userFirstName.value.trim();
    const userEmail = form.userEmail.value.trim();

    if (!userName || !userFirstName || !userEmail) {
      showMessage("Merci de remplir les champs obligatoires.", true);
      return;
    }else{
        setTimeout(() => {
          showMessage("Message envoyé avec succès !", false);
          form.reset();
        }, 500);

    }
  });

  function showMessage(message, isError = false) {
    messageBox.textContent = message;
    messageBox.style.backgroundColor = isError ? "#F8B4B4" : "#FFE5B4";
    messageBox.classList.remove("hidden");
  }
});

document.addEventListener("DOMContentLoaded", function () {
const today = new Date();
today.setHours(0, 0, 0, 0);

const events = document.querySelectorAll(".card-bis");

events.forEach(card => {
  const dateAttr = card.getAttribute("data-date");
  if (dateAttr) {
    const eventDate = new Date(dateAttr);
    if (eventDate < today) {
      card.style.display = "none";
    }
  }
});
});

function openForm(formId) {
document.getElementById(formId).style.display = "flex";
}

function closeForm(formId) {
document.getElementById(formId).style.display = "none";
}