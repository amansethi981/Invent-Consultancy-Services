import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
// import Button from "@material-ui/icons"
import './Card.css';
const useStyles = makeStyles({
  root: {
    minWidth: 75,
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

const Cards = props => {
  const classes = useStyles();
  return (
    <Card  className={classes.root}  >
      {props.children}
    </Card>
  );
};

export default Cards;
