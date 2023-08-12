import { ComponentProps } from 'react';

type IInputProps = ComponentProps<'input'> & {
  name: string;
  label: string;
  type: string;
};

const Input = ({ label, name, type, ...props }: IInputProps) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <label htmlFor={name}>{label}</label>
      <input
        className="rounded-lg bg-slate-100 outline-none shadow-md p-2"
        name={name}
        type={type}
        {...props}
      />
    </div>
  );
};

export default Input;
