import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
    variant: 'text' | 'outlined' | 'contained';
    text: string;
    loading: boolean;
    type: 'submit' | 'button' | 'reset';
}

export default function BasicButtons({ variant, text, loading, type }: Props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={variant} type={type} loading={loading}>{text}</Button>
    </Stack>
  );
}
