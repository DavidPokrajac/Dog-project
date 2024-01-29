import Image from "next/image";

export default function Header() {
    return (
        <header className="px-4 md:ps-10 py-10 sm:py-14 flex">
            <div className="content mr-4 sm:mr-10">
                <h1 className="text-4xl md:text-6xl mb-5">The Dog Page</h1>
                <p className="text-lg italic">
                    See images about breeds you like most here!
                </p>
            </div>
            <Image
                src="/pets.svg"
                alt="Dog Paw"
                width={200}
                height={100}
                className="w-14 sm:w-24"
            />
        </header>
    );
}
