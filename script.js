
//pop() metodas - pasalina paskutini masyvo nari.
//shift() metodas  - pasalina pirma masyvo nari.
//push() metodas - prideda nauja nari (narius) i masyvo pabaiga.
//unshift() metodas- prideda nauja nari (narius) i masyvo pradzia.
//SLICE = nemodifikuoja orginalaus masyvo
//SPLICE - modifikuoja org masyva.

// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
 
// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.

let data = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 1.1. Pašalinti pirmą masyvo narį.
data.shift()

// 1.2. Pašalinti paskutinį masyvo narį.
data.pop()

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
data.splice(Math.floor(data.length / 2), 1)

// 1.4. Pašalinti priešpaskutinį masyvo narį.
data.splice(-2, 1)

// 1.5. Pašalinti antrą masyvo narį.
data.splice (1, 1)

// 1.6. Pašalinti 7 ir 8 masyvo narius.
data.splice(6, 2)

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
data.splice(-6, 3)

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
data.splice(2, 1, 888)

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
data.splice(9, 1, 33, 789, 6543)

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
data.splice(-1, 1, 321, 654, 987)

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
data.splice(1, 0, 11)

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
data.splice(13, 0, 1)

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
data.splice(-1, 0, -1)

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
data.unshift(1, 2, 3)

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
data.push(-333, -321, -312)

// 1.16. Į masyvo vidurį pridėti skaičių 0.
data.splice(13, 0, 0)

// 1.17. Pašalinti pirmą masyvo narį.
data.shift()

// 1.18. Pašalinti paskutinį masyvo narį.
data.pop()

// 1.19. Į masyvo pradžią pridėti žodį "start".
data.unshift('start')

// 1.20. Į masyvo pabaigą pridėti žodį "end".
data.push('end')

console.log(data)



// ANTRA DALIS ----------

// 2.1. Gauti pirmą masyvo narį.
let task1 = data.slice(0, 1)
console.log(task1)

// 2.2. Gauti paskutinį masyvo narį.
let task2 = data.slice(-1)
console.log(task2)

// 2.3. Gauti antrą masyvo narį.
let task3 = data.slice(1, 2)
console.log(task3)

// 2.4. Gauti priešpaskutinį masyvo narį.
let task4 = data.slice(-2, -1)
console.log(task4)

// 2.5. Gauti aštuntą masyvo narį.
let task5 = data.slice(7, 8)
console.log(task5)

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let task6 = data.slice(-9, -8)
console.log(task6)

// 2.7. Gauti vidurinį masyvo narį.
let middle = Math.floor(data.length / 2)
let task7 = data.slice(middle, middle + 1)
console.log(task7)

// 2.8. Gauti pirmus tris masyvo narius.
let task8 = data.slice(0, 3)
console.log(task8)

// 2.9. Gauti paskutinius tris masyvo narius.
let task9 = data.slice(-3)
console.log(task9)

// 2.10. Gauti pirmus 10 masyvo narius.
let task10 = data.slice(0, 10)
console.log(task10)

// 2.11. Gauti paskutinius 10 masyvo narius.
let task11 = data.slice(-10)
console.log(task11)

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let task12 = data.slice(2, 8)
console.log(task12)

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let task13 = data.slice(-9, -4)
console.log(task13)

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let task14 = data.slice(10, 19)
console.log(task14)

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let task15 = data.slice(-17, -8)
console.log(task15)

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let task16 = data.slice(1)
console.log(task16)

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let task17 = data.slice(0, -1)
console.log(task17)

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let task18 = data.slice(5)
console.log(task18)

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let task19 = data.slice(0, -5)
console.log(task19)

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let task20 = data.slice(0, Math.floor(data.length / 2))
console.log(task20)

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let task21 = data.slice(Math.ceil(data.length / 2))
console.log(task21)

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let task22 = data.slice(1, -1)
console.log(task22)

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let task23 = data.slice(5, -3)
console.log(task23)

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let task24 = data.slice(1, -8)
console.log(task24)

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let task25 = data.slice(7, -1)
console.log(task25)

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let task26 = data.slice(9, -12)
console.log(task26)

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let task27 = data.slice(10, 10 + 9)
console.log(task27)

// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let task28 = data.slice(7, 7 + 12)
console.log(task28)

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let task29FirstPart = data.slice(0, 5)
let task29SecondPart = data.slice(-6)
let task29Merged = task29FirstPart.concat(task29SecondPart)
console.log(task29Merged)

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let task30FirstPart = data.slice(3, 5)
let task30SecondPart = data.slice(15, 17)
let task30Merged = task30FirstPart.concat(task30SecondPart)
console.log(task30Merged)




