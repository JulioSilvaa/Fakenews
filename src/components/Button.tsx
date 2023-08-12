import classeNames from 'classnames';
import { ComponentProps } from 'react';

type Props = ComponentProps<'button'> & {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'dark' | 'light' | 'primary';
  children?: React.ReactNode;
};

const Button = ({ type = 'button', variant, children }: Props) => {
  let bgColor = 'text-black';
  if (variant === 'dark') bgColor = 'bg-primary text-white';
  if (variant === 'primary')
    bgColor = 'bg-red-500 hover:bg-red-800 active:bg-primaryDark transition-all text-white';

  if (variant === 'light') bgColor = 'bg-primaryLight text-white';
  return (
    <button
      type={type}
      className={classeNames(
        'py-2 px-4 max-w-36 mx-auto mt-4 rounded-md text-sm shadow-md text-white bg-red-500',
        bgColor,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
