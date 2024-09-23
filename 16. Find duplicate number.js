function findDuplicates(num){

    let register = {};
    let empArr = [];

    for (let i = 0; i < num.length; i++) {
        if(!register[num[i]])
        {
            register[num[i]] = true;

        }
        else{
            empArr.push(num[i]);
        }
    }
    console.log(empArr);
    
}
const num = [ 1, 2, 3, 5, 5, 6, 3, 2, 1];
console.log(findDuplicates(num));

