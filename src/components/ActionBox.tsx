import Image from "next/image";

interface ActionBoxProps {
    title: string;
    img: string;
    onClick: () => void
}


function ActionBox({ title, img, onClick }: ActionBoxProps) {
    return (
        <button className="flex flex-col align-center w-[100px] h-[80px] bg-zinc-100 rounded-md justify-center items-center font-montserrat text-neutral-700 font-semibold">
            <Image src={img} alt="" />
            <div>{title}</div>
        </button>
    )
}

export default ActionBox;