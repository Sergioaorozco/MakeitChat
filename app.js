// 1. imprimir los mensajes desde un array.
// 2. Cuando se presione enviar y la caja de texto tenga algo, agregar el mensaje al array y al DOM

const $input = $('.txtmessage');
const $send = $('.Submit-btn');
const $chat = $('.chat');

const messages = [
  {
        {
    time: '19:23',
    content: value,
    author: {
      name: "Sergio Orozco",
      image: "images/contacto3.jpg",
    },
  },
  {
    time: '19:27',
    content: value,
    author: {
      name: "Andrés Ochoa",
      image: "images/contacto4.jpg",
    },
  },
  {
    time: '19:23',
    content: value,
    author: {
      name: "Carolina Buitrago",
      image: "images/contacto2.jpg",
    },
  },
}
];

// $(document).ready(function(){
//     $("form").submit(function(){
//         e.preventDefault();
//     });

//     $input.on("click", function() {
//      const value = $input.value;
//      if(value!==""){
//          const message = {
//              time: '19:23',
//              content: value,
//              author:{
//                  name:"Sergio Orozco",
//                  image:"images/contacto3.jpg",
//              }
//          }
// printMessage(message)
//      };
function printMessage(message) {
  const { author, time, content } = message;
  const template = `<li>
        <div class="cwrapper">
        <div>
        <img class="profilepic" src="${author.image}" alt="C7">
        </div>
        <div class="profilename">
        <h4>${author.name}</h4>
        <p class="profilehour">${time}</p>
        <p class="profilemessage">${content}</p>
        </div>
        </div>
        
        </li>`;


  chat.innerHTML = template;

}

messages.forEach(message){
  printMessage(message)
}

