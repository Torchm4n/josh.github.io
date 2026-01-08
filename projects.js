document.addEventListener("DOMContentLoaded", async () => {
    var index = 0;

    const data_promise = fetch("./data.json").then(r => r.json()).then(obj => Object.values(obj));
    const length_promise = data_promise.then(d => d.length);

    const projects_div = document.getElementById("projects");

    const month = document.getElementById("month");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const link = document.getElementById("alink");

    const data = await data_promise;
    const length = await length_promise;

    title.textContent = data[index].title;
    description.textContent = data[index].description;
    link.textContent = data[index].link;

    projects_div.addEventListener("click", async () => {
        index = (index + 1) % length;

        month.textContent = data[index].month;
        title.textContent = data[index].title;
        description.textContent = data[index].description;
        link.textContent = data[index].link;
    });
});