/* Exercise for adding classes to style elements */
const paras = document.querySelectorAll("p");
console.log(paras);

paras.forEach(para => {
    // console.log(para);
    console.log(para.textContent)
    if(para.innerText.includes("success")) {
        para.classList.add("success");
    }
    if(para.innerText.includes("error")) {
        para.classList.add("error");
    }    
}); //WELLDONE!!!

// NOTE: Instead of 'para.innerText' in 'para.innerText.includes("success")' we could use 'para.textContent' as in 'para.textContent.includes("success"). The difference is '.innerText' only accessed the visible text only. But '.textContent' accessed all the text(even hidden(with style display none)).

// we could toggle classes.(add a class if it's not already added and remove if exists)
const h1 = document.querySelector("h1");
h1.classList.toggle("title");
h1.classList.toggle("title");
