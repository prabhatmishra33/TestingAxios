import axios from 'axios';
import { inspect }  from 'util';


const dataToBePosted = [
    {
      "userId": 2,
      "id": 2,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }]

export const getToDoList = async () => {
    try{
        const url =  `https://jsonplaceholder.typicode.com/todos/1`;
        let response = await axios.get(url);
        console.log(`Response for getToDoList: ${inspect(response)}`);
        return response;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

export const postToDoList = async (dataToBePosted) => {
    try{
        const url =  `https://jsonplaceholder.typicode.com/posts`;
        let response = await axios.post(url,{
            data: dataToBePosted
        });
        console.log(`Response for postToDoList: ${inspect(response)}`);
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

export const deleteToDoList = async () => {
    try{
        const url =  `https://jsonplaceholder.typicode.com/posts/1`;
        let response = await axios.delete(url);
        console.log(`Response for deleteToDoList: ${inspect(response)}`);
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

getToDoList();
postToDoList(dataToBePosted);
deleteToDoList();