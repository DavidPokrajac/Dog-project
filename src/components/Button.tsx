interface ButtonProps {
    children: React.ReactNode;
    type: "submit" | "reset" | "button" | undefined;
    handleClick?: () => void;
}

export default function Button({ children, type, handleClick }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={handleClick}
            className="transition duration-200 ease-in-out uppercase tracking-wide inline-block bg-indigo-500 text-white rounded py-4 px-8 mt-12 hover:bg-indigo-400 font-semibold active:bg-indigo-300"
        >
            {children}
        </button>
    );
}
