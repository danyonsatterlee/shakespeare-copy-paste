$( function() {

let screenHeight = document.getElementById("insults").innerHeight
let screenWidth  = document.getElementById("insults").innerWidth


  let words = `never knew  young body with  old head Thy wit very bitter sweeting it most sharp sauce There no more faith thee than stewed prune I will most humbly take my leave of you you cannot sir take from me anything that will more willingly part withal civility thou seem'st much brain Thou cullionly reeling-ripe vassal Thy bones marrowless thy blood ragged Wart artless full-gorged puttock ruttish fat-kidneyed horn-beast froward dizzy-eyed clotpole errant fool-born hedge-pig puny base-court miscreant one all luxury ass utter foul speeches and to detract rump-fed ronyon spleeny rump-fed lewdster wert best set thy lower part where thy nose stands madman cold ear wax empty  shallow cowardly hind you lie tedious fool churlish rough-hewn blind-worm Thou impertinent ill-breeding giglet Thou art some fool venomed malmsey-nosed whey-face loath to beat thee purpose`.split(' ');


  for (let i=0; i <words.length; i++){

  let randX = Math.floor(Math.random() * (screenWidth + 10));
  let randY = Math.floor(Math.random() * (screenHeight + 10));

    let currentWord=words[i];

    $(`#insults`).append(`
      <span class="draggable" style="left:${randX}px; top: ${randY}px;">
      ${currentWord}
      </span>
      `)
    }







    $( ".draggable" ).draggable();

  } );


  $( function() {

    let helperHeight = document.getElementById("helperverbs").innerHeight
    let helperWidth = document.getElementById("helperverbs").innerWidth

  let helpingVerbs = `are are is is was was were were be be being being been been have  have has has had had having having do does did doing done could should would can shall shall shall shall will will will may may may might might might must must must didn't didn't didn't don't don't don't doesn't a a a a a a a as as as as I I I I I thou thou thou the the the the am am am am am I I I I I I I you you you you you you`.split(' ');



    for (let i=0; i <helpingVerbs.length; i++){

    let randX =  Math.floor(Math.random() * (helperWidth + 1));
    let randY = Math.floor(Math.random() * (helperHeight + 1));

      let smallWord=helpingVerbs[i];

      $(`#helperverbs`).append(`
        <span class="draggable" style="left:${randX}px; top: ${randY}px;">
        ${smallWord}
        </span>
        `)
      }







      $( ".draggable" ).draggable();

    } );
