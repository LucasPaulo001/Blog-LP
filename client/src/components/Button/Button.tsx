import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
    variant: 'text' | 'outlined' | 'contained';
    text: string;
    loading: boolean;
    type: 'submit' | 'button' | 'reset';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function BasicButtons({ variant, text, loading, type, onClick }: Props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={variant} onClick={onClick} type={type} loading={loading}>{text}</Button>
    </Stack>
  );
}
