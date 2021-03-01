const elemCategoryRef = document.querySelectorAll('.item');
console.log(`В списке ${elemCategoryRef.length} категории.`);


 elemCategoryRef.forEach(el => {
    console.log(`Категория ${el.querySelector('h2').textContent} `);
    console.log(`Количество элементов : ${el.querySelector('ul').children.length}`);
})  ;


