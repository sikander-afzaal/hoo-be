import Image from "next/image";
import React from "react";

type Props = {
  label: string;
  value: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  note?: string;
  ico?: string;
};

const InputField = ({ label, value, handler, ico, note }: Props) => {
  return (
    <>
      <div className="w-full bg-offWhite border-2 border-solid focus-within:hover:border-black focus-within:border-black focus-within:bg-white hover:border-lightGray border-offWhite rounded-2xl h-[60px] transition-all duration-300 overflow-hidden flex justify-start items-center gap-[20px] px-2 sm:px-4">
        {ico && (
          <div className="w-[30px] min-w-[30px]">
            <Image src={ico} width={30} height={30} alt="ico" />
          </div>
        )}
        <div className="w-full flex  h-full relative">
          <input
            onChange={handler}
            type="text"
            className="placeholder-shown:h-full h-[45px] mt-auto peer bg-transparent outline-none w-full text-base font-medium text-black text-opacity-50 "
            placeholder=" "
            value={value}
          />
          <p className="absolute top-1 font-semibold -translate-y-0 pointer-events-none left-0 text-primary peer-placeholder-shown:font-medium transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#848484] text-xs peer-placeholder-shown:sm:text-base peer-placeholder-shown:text-sm">
            {label}
          </p>
        </div>
      </div>
      {note && (
        <p className="text-[#84848F] text-xs font-normal -mt-3.5">{note}</p>
      )}
    </>
  );
};

export default InputField;
