let move = 10;
let playerScore = 0;
let computerScore = 0;

// buttons
let rock = document.getElementById('rock')
let scissor = document.getElementById('scissor')
let paper = document.getElementById('paper')
// score
let movesLeft = document.getElementById('movesLeft')
let computerCount = document.getElementById('cCount')
let playerCount = document.getElementById('pCount')
// 
let computerChoose = ['rock', 'scissor', 'paper']

window.onload = function() {
    function run(playerChoose) {
        move--
        movesLeft.innerText = move

        let result = Math.floor(Math.random() * 3)

        if(playerChoose == computerChoose[result]){
            console.log ('Draw!')
        }
        else if (playerChoose == 'rock') {
            if (computerChoose[result] == 'paper') {
                computerScore++
                computerCount.innerText = computerScore
                console.log ('Computer won!')
            } else {
                playerScore++
                playerCount.innerText = playerScore
                console.log('Player won!')
            } 
        }  else if (playerChoose == 'scissor') {
            if (computerChoose[result] == 'rock') {
                computerScore++
                computerCount.innerText = computerScore
                console.log('Computer won!')
            } else {
                playerScore++
                playerCount.innerText = playerScore
                console.log('Player won!')
            }
        }  else if (playerChoose == 'paper') {
            if (computerChoose[result] == 'scissor') {
                computerScore++
                computerCount.innerText = computerScore
                console.log('Computer won!')
            } else {
                playerScore++
                playerCount.innerText = playerScore
                console.log('Player won!')
            }
        }

        if (move == 0) {
            if (playerScore > computerScore) {
                console.log(`Player won with ${playerScore} score !`)
                move = 10
                playerScore = 0
                computerScore = 0
                movesLeft.innerText = move
                playerCount.innerText = playerScore
                computerCount.innerText = computerScore
            } else {
                console.log(`Computer won with ${computerScore} score !`)
                move = 10
                playerScore = 0
                computerScore = 0
                movesLeft.innerText = move
                playerCount.innerText = playerScore
                computerCount.innerText = computerScore
            }
        }

    }
    
    rock.onclick = function() {
        run('rock')
    }
    scissor.onclick = function() {
        run('scissor')
    }
    paper.onclick = function() {
        run('paper')
    }

}