/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []

    const obj = {
        ")":"(",
        "}":"{",
        "]":"[",
    }

    for (let bracket of s) {
        if (bracket === "(" || bracket === "{" || bracket === "[") {
            console.log('first if', bracket)
            stack.push(bracket)
        } else if (stack[stack.length - 1] === obj[bracket]){
            console.log('second if', bracket)
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
};