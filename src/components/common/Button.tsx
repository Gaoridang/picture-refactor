interface Props {
  type?: "button" | "submit" | "reset";
  text: string;
}

const Button = ({ type = "button", text }: Props) => {
  return (
    <button
      className=" p-2 rounded-md bg-yellow-200 border-none outline-none w-full"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
