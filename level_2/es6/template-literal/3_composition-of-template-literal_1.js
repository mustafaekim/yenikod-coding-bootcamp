var counter = `I will be counting to 5:
${
    [1, 2, 3, 4, 5]
        .map(function (n) {
            return `${n}\n`
        })
        .join("")}`

console.log(counter);


function table(people) {
    return `
        <table>
            ${people.map(function (person) {
            return `<tr>
                    <td>${person.id}</td>
                    <td>${person.name}</td>
                </tr>
                `
        }).join("")
        }
        </table>
    `
}

console.log(table([{ id: 1, name: "Mustafa" }, { id: 2, name: "Arda" }]))