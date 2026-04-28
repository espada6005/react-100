type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
};

const defaultProps: Required<ButtonProps> = {
  size: 'medium',
  color: 'blue',
  text: 'Click me'
};

const Button = (props: ButtonProps) => {
  const { size, color, text } = { ...defaultProps, ...props };

  const buttonStyle = {
    padding: size === 'small' ? '5px 10px' : size === 'large' ? '15px 30px' : '10px 20px',
    backgroundColor: color,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <button style={buttonStyle}>{text}</button>
  );
};

// const Button = ({ size = 'medium', color = 'blue', text = 'Click me' }: ButtonProps) => {
//   const buttonStyle = {
//     padding: size === 'small' ? '5px 10px' : size === 'large' ? '15px 30px' : '10px 20px',
//     backgroundColor: color,
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   };

//   return (
//     <button style={buttonStyle}>{text}</button>
//   );
// };

export default Button;