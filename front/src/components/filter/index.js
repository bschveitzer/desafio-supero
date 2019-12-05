import React from "react";
import {
  Paper,
  Typography,
  TextField,
  InputAdornment
} from "@material-ui/core";
import DateRange from "@material-ui/icons/DateRange";
import "./styles.css";

const Filter = props => (
  <div className="root">
    <Paper className="filter">
      <Typography variant="h5" className="date-text">
        Filtrar ano de publicação:
      </Typography>
      <TextField
        id="outlined-basic"
        className="date-input"
        variant="outlined"
        value={props.initialDate}
        onChange={event => props.onChange(event, "initialDate")}
        onKeyPress={props.onEnterClick}
        placeholder="Ano"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DateRange />
            </InputAdornment>
          )
        }}
      />
      <Typography variant="h5" className="date-text">
        até
      </Typography>
      <TextField
        id="outlined-basic"
        className="date-input"
        variant="outlined"
        value={props.finalDate}
        onChange={event => props.onChange(event, "finalDate")}
        placeholder="Ano"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DateRange />
            </InputAdornment>
          )
        }}
      />
      <Typography variant="h5" className="results-count">
        {props.count} resultados encontrados
      </Typography>
    </Paper>
  </div>
);
export default Filter;
