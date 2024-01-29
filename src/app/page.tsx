"use client";
import { useState, useEffect, Fragment } from "react";
import Breed from "@/src/components/Breed";
import { v4 as uuidv4 } from "uuid";
import { filterBreeds } from "../utilities";

export default function Home() {
    const [breeds, setBreeds] = useState<[string, string[]][]>([]);

    useEffect(() => {
        const first = async () => {
            try {
                const data = await fetch("https://dog.ceo/api/breeds/list/all");
                const response = await data.json();
                const hey: any = Object.entries<string[]>(response.message);
                setBreeds(hey);
            } catch (error) {
                console.error(error);
            }
        };

        first();
    }, []);

    const withoutSubBreed = breeds.filter((breed) => filterBreeds(breed));

    const withSubBreed = breeds.filter((breed) => filterBreeds(breed));

    return (
        <main>
            <h2 className="ml-4 my-6 sm:my-10 text-2xl sm:text-3xl">
                Without sub-breed:
            </h2>
            <section className="grid grid-cols-2 gap-5 p-5 grid-flow-dense">
                {withoutSubBreed.map((breed: any) => {
                    const [name, collection] = breed;
                    return (
                        <Fragment key={uuidv4()}>
                            <Breed breedName={name} collection={collection} />
                        </Fragment>
                    );
                })}
            </section>
            <section className="grid grid-cols-2 gap-5 p-5 auto-rows-min">
                <h2 className="ml-4 my-6 sm:my-10 text-2xl sm:text-3xl">
                    With sub-breed:
                </h2>
                {withSubBreed.map((breed: any) => {
                    const [name, collection] = breed;
                    return (
                        <Fragment key={uuidv4()}>
                            <Breed breedName={name} collection={collection} />
                        </Fragment>
                    );
                })}
            </section>
        </main>
    );
}
