import { useState } from "react";
import NewsContext from "./NewsContext";
const NewsState = (props)=>{
    const [filter, setFilter] = useState({
        filter:false,
        data:""
    })

    const [output, setOutput] = useState([])
    // const holder;
    const setOut = (data)=>{
       setOutput(data)
    }

    const updateFilter = (boolValue,dataValue)=>{
         setFilter((previousState) => {
            return { ...previousState,filter:boolValue,data:dataValue};
          });
            if(boolValue===false){
                setFilter((previousState) => {
                    return { ...previousState, data:""};
                });
            }
    }
    return (
        <NewsContext.Provider value={{filter,output,updateFilter,setOut}}>
            {props.children}
        </NewsContext.Provider>
    )
}
export default NewsState;