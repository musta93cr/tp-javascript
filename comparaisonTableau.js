let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4] ;
 let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];
let compteur =0;
 for(let i =0;i<=array1.length-1;i++){
    for (let j=0;j<=array2.length-1;j++){
        if(array1[i]===array2[j]){
             compteur ++;
            
        }


    }
    

 }


 console.log(compteur);