import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1}>

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton animation="wave" variant="rounded" width={"100%"} height={150} />
      <Skeleton animation="wave" variant="rounded" width={"100%"} height={150} />
    </Stack>
  );
}
