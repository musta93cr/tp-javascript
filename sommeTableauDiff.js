let array1= [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2= [-1, 12, 17, 14, 5, -9, 0, 18];

let somme1 = 0;
let somme2 =0;

for (let i =0;i<=array1.length-1;i++){
    somme1 = somme1 + array1[i];
}
console.log(somme1);

for (let i =0;i<=array2.length-1;i++){
    somme2 = somme2 + array2[i];
}
console.log(somme2);

let somme3 = somme1+somme2;
console.log(somme3);

