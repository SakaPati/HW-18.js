// 1
// const categ = document.querySelectorAll("#categories")

// categ.forEach((category) => {
//     const title = category.querySelector(".title").textContent;
//     const liItem = category.querySelectorAll(".item").length;
//     console.log(`Категорія: ${title} \nКількість елементів: ${liItem}`);
// });

// 2
// const ingredients = [
//     'Картопля',
//     'Гриби',
//     'Часник',
//     'Помідори',
//     'Зелень',
//     'Приправи',
// ];

// const ingredient = document.querySelector("#ingredients")

// const ingredientElements = ingredients.map(city => {
//     const liEl = document.createElement("li")
//     liEl.textContent = city
//     return liEl
// })

// ingredient.append(...ingredientElements)
// document.body.append(ingredient)

// 3 НЕ СДЕЛАНО
// const images = [
//     {
//      url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'White and Black Long Fur Cat',
//     },
//     {
//      url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//      url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'Group of Horses Running',
//     },
// ];
// const ingredient = document.querySelector("#gallery");

// 4
// const counterValue = document.querySelector("#value");
// let value = 0;

// document.querySelector('[data-action="decrement"]').addEventListener('click', () => {
//     value--;
//     counterValue.textContent = value;
// });

// document.querySelector('[data-action="increment"]').addEventListener('click', () => {
//     value++;
//     counterValue.textContent = value;
// });