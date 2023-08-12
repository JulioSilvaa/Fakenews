import { ComponentProps } from 'react';

type IInputProps = ComponentProps<'input'> & {
  label: string;
  type: string;
  register: object;
  name: string;
};

const Input = ({ label, name, type, register, ...props }: IInputProps) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <label htmlFor={name}>{label}</label>
      <input
        className="rounded-lg bg-slate-100 outline-none shadow-md p-2"
        type={type}
        name={name}
        {...register}
        {...props}
      />
    </div>
  );
};

export default Input;
