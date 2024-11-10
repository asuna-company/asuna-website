interface SecondaryButtonProps {
    title: string;
    onClick: () => void;
    paddingY?: string;
}

export default function SecondaryButton({ title, onClick, paddingY = '12.5px' }: SecondaryButtonProps) {
    return (
        <button
            className="inline-block h-auto px-5 bg-[var(--foreground)] text-p2 font-poppins font-medium text-black text-center mx-auto items-center justify-center rounded-lg outline outline-1 outline-[#ADADAD]"
            style={{ paddingTop: `${paddingY}`, paddingBottom: `${paddingY}` }}
            onClick={onClick}
        >
            {title}
        </button>
    );
}