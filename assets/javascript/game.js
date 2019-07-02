
var wins = document.getElementById("win1");
var nog = document.getElementById("nogr");
var cw = document.getElementById("currentWord1");
var lag1 =document.getElementById("lag");
var stringMatch="";
var totalWins =0;
var numberOfGuesses = 12;
console.log(numberOfGuesses);
nog.textContent=numberOfGuesses;
var wordArray=["think","special","assume","thought"];
var computerGeneratedWord;
computerGeneratedWord=wordArray[Math.floor(Math.random()*wordArray.length)];
var letterGuessed= new Array();
var userInput;
//var emptyAr = new Array();
//var isFound= false;
//var count =0;
//cw.textContent= computerGeneratedWord;
console.log(computerGeneratedWord);
var lengthOfGeneratedWord=computerGeneratedWord.length;
var dashedArray= new Array(lengthOfGeneratedWord);
for(var k =0;k<dashedArray.length;k++)
{
  dashedArray[k]="_";
}
cw.textContent=dashedArray;

document.onkeyup=function(event)
{
  
  if(numberOfGuesses === 0)
  {
    alert("Game is over , click okay to get a new word");
    computerGeneratedWord=wordArray[Math.floor(Math.random()*wordArray.length)];
    dashedArray.length=computerGeneratedWord.length;
    for(var k =0;k<dashedArray.length;k++)
    {
      dashedArray[k]="_";
    }
    cw.textContent= dashedArray;
    letterGuessed=[];
    lag1.textContent=letterGuessed;
    numberOfGuesses=12;
    nog.textContent=numberOfGuesses;
    return;
  }
  
                
    userInput= event.key;
   console.log(userInput);
   
    for(var i =0;i<lengthOfGeneratedWord;i++)
    {
      for(var j=0;j<letterGuessed.length;j++)
                {            
                  if(userInput === letterGuessed[j])
                    {
                      return;
                    }
                }
             
            if(userInput===computerGeneratedWord.charAt(i))
            {
                console.log("Entered the if");
                dashedArray[i]=userInput;
                cw.textContent=dashedArray;
                stringMatch=stringMatch+dashedArray[i];
                if(stringMatch.length === computerGeneratedWord.length)
                {
                  numberOfGuesses--;
                  nog.textContent=numberOfGuesses;
                  letterGuessed.push(userInput);   
                  lag1.textContent=letterGuessed; 
                  console.log("You win");
                  totalWins++;
                  wins.textContent=totalWins;
                // alert("You've won!!, click okay to get a new word");
                  computerGeneratedWord=wordArray[Math.floor(Math.random()*wordArray.length)];
                  dashedArray.length=computerGeneratedWord.length;
                  for(var k =0;k<dashedArray.length;k++)
                  {
                    dashedArray[k]="_";
                  }
                  cw.textContent= dashedArray;
                  letterGuessed=[];
                  lag1.textContent=letterGuessed;
                  numberOfGuesses=12;
                  nog.textContent=numberOfGuesses;
                  stringMatch="";
                  return;

                }
                
            }                 
    } 
    
     numberOfGuesses--;
     nog.textContent=numberOfGuesses;
     letterGuessed.push(userInput);   
     lag1.textContent=letterGuessed; 
     
}

