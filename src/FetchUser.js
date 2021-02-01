import React, {useState} from "react";
import Select from "react-select";

function FetchUser({data}){

    // Set Selected Option
   const [option, setOption]=useState("");
   
   const fetchOption=(option)=>{
       setOption(option);
   };


    //  Set Select Options
    const userNames = data.map(user=> (
        {id: user.id, value: user.name, label: user.name}
    ));


    return(
        <div>
            <Select options={userNames} value={option} onChange={fetchOption}/>
            <p className="selected">You have selected <strong>{option.value}</strong> whose id is <strong>{option.id}</strong></p>
        </div>
    );
}

export default FetchUser;