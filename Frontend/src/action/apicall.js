import axios from "axios";
const API = "http://localhost:8000/api";

export const createtodo = async ({todo}) => {
  const { data } = await axios.post(`${API}/todo`, {
    title: todo.title,
  });
  console.log(data);
  return data;
};

export const createchild = async (todo) => {
  console.log(todo)
  const { data } = await axios.post(`${API}/todo/child/${todo.id}`, {
    title: todo.title,
  });
  console.log(data);
  return data;
};

export const getalltodo=async ()=>{
    const {data}=await axios.get(`${API}/todo`)
    console.log(data);
    return data;
}

export const updatetodo=async(todo)=>{
  console.log(todo)
    const { data } = await axios.put(`http://localhost:8000/api/todo/${todo.id}`, {
      title: todo.title
      });
      console.log(data);
      return data;
}

export const childupdatetodo=async(todo)=>{
  console.log(todo)
    const { data } = await axios.put(`http://localhost:8000/api/todo/${todo.id}/${todo.children.mainid}`, {
      title: todo.title
      });
      console.log(data);
      return data;
}

export const deleteTodo = (todo) => {
  // console.log(todo._id);
  return fetch(`http://localhost:8000/api/todo/${todo}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


