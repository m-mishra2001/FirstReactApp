import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateNote from './CreateNote'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { orange } from '@material-ui/core/colors';
const useStyles = makeStyles({
  root: {
    minWidth:276,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
});

export default function OutlinedCard(props) {
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
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
const addEvent=()=>{
props.passNote(note);
setNote({
  title:"",
    content:"",
})
}
  return (<div className="fdiv">
    <Card className="Cards" variant="outlined">
      <CardContent>
        
      <div >
           <form>
             <input type="text" placeholder="Title" onChange={inputEvent} name="title" value={note.title}/> 
              <textarea rows="" column="" placeholder="write notes here" onChange={inputEvent} name="content" value={note.content} ></textarea>
           </form>
       </div>
        
      </CardContent>
      <CardActions>
        <Button onClick={addEvent} ><AddCircleIcon  className="Addbutton" /> </Button>
      </CardActions>
    </Card></div>
  );
}
