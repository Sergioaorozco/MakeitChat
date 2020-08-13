const $form = $("form");
const $input = $("#txtmessage");
const $chat = $(".chat");

$form.on("submit", (event) => {
  event.preventDefault();
  var value = $input.val();
  console.log(value);

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

    $input.val("");
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
      name: "Carlos Andrés",
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
  $chat.append(template);
}

messages.forEach((message) => {
  printMessage(message);
});
