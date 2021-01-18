import axios from "axios";
const API = "http://localhost:8000/api";

export const createtodo = async ({todo}) => {
  const { data } = await axios.post(`${API}/todo`, {
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
