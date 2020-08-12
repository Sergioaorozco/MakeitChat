// 1. imprimir los mensajes desde un array.
// 2. Cuando se presione enviar y la caja de texto tenga algo, agregar el mensaje al array y al DOM

const $form = document.querySelector("form");
const $input = document.querySelector("#txtmessage");
const $send = document.querySelector(".Submit-btn");
const $chat = document.querySelector(".chat");

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = $input.value;

  if (value !== "") {
    const now = new Date();
    const message = {
      time: `${now.getHours()}:${now.getMinutes()}`,
      content: value,
      author: {
        name: "Sergio Orozco",
        image: "images/contacto3.jpg",
      },
    };
    printMessage(message);
    messages.push(message);

    $input.value = "";
  }
});

const messages = [
  {
    time: "16:25",
    content: "Hola,¿cómo están todo en orden?",
    author: {
      name: "Laura Buitrago",
      image: "images/contacto1.jpg",
    },
  },
  {
    time: "16:28",
    content: "Hola,¿cómo están todo en orden?",
    author: {
      name: "Laura Buitrago",
      image: "images/contacto2.jpg",
    },
  },
];

function printMessage(message) {
  const { author, time, content } = message;

  const template = `<li>
  <div class="cwrapper">
    <div>
      <img class="profilepic" src="${author.image}" alt="C7">
    </div>
    <div>
      <h4>${author.name}</h4>
      <p class="profilehour">${time}</p>
      <p class="profilemessage">${content}</p>
    </div>
</li>`;
  $chat.innerHTML += template;
}

messages.forEach((message) => {
  printMessage(message);
});
