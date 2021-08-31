import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, Paper } from "@material-ui/core";


export default function CreateItem(props) {
  const [item, setItem] = React.useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setItem({...item, name: ""});
    debugger;
    props.onAdd(item);
  };
  const handleReset = () => setItem({});

  return (
    
    <Paper>
    <h2>Create Item </h2>
    <TextField
      onChange={(e) =>setItem({...item, name: e.target.value})}
      value={item['name']}
      label={"Name"} //optional
    />

    <Button onClick={handleSubmit}>Submit</Button>
    <Button onClick={handleReset}>Reset</Button>
  </Paper>
  );
}