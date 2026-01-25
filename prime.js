

function prime(num,div=2){
    if(num<=1)
        return false;
    if(num===div)
        return true;
    if(num%div===0)
        return false;

    return prime(num,div+1);
}

console.log(prime(29));
console.log(prime(15));

