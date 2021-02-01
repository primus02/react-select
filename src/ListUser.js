import React, {useState} from "react";
import Select from "react-select";


function ListUser({data}){
    const [option, setOption]=useState("");
    const [users, setUsers]=useState([]);

    const fetchOption=(option)=>{
        // Set selected option
        setOption(option);

        // Set all selected options
        setUsers(option);
    };
 
       // Set Select Options 
     const userNames = data.map(user=> (
         {id: user.id, value: user.name, label: user.name}
     ));


    return(
        <div>
            <Select isMulti options={userNames} value={option} onChange={fetchOption}/>
            {users.map(selectedOption=> (
                <h4 className="list" key={selectedOption.id}>{selectedOption.value}</h4>
            ))}
        </div>
    );
}

export default ListUser;