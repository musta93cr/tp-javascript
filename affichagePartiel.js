 let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

for(let i =0;i<=array.length-1;i++){
    if (array[i]>3){
        console.log(array[i]);
    }
 }
 for(let i =0;i<=array.length-1;i++){    
    if(array[i]%2===0){
        console.log(array[i]);
    }
 }
 for(let i=0;i<=array.length-1;i++){
    if(i%2===0){
        console.log(array[i]);
    }
 }
 for(let i =0;i<=array.length-1;i++){
    if (array[i]%2!==0){
        console.log(array[i]);
    }
 }
 /*avec if(i%2===0 on va chercher si la position de lindex est pair
 avec array[i] on cherche si la valeur qui occupe l index est pair ou pas*/