// // selecting the first 'p' element
// const para1 = document.querySelector('p');
// // console.log(para1);

// // accessing the data inside the element
// console.log(para1.innerText);
// console.log(para1.innerHTML);

// // modifying the data inside the element
// // para1.innerText += "! I am Lakindu.";
// para1.innerHTML += "! I am Lakindu."; // BOTH WORK

// // replacing the data inside the element
// // para1.innerText = "Hello, ninjas!";
// para1.innerHTML = "Hello, ninjas!"; // BOTH WORK

// const paras = document.querySelectorAll("p");

// paras.forEach(para => {
//     console.log(para);
//     para.innerText += ". This is text from the forEach.";
// });

// adding HTML data to the document
const ninjas = ["Mario", "Luigi", "Chun-li"];
const content = document.querySelector(".content");

console.log(content);

// content.innerHTML = "<h2> This is added through innerHTML </h2>";
// content.innerText = "<h2> This is added through innerText </h2>"; // This adds only text into the element(somehow HTML tags are converted to text).

let contentHTML = `<ul>`;
ninjas.forEach(ninja => {
    contentHTML += `\n <li>${ninja}</li>`;
});
contentHTML += `\n</ul>`;

content.innerHTML = contentHTML;