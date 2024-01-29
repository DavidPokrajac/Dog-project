"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import RequiredMessage from "./RequiredMessage";
import Button from "./Button";

export default function SearchForm() {
    const [name, setName] = useState<string>("");
    const [breedName, setBreedName] = useState<string>("");
    const [isSubBreed, setIsSubBreed] = useState<string>("");
    const [randomImage, setRandomImage] = useState("");
    const [isMandatory, setIsManydatory] = useState(false);
    const [radioMandatory, setIsRadioMandatory] = useState(false);
    const [isBreedMandatory, setIsBreedMandatory] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
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

    function onchangeRadioHandler(event: any) {
        setIsRadioMandatory(false);
        setIsChecked(true);
        setIsSubBreed(event.target.value);
    }

    function setNameHandler(event: any) {
        setName(event.target.value);
        setIsManydatory(false);
    }

    function setBreedNameHandler(event: any) {
        setBreedName(event.target.value);
        setIsBreedMandatory(false);
    }

    function submitInputHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (name === "") {
            setIsManydatory(true);
        }
        if (isSubBreed === "") {
            setIsRadioMandatory(true);
        }
        if (isSubBreed === "true" && !breedName) {
            setIsBreedMandatory(true);
        }
        if (
            (name && isSubBreed === "true" && breedName) ||
            (name && isSubBreed === "false")
        ) {
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
                className="w-full md:max-w-3xl md:mx-auto text-center text-xl bg-slate-400/90 px-10 pt-10 pb- md:p-20 md:pb-10 rounded relative"
            >
                <div className="mb-10 relative z-5">
                    <label
                        className="block text-xl md:text-2xl"
                        htmlFor="dog-name"
                    >
                        Input your dog here
                    </label>
                    <input
                        type="text"
                        onChange={(event) => setNameHandler(event)}
                        className="mt-3 p-3 md:p-5 w-full text-center lowercase bg-slate-400/90 border-b-2 border-slate-900 focus:border-2 focus:border-slate-900 focus:rounded"
                        value={name}
                        id="dog-name"
                        autoComplete="off"
                    />
                    {isMandatory ? (
                        <RequiredMessage>
                            Dog name is a required field
                        </RequiredMessage>
                    ) : (
                        <div className="text-lg mt-2 font-semibold text-transparent animate-wiggleBack absolute left-2/4 -bottom-8 z-2 invisible -translate-x-2/4">
                            Dog name is a required field
                        </div>
                    )}
                </div>
                <div className="mb-10 relative z-5">
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
                            onChange={(event) => onchangeRadioHandler(event)}
                            id="isSubBreed"
                        />
                        Yes
                    </label>
                    <label className="mr-8">
                        <input
                            type="radio"
                            value="false"
                            name="isSubBreed"
                            onChange={(event) => onchangeRadioHandler(event)}
                            id="isSubBreed"
                        />
                        No
                    </label>
                    {radioMandatory ? (
                        <RequiredMessage>
                            One of radio fields must be checked
                        </RequiredMessage>
                    ) : (
                        <div className="text-lg mt-2 font-semibold text-transparent animate-wiggleBack absolute left-2/4 -bottom-8 invisible -z-2 -translate-x-2/4">
                            One of radio fields must be checked
                        </div>
                    )}
                </div>
                <div className="mt-10 relative z-5">
                    <label
                        className="block text-xl md:text-2xl"
                        htmlFor="breed-name"
                    >
                        Enter dogs breed:
                    </label>
                    <input
                        type="text"
                        onChange={(event) => setBreedNameHandler(event)}
                        className="mt-3 p-3 md:p-5 w-full text-center lowercase bg-slate-400 border-b-2 border-slate-900 focus:border-2 focus:border-slate-900 focus:rounded"
                        value={breedName}
                        id="breed-name"
                        autoComplete="off"
                    />
                    {isBreedMandatory ? (
                        <RequiredMessage>
                            Please specify breed name
                        </RequiredMessage>
                    ) : (
                        <div className="text-lg mt-2 font-semibold text-transparent animate-wiggleBack absolute left-2/4 -bottom-8 z-2 invisible -translate-x-2/4">
                            Please specify breed name
                        </div>
                    )}
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </main>
    );
}
