import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  label: string;
  value: string;
  handler: (value: string) => void;
  options: string[];
};

const SelectMenu = ({ label, value, handler, options }: Props) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [toggleDrop, setToggleDrop] = useState(false);
  useOnClickOutside(menuRef, () => setToggleDrop(false));
  return (
    <div ref={menuRef} className="w-full relative">
      <button
        type="button"
        onClick={() => setToggleDrop((prev) => !prev)}
        className="w-full bg-offWhite border-2 border-solid focus-within:hover:border-black focus-within:border-black focus-within:bg-white hover:border-lightGray border-offWhite rounded-2xl h-[64px] transition-all duration-300 overflow-hidden  flex justify-between items-center gap-2 px-2 sm:px-4"
      >
        <div className="flex flex-col justify-start items-start ">
          <p className="font-semibold text-primary text-xs">{label}</p>
          <p className="text-black font-semibold">{value}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          ></path>
        </svg>
      </button>
      {toggleDrop && (
        <div className="bg-offWhite absolute top-[114%] overflow-hidden left-0 z-30 shadow-xl rounded-2xl flex justify-start items-start w-full flex-col px-2 py-3">
          {options.map((elem, idx) => (
            <button
              type="button"
              key={idx + elem}
              onClick={() => {
                handler(elem);
                setToggleDrop(false);
              }}
              className={`${
                elem === value
                  ? "text-white bg-black"
                  : "text-black bg-transparent"
              }  focus:bg-primary focus:text-white rounded-xl text-base font-normal text-left w-full p-3`}
            >
              {elem}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectMenu;
