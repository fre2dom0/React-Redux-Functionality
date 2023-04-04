export const UpperCaseFn = (word) => {
    let newT
    for (let i = 0; i < word.length; i++) {
        if(i === 0){
        newT = word[0].toUpperCase()
        } else {
        newT += word[i].toLowerCase()
        }
    }
    return newT
}
