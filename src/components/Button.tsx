interface ButtonProps {
    children: React.ReactNode;
    type: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
}

export default function Button({ children, type, onClick }: ButtonProps) {
    return (
        <button
            type={type}
            className="transition duration-200 ease-in-out uppercase tracking-wide inline-block bg-indigo-500 text-white rounded py-4 px-8 mt-12 hover:bg-indigo-400 font-semibold active:bg-indigo-300"
        >
            {children}
        </button>
    );
}
