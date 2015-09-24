var opponentScore = 0;
var opponentValue;
var playerScore = 0;
var playerValue;
var pot = 2;

var _AH = 
    {
	rank: "ace",
	suit: "hearts",
    value: 1,
    face: "images/classic-cards/AH.png"
    };
var _AD = 
    {
    rank: "ace",
	suit: "diamonds",
    value: 1,
    face: "images/classic-cards/AD.png"
    };
var _AS = 
    {
    rank: "ace",
	suit: "spades",
    value: 1,
    face: "images/classic-cards/AS.png"
    };
var _AC = 
    {
    rank: "ace",
	suit: "clubs",
    value: 1,
    face: "images/classic-cards/AC.png"
    };
var _KH = 
    {
    rank: "king",
	suit: "hearts",
    value: 13,
    face: "images/classic-cards/KH.png"
    };
var _KD = 
    {
    rake: "king",
	suit: "diamonds",
    value: 13,
    face: "images/classic-cards/KD.png"
    };
var _KS = 
    {
    rank: "king",
	suit: "spades",
    value: 13,
    face: "images/classic-cards/KS.png"
    };
var _KC = 
    {
    rank: "king",
	suit: "clubs",
    value: 13,
    face: "images/classic-cards/KC.png"
    };
var _QH = 
    {
    rank: "queen",
	suit: "hearts",
    value: 12,
    face: "images/classic-cards/QH.png"
    };
var _QD = 
    {
    rank: "queen",
	suit: "diamonds",
    value: 12,
    face: "images/classic-cards/QD.png"
    };
var _QS = 
    {
    rank: "queen",
	suit: "spades",
    value: 12,
    face: "images/classic-cards/QS.png"
    };
var _QC = 
    {
    rank: "queen",
	suit: "clubs",
    value: 12,
    face: "images/classic-cards/QC.png"
    };
var _JH = 
    {
    rank: "jack",
	suit: "hearts",
    value: 11,
    face: "images/classic-cards/JH.png"
    };
var _JD = 
    {
    rank: "jack",
	suit: "diamonds",
    value: 11,
    face: "images/classic-cards/JD.png"
    };
var _JS = 
    {
    rank: "jack",
	suit: "spades",
    value: 11,
    face: "images/classic-cards/JS.png"
    };
var _JC = 
    {
    rank: "jack",
	suit: "clubs",
    value: 11,
    face: "images/classic-cards/JC.png"
    };
var _10H = 
    {
    rank: "ten",
	suit: "hearts",
    value: 10,
    face: "images/classic-cards/10H.png"
    };
var _10D = 
    {
    rank: "ten",
	suit: "diamonds",
    value: 10,
    face: "images/classic-cards/10D.png"
    };
var _10S = 
    {
    rank: "ten",
	suit: "spades",
    value: 10,
    face: "images/classic-cards/10S.png"
    };
var _10C = 
    {
    rank: "ten",
	suit: "clubs",
    value: 10,
    face: "images/classic-cards/10C.png"
    };
var _9H = 
    {
    rank: "nine",
	suit: "hearts",
    value: 9,
    face: "images/classic-cards/9H.png"
    };
var _9D = 
    {
    rank: "nine",
	suit: "diamonds",
    value: 9,
    face: "images/classic-cards/9D.png"
    };
var _9S = 
    {
    rank: "nine",
	suit: "spades",
    value: 9,
    face: "images/classic-cards/9S.png"
    };
var _9C = 
    {
    rank: "nine",
	suit: "clubs",
    value: 9,
    face: "images/classic-cards/9C.png"
    };
var _8H = 
    {
    rank: "eight",
	suit: "hearts",
    value: 8,
    face: "images/classic-cards/8H.png"
    };
var _8D = 
    {
    rank: "eight",
	suit: "diamonds",
    value: 8,
    face: "images/classic-cards/8D.png"
    };
var _8S = 
    {
    rank: "eight",
	suit: "spades",
    value: 8,
    face: "images/classic-cards/8S.png"
    };
var _8C = 
    {
    rank: "eight",
	suit: "clubs",
    value: 8,
    face: "images/classic-cards/8C.png"
    };
var _7H = 
    {
    rank: "seven",
	suit: "hearts",
    value: 7,
    face: "images/classic-cards/7H.png"
    };
var _7D = 
    {
    rank: "seven",
	suit: "diamonds",
    value: 7,
    face: "images/classic-cards/7D.png"
    };
var _7S = 
    {
    rank: "seven",
	suit: "spades",
    value: 7,
    face: "images/classic-cards/7S.png"
    };
var _7C = 
    {
    rank: "seven",
	suit: "clubs",
    value: 7,
    face: "images/classic-cards/7C.png"
    };
var _6H = 
    {
    rank: "six",
	suit: "hearts",
    value: 6,
    face: "images/classic-cards/6H.png"
    };
var _6D = 
    {
    rank: "six",
	suit: "diamonds",
    value: 6,
    face: "images/classic-cards/6D.png"
    };
var _6S = 
    {
    rank: "six",
	suit: "spades",
    value: 6,
    face: "images/classic-cards/6S.png"
    };
var _6C = 
    {
    rank: "six",
	suit: "clubs",
    value: 6,
    face: "images/classic-cards/6C.png"
    };
var _5H = 
    {
    rank: "five",
	suit: "hearts",
    value: 5,
    face: "images/classic-cards/5H.png"
    };
var _5D = 
    {
    rank: "five",
	suit: "diamonds",
    value: 5,
    face: "images/classic-cards/5D.png"
    };
var _5S = 
    {
    rank: "five",
	suit: "spades",
    value: 5,
    face: "images/classic-cards/5S.png"
    };
var _5C = 
    {
    rank: "five",
	suit: "clubs",
    value: 5,
    face: "images/classic-cards/5C.png"
    };
var _4H = 
    {
    rank: "four",
	suit: "hearts",
    value: 4,
    face: "images/classic-cards/4H.png"
    };
var _4D = 
    {
    rank: "four",
	suit: "diamonds",
    value: 4,
    face: "images/classic-cards/4D.png"
    };
var _4S = 
    {
    rank: "four",
	suit: "spades",
    value: 4,
    face: "images/classic-cards/4S.png"
    };
var _4C = 
    {
    rank: "four",
	suit: "clubs",
    value: 4,
    face: "images/classic-cards/4C.png"
    };
var _3H = 
    {
    rank: "three",
	suit: "hearts",
    value: 3,
    face: "images/classic-cards/3H.png"
    };
var _3D = 
    {
    rank: "three",
	suit: "diamonds",
    value: 3,
    face: "images/classic-cards/3D.png"
    };
var _3S = 
    {
    rank: "three",
	suit: "spades",
    value: 3,
    face: "images/classic-cards/3S.png"
    };
var _3C = 
    {
    rank: "three",
	suit: "clubs",
    value: 3,
    face: "images/classic-cards/3C.png"
    };
var _2H = 
    {
    rank: "two",
	suit: "hearts",
    value: 2,
    face: "images/classic-cards/2H.png"
    };
var _2D = 
    {
    rank: "two",
	suit: "diamonds",
    value: 2,
    face: "images/classic-cards/2D.png"
    };
var _2S = 
    {
    rank: "two",
	suit: "spades",
    value: 2,
    face: "images/classic-cards/2S.png"
    };
var _2C = 
    {
    rank: "two",
	suit: "clubs",
    value: 2,
    face: "images/classic-cards/2C.png"
    };

var deck = [_AH, _AD, _AS, _AC, _KH, _KD, _KS, _KC, _QH, _QD, _QS, _QC, _JH, _JD, _JS, _JC, 
            _10H, _10D, _10S, _10C, _9H, _9D, _9S, _9C, _8H, _8D, _8S, _8C, _7H, _7D, _7S, _7C,
            _6H, _6D, _6S, _6C, _5H, _5D, _5S, _5C, _4H, _4D, _4S, _4C, _3H, _3D, _3S, _3C,
            _2H, _2D, _2S, _2C];

function shuffle(array) 
	{


  	var currentIndex = array.length, temporaryValue, randomIndex ;

  		// While there remain elements to shuffle...
  	while (0 !== currentIndex) 
		{
    		// Pick a remaining element...
    	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;
    		// And swap it with the current element.
    	temporaryValue = array[currentIndex];
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
  		}
  	return array;
	};


function play()
	{
    $("#opponentCard").css( "visibility", "visible" );
    $("#playerCard").css( "visibility", "visible" );
	deal()
	score();
	cardsRemaining()
	}

function deal()
	{
	var opponentCard = deck[0].face;
	$("#opponentCard").attr("src", opponentCard);
	opponentValue = deck[0].value;
	deck.splice(0, 1);  
	var playerCard = deck[0].face;
	$("#playerCard").attr("src", playerCard);
	playerValue = deck[0].value;
	deck.splice(0, 1); 
	};

function score()
	{
	if(opponentValue > playerValue)
		opponentScore += pot;
	else if(playerValue > opponentValue)
		playerScore += pot;
	else
        {
        pot += 2;
        play();
        pot = 2;
        }
        document.getElementById("opponentScore").innerHTML = "Your opponent has " + opponentScore + " cards.";
		document.getElementById("playerScore").innerHTML = "You have " + playerScore + " cards.";
	}

function cardsRemaining()
	{
	if(deck.length > 0)
		document.getElementById("cardsLeft").innerHTML = "There are " + deck.length + " cards left.";
	else
		{
        $(".deck").css( "visibility", "hidden" );
		document.getElementById("cardsLeft").innerHTML = "Game Over!";
		if(opponentScore > playerScore)
				document.getElementById("winner").innerHTML = "Your opponent wins!";
		else if(playerScore > opponentScore)
				document.getElementById("winner").innerHTML = "You win!";
		else
				document.getElementById("winner").innerHTML = "It's a tie!";
		}
	}
