import { ButtonHTMLAttributes, ReactNode } from 'react';

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string;
  icon?: ReactNode;
  className?: string;
  reverse?: boolean;
}
