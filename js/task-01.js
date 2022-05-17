const categories = document.querySelectorAll('#categories .item')
const noOfCategories = categories.length

console.log('Number of categories:',noOfCategories)
console.log('')

categories.forEach(category => {
    const categoryName = category.querySelector('h2').innerText
    console.log('Category:',categoryName)
    const numberOfElements = category.querySelectorAll('li').length
    console.log('Elements:',numberOfElements)
    console.log('')
})

