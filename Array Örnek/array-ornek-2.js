const nameArr = ["m", "e", "h", "m", "e", "t"];

function removeSameLetters() {
    const letters = [];
    for (let i = 0; i < nameArr.length; i++) {
        if (letters.indexOf(nameArr[i]) === -1) {
            letters.push(nameArr[i]);
        }
    }
    return letters;
}

const result = removeSameLetters();

document.getElementById("ornek-2").innerHTML = result;

console.log(result);

