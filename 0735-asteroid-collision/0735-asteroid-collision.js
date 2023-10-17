/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    // Create a stack and place the first asteroid in stack
    // create a variable to hold the current index
    // variable to track if we need to compare stack or arr
    
    // while loop - while the index is less than the length of the asteroids 
    // conditional to check pop variable and pull two asteroids from either stack or stack and arr
        // pull asteroid 1 from stack and asteroid 2 from arr, save to variables
    
    // conditional to check direction and size
        // same direction - both go in stack ==> pop variable set to arr, increment arr var
        // opposite direction - stack ast bigger, return to stack ==> pop varaible set to arr, increment arr var
        // opposite direction - arr ast bigger ==> pop variable set to stack
        // opposite direction same size, return nothing to stack ==> pop var set to arr , increment arr var
    
    
    // return the stack
    
    
    
    let stack = [asteroids[0]]
    let i = 1
    let pop = 'arr'
    
    while (i <= asteroids.length - 1) {
    
        let ast1
        let ast2
        
        if (pop === 'arr') {
            ast1 = stack.pop()
            ast2 = asteroids[i]
        } else {
            ast2 = stack.pop()
            ast1 = stack.pop()
        }
        
        /// might need conditional to check if ast1 has a val? break or if stack is empty increment i and move on?
        
        if (ast1 === undefined && i === asteroids.length - 1) {
            stack.push(ast2)
            return stack
        } else if (ast1 === undefined && i !== asteroids.length - 1) {
            ast1 = ast2
            i++
            ast2 = asteroids[i] 
        }
        
        
        
        
        
        if ((ast1 > 0 && ast2 > 0) || (ast1 < 0 && ast2 < 0) || (ast1 < 0 && ast2 > 0)) {
            stack.push(ast1)
            stack.push(ast2)
            pop = 'arr'
            i++
        } else if (Math.abs(ast1) === Math.abs(ast2)) {
            pop = 'arr'
            i++
        } else if (Math.abs(ast1) < Math.abs(ast2)) {
            stack.push(ast2)
            pop = 'stack'
        } else if (Math.abs(ast1) > Math.abs(ast2)) {
            stack.push(ast1)
            pop = 'arr'
            i++
        }
        
    }
    
    
    return stack
    

    
    
};