import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getalltodo} from "../action/apicall";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Link,NavLink } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
});



export default function DenseTable() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const loadAllProduct=async()=>{
      try{
          let resdata=await getalltodo();
          console.log(resdata);
          setData(resdata);
      }
      catch(err){
          console.log(err);
      }
  }

  useEffect(() => {
    loadAllProduct();
  }, []);

  console.log(data);
  return (
      
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Tittle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell component="th" scope="row">
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
          <NavLink className="nav-link" to="/childlist">
            Child-List
          </NavLink>
          </TableCell>
          <TableCell ccomponent="th" scope="row">
            <IconButton
              edge="end"
              aria-label="delete"
              style={{ marginRight: "90px" }}
            >
              <NavLink to="/edit">
              <EditIcon />
              </NavLink>
            </IconButton>
          </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}