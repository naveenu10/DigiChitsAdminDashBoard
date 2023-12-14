// GlobalButton.tsx
import Button, { ButtonProps } from "@mui/material/Button";
import { ReactNode } from "react";

interface GlobalButtonProps extends ButtonProps {
  children: ReactNode;
}

const PrimaryButton = ({ children, ...props }: GlobalButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default PrimaryButton;
