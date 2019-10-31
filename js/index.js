var playerArray = [
  {"playerNameOne": "Alabson", "playerNameTwo": "Usman", "playerOneUrl": "https://pbs.twimg.com/media/Dsdt6gOXcAAksLu.jpg", "playerTwoUrl": "https://pbs.twimg.com/media/Dsdt6gOXcAAksLu.jpg", "indexTwo": 2, "indexOne": 1}
];

//
function renderBoard() {
 //playerArray = playerArray.sort(function(a,b){return b.votes-a.votes})
 var template = $('#template').html();
 Mustache.parse(template);
 var rendered = Mustache.render(template, {playerArray});
 $('#playerBoard').html(rendered);
}

window.addEventListener('load', async () => {
 renderBoard();
});

$('.registerBtn').click(async function() {
  var nameOne = ($('.regNameOne').val()),
      nameTwo = ($('.regNameTwo').val()),
      urlOne = ($('.regUrlOne').val()),
      urlTwo = ($('.regUrlTwo').val());

  //playerArray.push({
    //playerNameOne: nameOne,
    //playerNameTwo: nameTwo,
    //playerOneUrl: urlOne,
    // playerTwoUrl: urlTwo,
    // indexOne: playerArray.length+1,
    // indexTwo: playerArray.length+1
  // })
  renderBoard();
});





//document.getElementById('ply1').innerHTML = "Alabson";




