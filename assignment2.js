function findLargestNumber(arr){
    if(arr.length === 0){
        return null; //Return null if the array is empty
    }
    let largest = arr[0]; //Assume the first element is the largest
    for (let i = 1; i<arr.length; i++){
        if (arr[i]> largest){
            largest = arr[i]; //Update largest if a larger number is found
        }
    }
    return largest;
}