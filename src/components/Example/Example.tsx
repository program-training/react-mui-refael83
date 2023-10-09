import { Button, Radio} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Checkbox, Palette } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import "./Example.css";

export function Example() {
  const [state, setState] = useState<boolean>(false);
  const [input,setInput] = useState('')
  const [selectedValue, setSelectedValue] = useState('a');
  const [age, setAge] = useState('');
  const [checked, setChecked] = useState(true);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const handleSelectChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
     <div>
      <Button variant="contained" onClick={()=>setState(!state)}>hello world </Button><br/>
      <TextField
      value={input}
      onChange={handleChange}
      sx={{
        backgroundColor:'lightBlue'
        }}></TextField><br></br>
      {state && <h1>{input}</h1>}
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleRadioChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 45,
          },
        }}
       />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleRadioChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 45,
          },
        }}
      /><br/>
       <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleSelectChange}
          sx={{
            backgroundColor:'lightBlue'
            }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select><br/>
        <Checkbox
           checked={checked}
           onChange={handleCheckChange}
           inputProps={{ 'aria-label': 'controlled' }}
            sx={{
              '&.Mui-checked': {
                color: 'green', 
              },
            }}
        />

     </div>
  );
}
