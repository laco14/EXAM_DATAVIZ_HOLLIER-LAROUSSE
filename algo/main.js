function twoSum(array, target){
    const numMap=new Map();

    for (let i=0; i<array.length; i++){
        const complement=target-array[i];
        if (numMap.has(complement)){
            return [numMap.get(complement), i];
        }
        numMap.set(array[i], i);
    }
    return [];
}

//Pour test avec node avec un autre fichier :
//module.exports = twoSum;
