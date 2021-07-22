import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateNote from './CreateNote'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
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

export default function Note(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
const deleteNote=()=>{
  props.deleteItem(props.id);

}
  return (
    <Card className="Card" variant="outlined">
      <CardContent>
        <h1>{props.title}</h1>
       <p>{props.content}</p>
      </CardContent>
      <CardActions>
        <Button onClick={deleteNote}><DeleteOutlineIcon /> </Button>
      </CardActions>
    </Card>
  );
}
