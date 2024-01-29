interface RequiredMessageProps {
    children: React.ReactNode;
}

export default function RequiredMessage({ children }: RequiredMessageProps) {
    return (
        <div className="text-lg mt-2 font-semibold text-transparent animate-wiggle absolute left-2/4 bottom-0 z-2 -translate-x-2/4">
            {children}
        </div>
    );
}
