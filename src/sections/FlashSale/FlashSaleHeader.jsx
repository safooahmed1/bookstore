const FlashSaleHeader = ({ title, description, time }) => {
  return (
    <div className="flex justify-between items-center mb-12 px-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-[26px] font-bold leading-[100%] text-[#222222]">
          {title}
        </h2>
        <p className="max-w-[516px] text-[#22222280] font-['Open_Sans'] font-[400] text-[16px] leading-[140%]">
          {description}
        </p>
      </div>
      {/* صورة الدائرة أو الوقت */}
      <img
        src={time}
        alt="Timer"
        className="w-[110px] h-[110px] object-contain"
      />
    </div>
  );
};

export default FlashSaleHeader;