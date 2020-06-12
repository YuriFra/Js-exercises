
(function() {
    const table = document.createElement("table");
    document.getElementById("target").appendChild(table);
    table.setAttribute("border", '1');
    for (let i = 0; i < 10; i++) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        table.appendChild(tr);
        tr.appendChild(td);
        td.innerHTML = (i + 1);
    }
})();
