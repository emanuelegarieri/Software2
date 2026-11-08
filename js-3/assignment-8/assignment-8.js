const mylist = ["Johnny", "DeeDee", "Joey", "Marky"]

function concat(items) {
    let result = ""
    for (let x = 0; x < items.length; x++) {
    result = result + items[x];
    }
    return result
}

document.querySelector("#target").innerHTML = concat(mylist);