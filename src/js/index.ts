import axios from 'axios';

let URL: string = "https://highscore-rest-service-stenalt-goericke.azurewebsites.net/";
let testname: string;
let testValue: number;
let testList: string[] = new Array<string>();
let TableId: number = 0;

let table: HTMLTableElement = <HTMLTableElement>document.getElementById("table");



let updateButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("updateButton");

updateButton.addEventListener("click", getList);

function getList()
{
    // removes old data (work if no new data is added post-update)
    for (let i = 0; i < TableId; i++) {
        console.log("for-loop kørt");
        let elementRow = document.getElementById("Row"+TableId);
        let rowName = document.getElementById("Name"+TableId);
        let rowScore = document.getElementById("Score"+TableId);
        //table.removeChild(elementRow)
        table.childNodes.forEach
        (
            function (value){
                    table.removeChild(value);
                }
            
        );
        // elementRow.remove();
        // elementRow.removeChild(rowName);
        // elementRow.removeChild(rowScore);  
    }

    axios.get(URL + 'Api/Score/')
    .then(function (response) {

        testList.forEach( function(value)
        {
            testList.pop();
        });
        // input new data
        for (let d of response.data)
        {

            // Parameter elements used to set equal responds data
            let paraName : HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
            let paraScore : HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");

            // kimon thing
            // let frag : DocumentFragment; // no funktion yet (kimon wanted to show something)


            testList.push(JSON.stringify(d.name).trim());
            testList.push(d.value); // works but should prob be "score" insted of "value"

            // add new ROW & gives a unique id
            var tableRow = document.createElement("tr");
            tableRow.setAttribute("id", "Row"+TableId);

            // add new row element (NAME) & gives a unique id
            var tableRowName = document.createElement("td");
            // create 
            tableRowName.setAttribute("id", "Name"+TableId);
            // set
            paraName.innerHTML = d.name
            tableRowName.appendChild(paraName)

            
            // add new row element (SCORE) & gives a unique id
            var tableRowScore = document.createElement("td");
            //create
            tableRowScore.setAttribute("id", "Score"+TableId);
            // set
            paraScore.innerHTML = d.value
            tableRowScore.appendChild(paraScore)


            //Append new table trows and input together
            
            table.appendChild(tableRow);
            tableRow.appendChild(tableRowName);
            tableRow.appendChild(tableRowScore);

            // updates TableId to makre sure Rows/Elements have unique Id's
            TableId = TableId +1;
        };
        console.log(testList)

      })
      .catch(function (error) {
        console.log(error);
      });
}


// function getScore(score: Score): string {
//     return score.name + " " + score.score;
// }




// let user: Person = { firstName: "John", lastName: "Doe" };

// let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
// element.innerHTML = greeter(user);