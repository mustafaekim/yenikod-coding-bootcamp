var arr = [1, 2, 3, 4, 5, 6];



function arrayFilter(arr, predicate){
    var result = [];
    for(var a = 0; a<arr.length; a++){
        if(predicate(arr[a])){
            result[result.length] = arr[a];
        }
    }
    return result;
}


console.log(arrayFilter(arr, function(i){
    return i%2 == 0
}))

console.log(arrayFilter(arr,function(i){
    return i<3;
}))

console.log(arrayFilter(arr, function(i){
    return i>4;
}))