interface PrimaryButtonProps {
    title: string;
    onClick: () => void;
    paddingY?: string;
}

export default function PrimaryButton({ title, onClick, paddingY = '12.5px' }: PrimaryButtonProps) {
    return (
        <button
            className="inline-block h-auto px-5 bg-primary-500 text-[14px] font-medium text-white text-center mx-auto items-center justify-center rounded-lg outline outline-[5px] outline-primary-100"
            style={{ paddingTop: `${paddingY}`, paddingBottom: `${paddingY}` }}
            onClick={onClick}
        >
            {title}
        </button>
    );
}