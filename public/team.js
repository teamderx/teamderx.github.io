

let data


fetch('./teams.json')
.then((response) => response.json())
.then((json) => console.log(json));


let table = document.getElementById("table-id")

data.array.forEach(element => {
    team = document.createElement("tr");
    team.innerHTML = element.name;
    element.mates.forEach(mate => {
        m = document.createElement("td");
        m.innerHTML = mate;
        team.appendChild(m);
    });
    table.appendChild(team);
});