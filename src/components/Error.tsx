"use client";
import Image from "next/image";
import Button from "./Button";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    return (
        <div className="text-center pt-10 bg-slate-300">
            <h2 className="mt-5">OOPS! Something went wrong.</h2>
            <Image
                src="/dog.webp"
                alt="A dog of pug breed standing in the raind"
                width={500}
                height={500}
                className="mx-auto my-10 w-11/12 sm:max-w-md"
            />
            <Button type="button" onClick={() => reset()}>
                Try again
            </Button>
        </div>
    );
}
