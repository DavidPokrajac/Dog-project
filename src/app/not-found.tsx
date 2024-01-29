import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

async function getDogPictures() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/50");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response.json();
}

export default async function NotFound() {
    const data = await getDogPictures();
    //console.log(data.message);
    return (
        <div className="relative before:block before:content-['*'] before:bg-slate-900/85 before:absolute before:inset-0">
            {data.message.map((d: string) => {
                //console.log(d);
                return (
                    <span
                        key={uuidv4()}
                        className="inline-block h-40 xl:h-40 w-1/12"
                        style={{
                            backgroundImage: `url(${d})`,
                            backgroundSize: "100% 160px",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top left",
                        }}
                    ></span>
                );
            })}
            <div className="absolute top-0 left-0 right-0 text-white text-center pt-8 px-4 sm:px-0">
                <h2 className="capitalize text-5xl sm:text-7xl my-10 leading-tight">
                    Page not found
                </h2>
                <p className="text-xl sm:text-2xl leading-relaxed">
                    This page appears to be non-existent. Perhaps you entered a
                    wrong{" "}
                    <abbr
                        className="uppercase"
                        title="Uniform Resource Locator"
                    >
                        url
                    </abbr>
                    . Make sure you do the following:
                </p>
                <ul className="flex flex-col md:flex-row justify-evenly text-xl my-20 mx-auto max-w-6xl leading-relaxed">
                    <li className="border-e-2 border-white p-10">
                        Enter the right url by typing the navigation item, which
                        is found in the navigation menu.
                    </li>
                    <li className="border-e-2 border-white p-10">
                        Make sure the navigation item is written in small caps.
                    </li>
                    <li className="p-10">
                        Navigation items with more than one word must be split
                        with a hyphen.
                    </li>
                </ul>
                <Link
                    href="/"
                    className="transition duration-200 ease-in-out uppercase inline-block bg-indigo-500 text-white rounded py-4 px-8 mb-5 md:mr-5 md:mt-15 hover:bg-indigo-400 font-semibold active:bg-indigo-300"
                >
                    Back to Homepage
                </Link>
                <Link
                    href="/quick-search"
                    className="transition duration-200 ease-in-out uppercase inline-block bg-indigo-500 text-white rounded py-4 px-8 md:ml-5 md:mt-15 hover:bg-indigo-400 font-semibold active:bg-indigo-300"
                >
                    Back to Quick Search page
                </Link>
            </div>
        </div>
    );
}
