import Link from "next/link";
import Image from "next/image";

export default function DogNotFound() {
    return (
        <div className="max-w-screen-md mx-auto text-center text-xl h-full">
            <h2 className="text-4xl mb-8">Oops! This dog was not found.</h2>
            <Image
                src="/dog.webp"
                alt="A dog of pug breed standing in the rain"
                width={500}
                height={400}
                className="mx-auto w-11/12"
            />
            <Link
                href="/"
                className="transition duration-200 ease-in-out text-lg uppercase inline-block bg-indigo-500 text-white rounded py-4 px-8 md:mr-5 mt-6 sm:mt-10 hover:bg-indigo-400 font-semibold active:bg-indigo-300"
            >
                Back to Homepage
            </Link>
            <Link
                href="/quick-search"
                className="transition duration-200 ease-in-out text-lg uppercase inline-block bg-indigo-500 text-white rounded py-4 px-8 md:ml-5 mt-6 sm:mt-10 hover:bg-indigo-400 font-semibold active:bg-indigo-300"
            >
                Back to Quick Search page
            </Link>
        </div>
    );
}
