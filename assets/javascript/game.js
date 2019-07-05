
var game ={

  wordArray: ["think","special","assume","thought","ash","brazen","rural","excite","happy","hammer"],
  wins : document.getElementById("win1"),
  nog :document.getElementById("nogr"),
  lgc : document.getElementById("lgc1"),
   cw : document.getElementById("currentWord1"),
   lag1 :document.getElementById("lag"),
   aud:document.getElementById("myAudio"),
   aud1:document.getElementById("myAudio1"),
   aud2:document.getElementById("myAudio2"),
   totalWins :0,
   numberOfGuesses: 12,
    computerGeneratedWord:"",
    letterGuessed:[], 
    userInput :"",
    str:"",
    lengthOfGeneratedWord:0,
    dashedArray:[],
  init :function initiailize()
    {
      console.log(game.wordArray.length);
        game.computerGeneratedWord=game.wordArray[Math.floor(Math.random()*game.wordArray.length)];
        game.letterGuessed= [];
        game.str="" ;
        console.log(game.computerGeneratedWord);
        game.lengthOfGeneratedWord=game.computerGeneratedWord.length;
        game.dashedArray= new Array(game.lengthOfGeneratedWord);
        for(var k =0;k<game.dashedArray.length;k++)
        {
            game.dashedArray[k]="_";
        }
        game.cw.textContent=game.dashedArray;
        game.lag1.textContent=game.letterGuessed;
        game.numberOfGuesses=12;
        game.nog.textContent=game.numberOfGuesses;
    } ,
    keyUp: function keyUpFunc()
    {
      document.onkeyup=function(event)
      {
        game.aud1.play();
        if(game.numberOfGuesses === 0)
        {
          game.aud2.play();
          alert("Game is over , click okay to get a new word");
          game.init();
          return;
        }
        game.userInput= event.key;
        console.log(game.userInput);
        for(var i =0;i<game.lengthOfGeneratedWord;i++)
          {
            for(var j=0;j<game.letterGuessed.length;j++)
            {            
              if(game.userInput === game.letterGuessed[j])
                {
                  return;
                }
          }
      
        if(game.userInput===game.computerGeneratedWord.charAt(i))
          {
                game.str=game.str+game.userInput;
                console.log(game.str);
                if(game.str.length===game.computerGeneratedWord.length)
                {
                  game.totalWins++;
                  game.wins.textContent=game.totalWins;
                  game.aud.play();
                  alert("You won");
                  game.init();
                  return;
                }
                console.log("Entered the if");
                game.dashedArray[i]=game.userInput;
                console.log(game.dashedArray[i]);
                game.cw.textContent=game.dashedArray;
            }                 
          } 
      
           game.numberOfGuesses--;
           game.nog.textContent=game.numberOfGuesses;
           game.letterGuessed.push(game.userInput);   
           game.lag1.textContent=game.letterGuessed;  
      }
    }
  };
game.init();
game.keyUp();
