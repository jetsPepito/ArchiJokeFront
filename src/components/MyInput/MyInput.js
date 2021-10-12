import React from "react";
import { withStyles } from "@mui/styles";
import { TextField } from "@mui/material";

import colors from "../../utils/color";

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 2,
    marginRight: 2,
    width: 200,
  },
  cssLabel: {
    color : `${colors.secondYellow} !important`
  },
  cssOutlinedInput: {
    borderColor: `${colors.secondYellow} !important`,
    color: `${colors.secondYellow} !important`,
  },
  cssFocused: {
    color: `${colors.secondYellow} !important`
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: `${colors.secondYellow} !important`
  },
};

const CustomizedInputs = (props) => {
  const { classes } = props;

  return (
    <TextField
      className={classes.root}
      inputProps={props.inputProps}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
        inputMode: "numeric"
      }}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      variant={props.variant}
      error={props.error}
      label={props.label}
      multiline={props.multiline}
      rows={0}
      value={props.value}
      onChange={props.onChange}
      fullWidth
      helperText={props.error ? "Required" : ""}
    />
  );
}

export default withStyles(styles)(CustomizedInputs);