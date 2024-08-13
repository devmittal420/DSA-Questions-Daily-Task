function add(char) {
    let str = "";
    
    for (let i = 1; i < char.length; i= i + 2) {

        // console.log(parseInt(char[i]));
        let count = parseInt(char[i]);
        
        for (let j = 0; j < count; j++) {
            // console.log(char[i-1]);
            str = str + char[i-1];
            
        }
    }
    return str;
}

const char = "a1b3c4d1a2";
const output = add(char);
console.log(output);
