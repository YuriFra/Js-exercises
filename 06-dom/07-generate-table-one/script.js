
(function() {
    const table = document.createElement("table");
    document.getElementById("target").appendChild(table);
    table.setAttribute("border", '1');
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (let i = 0; i < 10; i++) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        tbody.appendChild(tr);
        tr.appendChild(td);
    }
})();
