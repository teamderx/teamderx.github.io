

let data


fetch('./teams.json')
.then((response) => response.json())
.then((json) => {

    let table = document.getElementById("table-id")

    let i = 1;
    
    json.teams.forEach(element => {
        let row = table.insertRow(-1);
        let cell0 = row.insertCell(0);
        cell0.innerHTML = element.name
        element.mates.forEach(mate=> {
            let cell = row.insertCell(i);
            cell.innerHTML = mate;
            i++;
        });
        i = 1
    });
    
});
