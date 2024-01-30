"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import DogNotFound from "@/src/components/DogNotFound";

interface BreedImagesProps {
    searchParams: SearchParams;
}

interface SearchParams {
    breedName: string;
    name: string;
    subBreedExists: boolean;
}

export default function BreedImages({ searchParams }: BreedImagesProps) {
    const [images, setImages] = useState([]);
    const breedNameExists = searchParams.breedName
        ? searchParams.breedName + "/"
        : "";
    const nameExists = !searchParams.name ? "" : searchParams.name + "/";

    useEffect(() => {
        const fetchRequest = `https://dog.ceo/api/breed/${breedNameExists}${nameExists}images`;
        fetch(fetchRequest)
            .then((response) => response.json())
            .then((data) => {
                setImages(data.message);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [breedNameExists, nameExists]);

    return (
        <main>
            <h1 className="text-xl md:text-2xl mt-10 mb-10 sm:mb-20 ml-5 md:ml-10">
                Collection of images for{" "}
                <span className="font-bold capitalize">
                    {searchParams.breedName}{" "}
                    {searchParams.subBreedExists && searchParams.name}
                </span>
            </h1>
            {typeof images !== "string" ? (
                <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 px-5 md:px-8 pb-8 mt-6 md:mt-8">
                    {images.map((image) => {
                        return (
                            <li key={uuidv4()} className="relative min-h-80">
                                <Image
                                    src={image}
                                    alt=""
                                    fill={true}
                                    className="object-cover cursor-pointer transition ease-in-out hover:scale-110 hover:shadow-md rounded"
                                />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <DogNotFound />
            )}
        </main>
    );
}
