"use client";
import { useEffect } from "react";
import Image from "next/image";
import Error from "../components/Error";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return <Error error={error} reset={reset} />;
}
