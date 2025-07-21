import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
    label: 'Outlined' | 'Filled' | 'Standard';
    variant: 'outlined' | 'filled' | 'standard'
}

export default function BasicTextFields({ label, variant }: Props) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label={label} variant={variant} />
    </Box>
  );
}
