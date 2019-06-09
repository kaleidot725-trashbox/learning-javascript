const sam1 = {
    name: "Sam",
    age: 4,
};
console.log(sam1);

const sam2 = {name: "Sam", age : 4};
console.log(sam2);

console.log(sam1.nanme===sam2.name)
console.log(sam1.age===sam2.age)
console.log(sam1===sam2)

const sam3 = {
    name: 'Sam',
    classfication: {
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Felidae',
        subfaimily: 'Felinae',
        genus: 'Felis',
        species: 'F. catus',
    },
};
console.log(sam3);

const タマ = {
    名前 : 'タマ',
    分類 : {
        界 : '動物界',
        門 : '脊索動物門',
        綱 : '哺乳綱',
        目 : 'ネコ目',
        科 : 'ネコ科',
        悪科 : 'ネコ悪科',
        属 : 'ネコ属',
        種 : 'ネコ',
    },
}
console.log(タマ);