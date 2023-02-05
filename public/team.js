fetch('./teams.json')
.then((response) => response.json())
.then((json) => {

    let table = document.getElementById("table-id")

    let i = 1;
    
    json.forEach(element => {
        let row = table.insertRow(-1);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        cell0.innerHTML = element.name
        element.members.forEach(mate=> {
            let cell = row.insertCell(i);
            cell.innerHTML = mate;
            i++;
        cell1.innerHTML = element.score
        });
        i = 1
    });
    
});

