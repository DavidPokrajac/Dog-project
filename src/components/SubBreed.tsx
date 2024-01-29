import React, { Fragment } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

interface SubBreed {
    breedName: string;
    collection: string[];
}

export default function SubBreed({ breedName, collection }: SubBreed) {
    return (
        <div className="mt-6">
            <h4 className="text-xl text-left">Sub-breeds:</h4>
            <ul className="list-none">
                {collection.map((col) => {
                    return (
                        <Fragment key={uuidv4()}>
                            <li className="uppercase mt-4">{col}</li>
                            <Link
                                href={{
                                    pathname: "/breed-images",
                                    query: {
                                        breedName: breedName,
                                        name: col,
                                        subBreedExists: true,
                                    },
                                }}
                                className="transition duration-200 ease-in-out uppercase tracking-wide inline-block bg-indigo-500 text-white rounded py-4 px-8 ml-5 mt-4 hover:bg-indigo-400 font-semibold active:bg-indigo-300"
                            >
                                See more images of {col}
                            </Link>
                        </Fragment>
                    );
                })}
            </ul>
        </div>
    );
}
