import React, {useState, useEffect} from "react";
import './App.css';
import FetchUser from "./FetchUser";
import ListUser from "./ListUser";

function App() {
  useEffect(()=>{
     fetchUsers();
  },[]);

    const [users, setUsers]=useState([]);

     const fetchUsers= async()=>{
       try{
      const data= await fetch("https://jsonplaceholder.typicode.com/users")
      const mainData = await data.json();

      console.log(mainData);
      setUsers(mainData);
       }
       catch(err){
            console.log(err);
       };
     };
    

  return (
    <div className="App">
        <FetchUser data={users}/>
        <ListUser data={users}/>
    </div>
  );
}

export default App;
