import React, { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  label: string;
  name: string;
  type: string;
  register: object;
  error?: string;
};

const Input: React.FC<InputProps> = ({ label, name, type, register, error, ...props }) => {
  const hasError = Boolean(error);

  return (
    <div className={`flex flex-col gap-2 mt-4 ${hasError ? 'text-red-500' : ''}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className={`rounded-lg bg-slate-100 outline-none shadow-md p-2 ${
          hasError ? 'border border-red-500' : ''
        }`}
        type={type}
        {...register}
        {...props}
      />
      {hasError && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
