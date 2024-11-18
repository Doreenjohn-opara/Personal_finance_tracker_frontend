import { ChangeEvent } from "react";

export interface ITextInput {
    type: 'email' | 'text';
    text: string;
    icon?: string;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
    placeholder?: string;
    id?: string;
    name?: string;
    hasIcon?: boolean; 
  }

export interface IPasswordInput {
    text: string;
    icon?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    id?: string;
    name?: string;
    hasIcon?: boolean;
  }

  export interface IButton {
    type?: string;
    text: string;
    onClick?: (e: any) => void;
    
  }