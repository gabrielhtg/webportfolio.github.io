let tombolSubmit = document.querySelector(".tombol-submit");
let inputEmail = document.querySelector("#input-email");
let inputNama = document.querySelector("#input-nama");
let inputMessage = document.querySelector("#message");
let alert = document.querySelector(".alert");

tombolSubmit.addEventListener("click", () => {
  chatMe(inputNama.value, inputEmail.value, inputMessage.value);
});

function chatMe(nama, email, message) {
  if (
    !(nama === "" || email === "" || message === "" || !email.includes("@"))
  ) {
    pesanBaru = message.replace(/ /g, "%20");

    pesan = `Halo%20nama%20saya%20${nama}%20dengan%20email%20${email}.%0A%0A${message}`;

    window.location.href = "https://wa.me/6285162656255?text=" + pesan;
  } else {
    alert.classList.toggle("hidden");
    alert.classList.toggle("d-flex");
    setTimeout(() => {
      alert.classList.toggle("hidden");
      alert.classList.toggle("d-flex");
    }, 2100);
  }
}
