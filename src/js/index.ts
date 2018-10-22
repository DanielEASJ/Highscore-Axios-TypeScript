import axios from 'axios';

let URL: string = "http://localhost:3000/";


interface Score {
    name: string;
    score: number;
}

axios.get(URL + 'Api/Score/')

function getScore(score: Score): string {
    return score.name + " " + score.score;
}




// let user: Person = { firstName: "John", lastName: "Doe" };

// let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
// element.innerHTML = greeter(user);