export default function BtnType({btn ,w}) {
    return (
        <>
            <button type="sumbit" className={`bg-mainColor p-4 rounded-lg text-white active:bg-[#8c1347] mt-5 ${w ? w : "w-full "}`}>
                {btn}
            </button>
        </>
    )
}