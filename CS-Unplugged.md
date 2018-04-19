# CS Unplugged 
## Conditionals and Variables

Supplies: Cards, Ziploc bags, post-it, pens, white board, marker
Vocabulary: Variables, If,Else, Assignment, get, set, Operators, Logical Operators.


# Variables Activity

1. The ziploc bag will your variable container, use the post-it to name your placeholder (variable name)
1. Intialize your variable `var personLastCard = ''`, ziploc must be empty
1. Shuffle the cards `suffleCards()`
1. Pick one card
1. Assing your variable valur with your card, put the card inside your container `personLastCard = PICKED_CARD`

Accessing your friends variables 

1. Choose one friend and get the value of he/she/they variable `getCard(person)`
1. Assing a variable on the whiteboard with your friend card's value. `var friendName = gerCard(person)`


# Conditionals Activity

1. Assign each person a score variable and initilize with 0: `var personalScore = 0`
1. Shuffle the cards `suffleCards()`
1. Cycle over each person 
1. Pick one card and check the conditional `checkCard(card)`
1. If the card is RED then update your score variable with card value.
1. Else, if the card is BLACK, then subtract your score.

```
function checkCard(card){
  if(card.color === RED){
     personalScore = personalScore + card.value;
  } else {
     personalScore = personalScore - card.value;
  }
}
```

1. Do it three times


# Conditional and Logic Operators


1. Pick a friend
1. Check the randomNumber
1. Check the Score
```
function checkScores(randomNumer, personalScore, friendScore){
 if(personalScore > randomNumer && friendScore > randomNumer){
    YOU WIN
 }else{
    YOU LOSE 
 }
}
```



```
function checkScores(randomNumer, personalScore, friendScore){
 if(personalScore > randomNumer || friendScore > randomNumer){
    STANDUP
    if(friendScore > randomNumer){
     RISE YOUR HAND
    }
    if(personalScore > randomNumer){
     RISE YOUR HAND
    }
 }else{
    SITDOWN
 }
}
```

```
function checkScores(randomNumer, personalScore, friendScore){
 if(!(personalScore > randomNumer) || !(friendScore > randomNumer)){
    STANDUP
    if(friendScore > randomNumer){
     RISE YOUR HAND
    }
    if(personalScore > randomNumer){
     RISE YOUR HAND
    }
 }else{
    SITDOWN
 }
}
```

```
function checkScores(randomNumer, personalScore){
 if(!(personalScore > randomNumer)){
    STANDUP
 }else{
    SITDOWN
 }
}
```

```
//Kaylahni
if (personalScore < 10 && personalScore > 2 ){
  personalScore = personalScore + 3;
}else{
  personalScore = personalScore - 1;
}

//Devin
if (personalScore === friendScore){
  personalScore = personalScore * friendScore;
}else{
  personalScore = personalScore - friendScore;
}

//Liam
if (personalScore === 3){
  personalScore = personalScore + 100;
}else{
  personalScore = personalScore - 100;
}

//Christian
if(personalScore < 0){
  personalScore = personalScore * -1;
}else if(personalScore > 0){
  personalScore = personalScore * -2;
}else{
  personalScore = personalScore + 1;
}

//Elsa
if(personalScore % 2 === 0){
  personalScore = personalScore + 20;
}else{
  personalScore = personalScore - 20;
}

//Shanya
if(personalScore >= 0.4*groupScore){
  personalScore = personalScore - 7;
}else{
  personalScore = personalScore - 10;
}

```


References:

1. https://teachinglondoncomputing.org
1. https://code.org/curriculum/unplugged
