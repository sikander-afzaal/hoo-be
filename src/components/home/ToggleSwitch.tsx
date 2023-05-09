type Props = {
  value: boolean;
  handler: () => void;
  label?: string;
};

const ToggleSwitch = ({ handler, value, label }: Props) => {
  return (
    <div className="flex justify-start items-start w-full gap-2">
      <button
        type="button"
        onClick={handler}
        className={` rounded-full min-w-[40px] w-10 h-5 relative transition-all duration-300 ${
          value ? "bg-primary" : "bg-[#e7e7e7]"
        }`}
      >
        <div
          className={`${
            value
              ? "left-full -translate-x-[calc(100%_+_2px)]"
              : "translate-x-0 left-0.5"
          } absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full transition-all duration-300 bg-white `}
        ></div>
      </button>
      {label && <p className="text-xs font-normal text-[#84848F]">{label}</p>}
    </div>
  );
};

export default ToggleSwitch;
