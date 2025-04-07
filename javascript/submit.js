// loads in about section on scroll
function aboutFadeIn(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && document.body.scrollWidth > 1300) {
      // console.log('yo');
      // fade in bio
      document.querySelector(".profile").classList.add("profile__fade-in");

      // fade in skills 1 at a time after bio has loaded
      const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      };

      //html
      sleep(1000).then(() => {
        document
          .querySelector(".skills__item--html")
          .classList.add("skills__item-fade-in");
      });

      //webpack
      sleep(1100).then(() => {
        document
          .querySelector(".skills__item--webpack")
          .classList.add("skills__item-fade-in");
      });

      //js
      sleep(1200).then(() => {
        document
          .querySelector(".skills__item--js")
          .classList.add("skills__item-fade-in");
      });

      //git
      sleep(1300).then(() => {
        document
          .querySelector(".skills__item--git")
          .classList.add("skills__item-fade-in");
      });

      //sass
      sleep(1400).then(() => {
        document
          .querySelector(".skills__item--sass")
          .classList.add("skills__item-fade-in");
      });

      //node
      sleep(1500).then(() => {
        document
          .querySelector(".skills__item--npm")
          .classList.add("skills__item-fade-in");
      });

      //py
      sleep(1600).then(() => {
        document
          .querySelector(".skills__item--python")
          .classList.add("skills__item-fade-in");
      });

      //react
      sleep(1700).then(() => {
        document
          .querySelector(".skills__item--react")
          .classList.add("skills__item-fade-in");
      });

      //r
      sleep(1800).then(() => {
        document
          .querySelector(".skills__item--r")
          .classList.add("skills__item-fade-in");
      });

      //css
      sleep(1900).then(() => {
        document
          .querySelector(".skills__item--css")
          .classList.add("skills__item-fade-in");
      });
    }
  });
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

let options2 = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

let observer = new IntersectionObserver(aboutFadeIn, options);

observer.observe(document.querySelector(".about__content"));

const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    btnSubmit(); // Chama a função de envio personalizada
  });

function btnSubmit() {
  const unameInput = document.querySelector(".contact__form-name");
  const emailInput = document.querySelector(".contact__form-email");
  const msgInput = document.querySelector(".contact__form-message");

  const uname = unameInput.value;
  const email = emailInput.value;
  const msg = msgInput.value;

  const unameError = document.querySelector(".form-error__name");
  const emailError = document.querySelector(".form-error__email");
  const msgError = document.querySelector(".form-error__msg");

  let validUname = false;
  let validEmail = false;
  let validMsg = false;

  // Validation logic
  if (!uname.trim()) {
    validUname = false;
    unameInput.classList.add("input-error");
    unameError.style.display = "block";
  } else {
    validUname = true;
    unameInput.classList.remove("input-error");
    unameError.style.display = "none";
  }

  if (!re.test(email.trim())) {
    validEmail = false;
    emailInput.classList.add("input-error");
    emailError.style.display = "block";
  } else {
    validEmail = true;
    emailInput.classList.remove("input-error");
    emailError.style.display = "none";
  }

  if (!msg.trim()) {
    validMsg = false;
    msgInput.classList.add("input-error");
    msgError.style.display = "block";
  } else {
    validMsg = true;
    msgInput.classList.remove("input-error");
    msgError.style.display = "none";
  }

  if (validUname && validEmail && validMsg) {
    // If all inputs are valid, send the form data to the endpoint
    sendData(uname, email, msg);
  }
}

function sendData(uname, email, msg) {
  // Create an object with the form data
  const formData = {
    name: uname,
    email: email,
    message: msg,
  };

  // Send the form data as a POST request using Fetch API
  fetch("https://store-nodejs-mongodb-api.onrender.com/form/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        // Check if response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json(); // If response is JSON, you can parse it here
        } else {
          return "Email sent successfully!";
        }
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => {
      console.log(data); // Log the response from the server
      if (data === "Email sent successfully!") {
        // Mostrar a mensagem de sucesso dentro da div form-error__name
        const successMessage = document.querySelector(".form-error__name");
        successMessage.textContent = "Email sent successfully!";
        successMessage.style.display = "block";

        // Limpar os campos dos inputs
        document.querySelector(".contact__form-name").value = "";
        document.querySelector(".contact__form-email").value = "";
        document.querySelector(".contact__form-message").value = "";
      }
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
      // Optionally, you can show an error message or perform other error handling here
    });
}
