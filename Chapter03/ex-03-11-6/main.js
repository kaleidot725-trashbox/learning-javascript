const sam3 = {
    name: 'Sam',
    classfication: {
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Felidae',
        family: 'Felidae',
        subfaimily: 'Felinae',
        genus: 'Felis',
        species: 'F. catus',
    },
};

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

console.log(sam3.classfication.family);
console.log(sam3["classfication"].family);
console.log(sam3.classfication["family"]);
console.log(sam3["classfication"]["family"]);

console.log(タマ.分類.科);
console.log(タマ["分類"].科);
console.log(タマ.分類["科"]);
console.log(タマ["分類"]["科"]);