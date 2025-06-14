// Adding styles to an element without replacing the existing styles

const h1 = document.querySelector('h1');
console.log(h1.getAttribute("style"));

//if I use '.setAttribute()' it will overwrite the existing styles instead we use,

console.log(h1.style); // This gives access to the 'CSSStyleDeclaration' object which includes all the styles already applied, and could be applied to an element

//As this is an object we could set value as we would with an object.
h1.style.textDecoration = "underline"; 
h1.style["textDecoration"] = "underline";  // this works too
// NOTE: There are some CSS properties which are 2 words connected with '-' like 'text-decoration' as Js confuses 'text-decoration' for substraction of the two words(Js assuming they are variables) we use the camel case without '-' as such, 'text-decoration' => 'textDecoration'

h1.style.backgroundColor = "slategrey";

//to remove a style
h1.style.backgroundColor = "";

// console.log(h1.className); //Doesn't work