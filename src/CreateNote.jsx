import React,{useState} from 'react';

function CreateNote (){
   const [note,setNote]=useState({
       title:"",
       content:""
   });
    const inputEvent=(event)=>{
        let value=event.target.value;
        let name=event.target.name;
        console.log(value+""+name)
        setNote((preval)=>{
          if(name==="title"){
              
              return{
                  title:value,
                  content :preval.content,
              }
          }

          if(name==="content"){
              
            return{
                title:preval.title,
                content :value,
            }
        }
        })
    }
    return <>
       <div >
           <form>
             <input type="text" placeholder="Title" onChange={inputEvent} name="title" value={note.title}/> 
              <textarea rows="" column="" placeholder="write notes here" onChange={inputEvent} name="content" value={note.content} ></textarea>
           </form>
       </div>
    </>
}
export default CreateNote;