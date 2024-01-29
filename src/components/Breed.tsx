import SubBreed from "./SubBreed";
import Link from "next/link";

interface Breed {
    breedName: string;
    collection: string[];
}

export default function Breed({ breedName, collection }: Breed) {
    return (
        <div className="transition duration-200 ease-in-out border-2 border-slate-400/50 text-center p-5 cursor-pointer hover:scale-105 hover:border-slate-950/80">
            <h4 className="uppercase text-xl">{breedName}</h4>
            <Link
                href={{
                    pathname: "/breed-images",
                    query: { breedName: breedName, subBreedExists: false },
                }}
                className="transition duration-200 ease-in-out uppercase tracking-wide inline-block bg-indigo-500 text-white rounded py-4 px-8 mx-auto mt-4 hover:bg-indigo-400 font-semibold active:bg-indigo-300"
            >
                See more images of {breedName}
            </Link>
            {collection.length != 0 && (
                <SubBreed breedName={breedName} collection={collection} />
            )}
        </div>
    );
}
