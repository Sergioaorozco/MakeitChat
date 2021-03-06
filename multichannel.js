const $form = $("form");
const $input = $("#txtmessage");
const $chat = $(".chat");

$form.on("submit", (event) => {
  event.preventDefault();
  var value = $input.val();
  //console.log(value);

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

const channels = [
  {
    name: "Courses",
    messages: [
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
    ],
  },
  {
    name: "Css",
    messages: [
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
    ],
  },
];

let current = null;
const $container = $(".channels");
const $item = $(".list-item");
channels.forEach((element, index) => {
  const $li = document.createElement("li");

  $item.click(() => {
    current = index;
    console.log("click" + index, element);
  });
  $li.html(element);
  $container.append($li);
});

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
