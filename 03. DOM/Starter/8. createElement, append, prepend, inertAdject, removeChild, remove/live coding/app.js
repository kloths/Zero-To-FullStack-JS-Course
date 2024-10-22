// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

// Creating element
// const h1 = document.createElement("h1");
// h1.innerText = "Hello, World!";
// document.body.appendChild(h1);

// const ul = document.querySelector("ul");

// const li = document.createElement("li");
// li.innerText = "I'm li tag";
// ul.appendChild(li);

// const firstLi = ul.firstElementChild;
// ul.insertBefore(li, firstLi);

// const p = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "I'm italicized";
// i.style.color = "skyblue";
// p.insertAdjacentElement("beforebegin", i);
// p.insertAdjacentElement("afterbegin", i);
// p.insertAdjacentElement("beforeend", i);
// p.insertAdjacentElement("afterend", i);

// const section = document.querySelector("section");
// const i = document.createElement("i");
// i.innerText = "I'm italicized";
// i.style.color = "skyblue";

// const span = document.createElement("span");
// span.innerText = "kloths";
// span.style.color = "crimson";
// section.append(i, span);
// section.prepend(i, span);

const newList = document.querySelector(".new-list");
newList.removeChild(document.querySelector(".new-list li:nth-child(4)"));
newList.remove();
