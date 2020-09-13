import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/5/';


const fetchData = () => {
   axios.get(url).then(response => {
    //console.log(response.data);

    interface Todo {
        id: number;
        title: string;
        completed: boolean;
    }

    const todo = response.data as Todo;
    const ID = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    const appID = document.getElementById('appID');
    const li = document.createElement('li');
    li.innerHTML = `
        <li>${ID.toString()}</li>
        <li>${title}</li>
        <li>${completed}</li>
    `;
    
    appID?.appendChild(li);

    });
};

fetchData();

