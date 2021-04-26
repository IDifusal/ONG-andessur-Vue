<template>
  <div class="container">
    <form class="contact-form" @submit.prevent="sendEmail">
      <label>Tu nombre completo</label>
      <input
        type="text"
        v-model="name"
        name="name"
        placeholder="Tu nombre aquí"
      />
      <label>Tu email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="@tuemail.com"
      />
      <label>Número de contacto</label>
      <input type="number" name="number" placeholder="444 444 444" />
      <label>Mensaje</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Deja tu mensaje aquí"
      >
      </textarea>

      <input type="submit" value="Enviar" />
    </form>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  padding: 2rem;
}
@media (min-width: 600px) {
  .container {
    display: block;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    padding: 20px;
    width: 50%;
  }
}

label {
  float: left;
}

input[type="text"],
[type="email"],
[type="number"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #1fa185;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #ba9774;
}
</style>
<script>
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      number: ""
    };
  },
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          "service_5sskfkj",
          "template_slqa3me",
          e.target,
          "user_fIo5QAcIBLsCdkGCRzj9f"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
            Swal.fire({
              title: "Listo!",
              text: "Nos comunicaremos contigo a la brevedad",
              imageUrl: "https://unsplash.it/400/200",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "ONG Andres Sur"
            }).then(function() {
              window.location = "https://www.netlify.com/";
            });
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    }
  }
};
</script>
