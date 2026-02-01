export default function BtnType({btn}) {
    return (
        <>
            <button type="sumbit" className="bg-mainColor p-4 rounded-lg text-white active:bg-[#8c1347] w-full mt-5">
                {btn}
            </button>
        </>
    )
}