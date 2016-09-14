$( function() {

let screenHeight = window.innerHeight
let screenWidth = window.innerWidth

  let words = `I never knew so young a body with so old a head Thy wit is a very bitter sweeting it is a most sharp sauce There no more faith in thee than in a stewed prune I will most humbly take my leave of you you cannot  sir  take from me anything that I will not more willingly part withal in civility thou seem'st so empty`.split(' ');


  for (let i=0; i <words.length; i++){

  let randX =  Math.floor(Math.random() * (screenWidth + 1));
  let randY = Math.floor(Math.random() * (screenHeight + 1));

    let currentWord=words[i];

    $(`.container`).append(`
      <span class="draggable" style="left:${randX}px; top: ${randY}px;">
      ${currentWord}
      </span>
      `)
    }



    $( ".draggable" ).draggable();

  } );
