const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function even(list) {
    const result = [];
    for (n = 0; n < list.length; n++) {
        if ((list[n] % 2) === 0) {
            result.push(list[n]);
        }
    }
    return result;
}

const result = even(list)
console.log(result, list)