import classeNames from 'classnames';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'dark' | 'light' | 'primary';
  onclick: VoidFunction;
  children?: React.ReactNode;
};

const Button = ({ type = 'button', variant, onclick, children }: Props) => {
  let bgColor = 'text-black';
  if (variant === 'dark') bgColor = 'bg-primary text-white';
  if (variant === 'primary')
    bgColor = 'bg-red-500 hover:bg-red-800 active:bg-primaryDark transition-all text-white';

  if (variant === 'light') bgColor = 'bg-primaryLight text-white';
  return (
    <button
      type={type}
      onClick={onclick}
      className={classeNames('py-2 px-4 rounded-md text-sm', bgColor)}
    >
      {children}
    </button>
  );
};

export default Button;
