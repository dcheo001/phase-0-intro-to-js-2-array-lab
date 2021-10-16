// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    const allCats = [...cats]
        allCats.push(name)
        return allCats;
}
function prependCat(name) {
    const allCats = [...cats]
    allCats.unshift(name)
    return allCats;
}
function removeLastCat(name) {
    const allCats = [...cats]
    allCats.pop(name)
    return allCats;
}
function removeFirstCat(name) {
    const allCats = [...cats]
    allCats.shift(name)
    return allCats;
}