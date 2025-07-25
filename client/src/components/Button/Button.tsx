import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
    variant: 'text' | 'outlined' | 'contained';
    text: string;
    loading: boolean;
    type: 'submit' | 'button' | 'reset';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    className: string;
}

export default function BasicButtons({ variant, text, loading, type, onClick, color, className }: Props) {
  return (
    <Stack spacing={2} direction="row">
      <Button className={className} color={color} variant={variant} onClick={onClick} type={type} loading={loading}>{text}</Button>
    </Stack>
  );
}
