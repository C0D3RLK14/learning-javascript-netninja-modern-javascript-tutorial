// Setting classes to elements to change styles
const para = document.querySelector('p');

console.log(para.classList); // NOTE: Returns a 'DOMTokenList' of class of an element

//adding a class
para.classList.add("success");
console.log(para.classList); // We can see now this element has another class 'success'

//removing a class
para.classList.remove('error');
console.log(para.classList);