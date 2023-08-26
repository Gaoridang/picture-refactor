import { ChangeEvent } from "react";

interface Props {
  category?: string;
  name: string;
  value?: string;
  errorMessage?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  category = "",
  name,
  value,
  errorMessage,
  handleChange,
}: Props) => {
  return (
    <div className="flex flex-col relative w-full lg:flex-row items-start">
      <label
        className="w-[150px] min-w-[150px] text-base lg:mt-[12px]"
        htmlFor={name}
      >
        {category}
        <span className=" text-pink-500">*</span>
      </label>
      <div className="relative flex-1 items-center w-full mb-[20px]">
        <div>
          <input
            className="p-2 border-[1px] border-gray-200 rounded-md outline-none w-full h-[44px] focus:border-gray-600"
            type="text"
            name={name}
            id={name}
            value={value}
            onChange={handleChange}
          />
        </div>
        <div>
          <p className=" text-xs text-red-400 font-semibold mt-[4px]">
            {errorMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Input;
