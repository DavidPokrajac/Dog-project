export function filterBreeds(breed: [string, string[]]): boolean {
    const [name, subBreeds] = breed;
    return subBreeds.length > 0;
}
