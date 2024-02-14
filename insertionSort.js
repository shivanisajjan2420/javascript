function insertionSort(arr){
    for(i=1; i< arr.length; i++){
    let numberToInsert = arr[i]
    let j = i-1 // j refers to index of sorted elements
    // sorted eleemts cn be more than one we need logic to iterate over the sorted part of the array
    while( j>=0 && arr[j]>numberToInsert){  // j>=0 to enssure we iterate each and every element in the array 
     arr[j+1] = arr[j]
     j = j-1
    }
    arr[j+1] = numberToInsert
    }

}
const arr = [8, 20, -2, 4, -6]
insertionSort(arr)
console.log(arr)