"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
    const [name, setName] = useState<string>("");
    const [breedName, setBreedName] = useState<string>("");
    const [isSubBreed, setIsSubBreed] = useState<boolean>(false);
    const [randomImage, setRandomImage] = useState("");

    const router = useRouter();
    const mainRef = useRef<any>(null);

    useEffect(() => {
        window.scrollTo(0, mainRef?.current?.offsetTop);
    }, []);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setRandomImage(data.message);
            })
            .catch((error) => console.error(error));
    }, []);

    function submitInputHandler() {
        if (isSubBreed) {
            router.push(
                `/breed-images/?breedName=${breedName}&name=${name}&subBreedExists=${isSubBreed}`
            );
        } else {
            router.push(
                `/breed-images/?breedName=${name}&subBreedExists=${isSubBreed}`
            );
        }
    }

    return (
        <main
            ref={mainRef}
            className="p-4 sm:py-10 sm:px-16 md:py-40 md:px-20 xl:p-60 relative before:block before:content-['*'] before:bg-slate-900/50 before:absolute before:inset-0"
            style={{
                backgroundImage: `url(${randomImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <form
                onSubmit={submitInputHandler}
                className="w-full md:max-w-3xl md:mx-auto text-center text-xl bg-slate-400/90 p-8 md:p-20 pb-10 rounded relative"
            >
                <div className="mb-10">
                    <label
                        className="block text-xl md:text-2xl"
                        htmlFor="dog-name"
                    >
                        Input your dog here
                    </label>
                    <input
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                        className="mt-3 p-3 md:p-5 w-full text-center lowercase bg-slate-400/90 border-b-2 border-slate-900 focus:border-2 focus:border-slate-900 focus:rounded"
                        required
                        aria-required={true}
                        value={name}
                        id="dog-name"
                    />
                </div>
                <div className="mb-10">
                    <label
                        className="block text-xl md:text-2xl"
                        htmlFor="isSubBreed"
                    >
                        Is this dog a sub-breed?
                    </label>
                    <label className="mr-8 align-baseline">
                        <input
                            type="radio"
                            value="true"
                            name="isSubBreed"
                            onChange={() => setIsSubBreed(true)}
                            required
                            id="isSubBreed"
                        />
                        Yes
                    </label>
                    <label className="mr-8">
                        <input
                            type="radio"
                            value="false"
                            name="isSubBreed"
                            onChange={() => setIsSubBreed(false)}
                            id="isSubBreed"
                        />
                        No
                    </label>
                </div>
                <div className="mt-5">
                    <label
                        className="block text-xl md:text-2xl"
                        htmlFor="breed-name"
                    >
                        Enter dogs breed:
                    </label>
                    <input
                        type="text"
                        required={isSubBreed ? true : false}
                        onChange={(event) => setBreedName(event.target.value)}
                        className="mt-3 p-3 md:p-5 w-full text-center lowercase bg-slate-400 border-b-2 border-slate-900 focus:border-2 focus:border-slate-900 focus:rounded"
                        value={breedName}
                        id="breed-name"
                    />
                </div>
                <button
                    type="submit"
                    className="transition duration-200 ease-in-out uppercase tracking-wide inline-block bg-indigo-500 text-white rounded py-4 px-8 ml-5 mt-10 hover:bg-indigo-400 font-semibold active:bg-indigo-300"
                >
                    Submit
                </button>
            </form>
        </main>
    );
}
