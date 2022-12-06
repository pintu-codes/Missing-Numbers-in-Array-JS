function missingNumbers(arr, brr) {
    const map = {};

for(let i = 0; i < brr.length; i++){
    let key = brr[i];
    map[key] = (map[brr[i]] || 0) + 1;
}

for(let i = 0; i < arr.length; i++){
    let key = arr[i];
    map[key] -= 1;
}

let output = [];

for(const e in map){
    if(map[e] > 0){
        output.push(e);
    }
}


return output;
}
console.log(missingNumbers([7,2,3,5,3], [7,2,3,4,6,5,3,7,8]));
