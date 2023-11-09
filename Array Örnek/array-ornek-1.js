
const name = ['m', 'e', 'h', 'm', 'e', 't'];
const namefilter = name.filter((harf, index, self) => self.indexOf(harf) === index);

document.getElementById("ornek-1").innerHTML = namefilter;

console.log(namefilter)

