var userScore_span = document.getElementById('user-score');
var compScore_span = document.getElementById('comp-score');
var result_div = document.getElementById('result');
var rock_id = document.getElementById('r');
var scissor_id = document.getElementById('s');
var paper_id = document.getElementById('p');
var userScore = 0;
var computerScore = 0;
var gameArr = ['r', 's', 'p'];

var obj = {
    'r':'Rock',
    's':'Scissor',
    'p':'Paper'
}

function computer(){
    return gameArr[Math.floor(Math.random() * gameArr.length)];
}

function win(user, computer){

    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "User".fontsize(2).sub();
    const smallCompWord = "Computer".fontsize(2).sub();

     result_div.firstElementChild.innerHTML = `${obj[user]} ${smallUserWord} beats ${obj[computer]}${smallCompWord} You Win! `

}

function loose(user, computer){
    
    computerScore++;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "User".fontsize(2).sub();
    const smallCompWord = "Computer".fontsize(2).sub();

     result_div.firstElementChild.innerHTML = `${obj[user]} ${smallUserWord} loses to ${obj[computer]}${smallCompWord} You Loose! `

}

function draw(user, computer){

    const smallUserWord = "User".fontsize(2).sub();
    const smallCompWord = "Computer".fontsize(2).sub();

    result_div.firstElementChild.innerHTML = `${obj[user]} ${smallUserWord} ties with ${obj[computer]}${smallCompWord} Game Draw! `
     

}



function game(userChoice, computerChoice){

    switch(userChoice + computerChoice){
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, computerChoice);
            break;
            
        case 'rp':
        case 'ps':
        case 'sr':
            loose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice, computerChoice);
            break;
    }

}

rock_id.addEventListener('click', () => {
    game('r', computer());
});

scissor_id.addEventListener('click', () => {
    game('s',computer());
});

paper_id.addEventListener('click', () => {
    game('p',computer());
});

