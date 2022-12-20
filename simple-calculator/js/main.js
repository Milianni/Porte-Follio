const els={
    score: null,
    answer: null,
    choices: null
};

const words =[
    'JAVASCRIPT',// [0]
    'STYLSHEET',// [1]
    'LANGUAGE'// [2]
];
let choices = [];

let word="";

let wordMapping=[];
let choicesMapping=[];


const init= () => {
  //  console.log('>> #init');
  
    //attach elements
    els.score =document.querySelector('#score');
    els.answer =document.querySelector('#answer');
    els.choices =document.querySelector('#choices');

        //pick word
       word = pickWord();
   //  console.log('word', word);
        //  -creat word mapping
        wordMapping = getWordMapping(word);

            console.log('wordMapping', wordMapping);
     

        //generate choices
    choices = generateChoices();
        
  // console.log(choices);
        //  creat choices mapping (permet de manipuler mhtl a partir de js)
    choicesMapping = getChoicesMapping(choices);
   console.log(choicesMapping);
        //display word
    displayWord(wordMapping);
        //display choices
    displayChoices(choices);
        //display score (error)

        //listen to events
        //   -mousse EventSource
        //  - keyboard events

        //check letter
        // -if not in word:add score
        // -if in word:display letter 
        // - endGame
        //      -if score=== max loos game
        //      -if letter are visible : win game
};
const displayChoices=(choicesMapping) => {

};

        const displayWord = (wordMapping) =>{
        const wordHtml=wordMapping.map((letterMapping)=>{
        if (letter.isVisible === true){
    return `<li>${letterMapping.isVisible}</li>`;
        }else{
            return <li>_</li>;
        }
    });
    els.choices.querySelector('ul').innerHTML =wordHtml; ;
};







const generateChoices= ()=>{
    const choices=[];
    for(let index = 65; index <= 90; index ++) {
        choices.push(String.fromCharCode(index));
    }
    return choices;
};
const getChoicesMapping =( choices)=>{
    const choicesMapping=choices.map((letter) => {
        return {
            letter,
            isChosen:false 
        };
    })
    return choicesMapping;
};

const getWordMapping= (word) =>{
    const wordArr=word.split('');
    console.log("word" , word);
    console.log('wordArr',wordArr );
    const wordMapping = wordArr.map((letter) =>{
        return {
            letter,
            isVisible: false
        };
       
    });
    
    
 return wordMapping;
};

//generate choices
choices = generateChoices();


const pickWord =() => {
    const randomIndex = getRandomInt(0, words.length -1);

    return words[randomIndex];

};

window.addEventListener('load',()=>{
    init();
});
/*
 same as #1 
window.onload = init; (plus rapid)
 
same as #2
windiw.addEventListener('load, init'); (plus recent)

same as #3
window.onload= () => {
    init();
}
*/

  // Returns a random integer between min and max
  // Using Math.round() will give you a non-uniform distribution!
const getRandomInt= (min, max) =>{
    min= Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }