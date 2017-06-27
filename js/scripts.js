$( function() {

var screenHeight = window.innerHeight;
var screenWidth  = window.innerWidth;


  var words = `young body old head wit bitter sweeting sharp sauce stewed prune humbly leave anything willingly part withal civility brain  cullionly Wart artless full-gorged puttock ruttish froward dizzy-eyed hedge-pig puny base-court miscreant one luxury ass utter foul speeches detract rump-fed ronyon spleeny rump-fed lewdster wert best set  lower part where  nose stands madman cold ear wax rough-hewn blind-worm impertinent ill-breeding gigvar venomed malmsey-nosed whey-face beat purpose I I thou thou thou was was shall shall`.split(' ');


  for (var i=0; i < words.length; i++){

    var randX = Math.floor(Math.random() * (screenWidth + 1));
    var randY = Math.floor(Math.random() * (screenHeight + 1));

    var currentWord=words[i];



    $(`body`).append(`
      <span class="draggable" style = "right:${randX}px; top: ${randY}px;">
      ${currentWord}
      </span>
      `)
    }






    $( ".draggable" ).draggable();

  } );

  //
  // $(function() {
  //
  //   var helperHeight = document.getElementById("helperverbs").innerHeight;
  //   var helperWidth = document.getElementById("helperverbs").innerWidth;
  //
  // var helpingVerbs = `are are is is was was were were be be being being been been have  have has has had had having having do does did doing done could should would can shall shall shall shall will will will may may may might might might must must must didn't didn't didn't don't don't don't doesn't a a a a a a a as as as as I I I I I thou thou thou the the the the am am am am am I I I I I I I you you you you you you`.split(' ');
  //
  //
  //
  //   for (var i=0; i <helpingVerbs.length; i++){
  //
  //   var randX =  Math.floor(Math.random() * (helperWidth + 1));
  //   var randY = Math.floor(Math.random() * (helperHeight + 1));
  //
  //     var smallWord=helpingVerbs[i];
  //
  //     $(`#helperverbs`).append(`
  //       <span class="draggable" style="right:${randX}px; top: ${randY}px;">
  //       ${smallWord}
  //       </span>
  //       `)
  //     }

    //
    //
    //
    //
    //
    //
    //   $( ".draggable" ).draggable();
    //
    // } );
