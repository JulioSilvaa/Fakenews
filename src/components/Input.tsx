import { ComponentProps } from 'react';

type IInputProps = ComponentProps<'input'> & {
  label: string;
  type: string;
  register: object;
};

const Input = ({ label, type, register, ...props }: IInputProps) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <label>{label}</label>
      <input
        className="rounded-lg bg-slate-100 outline-none shadow-md p-2"
        type={type}
        {...register}
        {...props}
      />
    </div>
  );
};

export default Input;
