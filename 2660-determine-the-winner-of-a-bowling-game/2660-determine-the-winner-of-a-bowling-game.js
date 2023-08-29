/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    
    let p1Score = 0
    let p2Score = 0
    
    let p1Bonus = 0
    let p2Bonus = 0
    
    for (let i = 0; i < player1.length; i++) {
  
        if (p1Bonus > 0) {
            p1Score += (player1[i] * 2)
            p1Bonus--
        } else {
            p1Score += player1[i]
        }
        if (player1[i] === 10) {
            p1Bonus = 2
        }
        
        
        
    
        
        if (p2Bonus > 0) {
            p2Score += (player2[i] * 2)
            p2Bonus--
        } else {
            p2Score += player2[i]
        }
        
        if (player2[i] === 10) {
            p2Bonus = 2
        } 
        
        
    }
    
    console.log('p1', p1Score)
    console.log('p2', p2Score)
    
    if (p1Score > p2Score) {
        return 1
    } else if (p1Score < p2Score) {
        return 2
    } else {
        return 0
    }
    
};