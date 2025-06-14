// Getting and setting an attribute

const link = document.querySelector("a");
// console.log(link);

// Getting an attribute value
console.log(link.getAttribute('href'));

// Setting an attribute value
link.setAttribute("href", "https://www.thenetninja.co.uk"); // NOTE: The '.setAttribute()' requires 2 parameter respectively 'the attribute you want to set', 'the value you want to set to that attribute'.
link.innerText = "Link to the net ninja website";

const para1 = document.querySelector("p");
console.log(para1.getAttribute("class"));
para1.setAttribute("class", "success");
console.log(para1.getAttribute("class"));

// We can set a new attribute with the same method above as well
para1.setAttribute("style", "color : brown;");
