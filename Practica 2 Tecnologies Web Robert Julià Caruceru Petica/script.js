// Validem que el correu tingui usuari, @, domini i extensió.
function esCorreuValid(correu) {
  const patroCorreu = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patroCorreu.test(correu);
}

// Modal de benvinguda: només es mostra el primer cop que l'usuari entra a la web.
const modal = document.getElementById("welcome-modal");
const closeModal = document.getElementById("close-modal");

if (modal && !localStorage.getItem("novaFestBenvinguda")) {
  modal.classList.add("show");
  localStorage.setItem("novaFestBenvinguda", "mostrada");
}

if (closeModal) {
  closeModal.addEventListener("click", function () {
    modal.classList.remove("show");
  });
}

if (modal) {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
}

// Validació del formulari de contacte.
const contactForm = document.getElementById("contact-form");
const contactEmail = document.getElementById("email");
const contactEmailError = document.getElementById("contact-email-error");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    contactEmailError.textContent = "";

    if (!esCorreuValid(contactEmail.value)) {
      event.preventDefault();
      contactEmailError.textContent = "Introdueix un correu vàlid amb format usuari@domini.ext";
    }
  });
}

// Validació del formulari de registre: correu i contrasenyes iguals.
const registerForm = document.getElementById("register-form");
const registerEmail = document.getElementById("reg-email");
const registerEmailError = document.getElementById("register-email-error");
const password = document.getElementById("reg-pass");
const password2 = document.getElementById("reg-pass2");
const passwordError = document.getElementById("password-error");

if (registerForm) {
  registerForm.addEventListener("submit", function (event) {
    let formulariCorrecte = true;
    registerEmailError.textContent = "";
    passwordError.textContent = "";

    if (!esCorreuValid(registerEmail.value)) {
      formulariCorrecte = false;
      registerEmailError.textContent = "Introdueix un correu vàlid amb format usuari@domini.ext";
    }

    if (password.value !== password2.value) {
      formulariCorrecte = false;
      passwordError.textContent = "Les contrasenyes no coincideixen.";
    }

    if (!formulariCorrecte) {
      event.preventDefault();
    }
  });
}

// Lightbox de la galeria: amplia la imatge quan es fa clic.
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
    lightbox.classList.add("show");
  });
});

if (closeLightbox) {
  closeLightbox.addEventListener("click", function () {
    lightbox.classList.remove("show");
  });
}

if (lightbox) {
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.classList.remove("show");
    }
  });
}
