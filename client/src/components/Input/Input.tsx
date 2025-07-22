import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  label: string;
  variant: "outlined" | "filled" | "standard";
  fullWidth: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicTextFields({
  label,
  variant,
  fullWidth,
  onChange,
}: Props) {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={onChange}
        fullWidth={fullWidth}
        id="standard-basic"
        label={label}
        variant={variant}
      />
    </Box>
  );
}
