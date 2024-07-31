// Q. find unique or intersection element in both array. 
//    n = [1,2,3,4,5,6,4,3,2,1]
//    m = [1,2,3,4,5,1]
//    result = [1,2,3,4,5];

function intersection(n,m) {
    let obj = {};
    let emptyArray = [];

    for (let i = 0; i < n.length; i++) {
        obj[n[i]] = 1;
    }
    
    for (let i = 0; i < m.length; i++) {
        if(obj[m[i]])
        {
            emptyArray.push(m[i]);
            delete obj[m[i]];
        }
    }

    console.log(emptyArray);
}

const n = [1,2,3,4,5,6,4,3,2,1];
const m = [1,2,3,4,4,5,1];
const result = intersection(n,m);
console.log(result);