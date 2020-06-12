(function() {
    const table = document.createElement("table");
    document.getElementById("target").appendChild(table);
    table.setAttribute("border", '1');
    for (let i = 0; i < 10; i++) {
        const tr = document.createElement("tr");
        table.appendChild(tr);
        for (let j = 0; j < 10; j++) {
        const td = document.createElement("td");
        tr.appendChild(td);
        // assign multiplying tables to cells
            td.innerHTML = (i+1) +" x " + (j+1);
        }
    }
    console.log(table)
})();
