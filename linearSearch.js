function linearSearch(arr, target){
    for(i=0; i< arr.length; i++){
        if (arr[i] === target ){
            return i
        }
        
    }
    return -1
}
console.log(linearSearch([-5, 2, 10, 15],10))