interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  onClick: () => void;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}