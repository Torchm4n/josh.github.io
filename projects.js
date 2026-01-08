var index = 0;

const data_promise = fetch("./data.json").then(r => r.json()).then(obj => Object.values(obj));
const length_promise = data_promise.then(d => d.length);

const month = document.querySelector("#projects h1");
const title = document.querySelector("#projects #title")
const description = document.querySelector("#projects #description");
const link = document.querySelector("#projects #link #alink");

const data = await data_promise;
const length = await length_promise;

month.textContent = data[index]["month"];
title.textContent = data[index]["title"];
description.textContent = data[index]["description"];
link.textContent = data[index]["link"];

document.addEventListener("pointerdown", async () => {
    month.textContent = data[index]["month"];
    title.textContent = data[index]["title"];
    description.textContent = data[index]["description"];
    link.textContent = data[index]["link"];

    index = (index + 1) % length;
});