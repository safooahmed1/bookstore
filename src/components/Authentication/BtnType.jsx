export default function BtnType({ btn, w, disabled }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${w || "w-[400px]"} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } bg-mainColor text-white h-14 rounded-3xl text-[16px] font-semibold capitalize hover:bg-white hover:ring-2 hover:ring-inset hover:ring-mainColor hover:text-mainColor`}
    >
      {btn}
    </button>
  );
}
