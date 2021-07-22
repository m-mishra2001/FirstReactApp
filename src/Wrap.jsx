import React,{useState} from 'react';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import SimpleCard from './CreateNote1';
import Note from './Note';

function Wrap (){
    const[additem,setAdditem]=useState([]);
    const addNote=(note)=>{
        setAdditem((predata)=>{
            return[...predata,note];
        })
        
      }
      const onDelete=(id)=>{
         setAdditem((predat)=>{
             predat.filter((currdata,index)=>{
                 return index !==id;
             })
         })
      }
    return <>
        <Header />
    <Footer/>
<SimpleCard passNote={addNote} />

{additem.map((val,index)=>{
    return (<Note 
     key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
    />);
})}
    </>
}
export default Wrap;