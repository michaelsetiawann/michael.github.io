// calculate estimate reading time (minute)
export function estimateReadingTime(
    text: string,
    wordsPerMinute = 200
): number {
    const words = text.split(/\s+/).filter((word) => word !== "");

    const wordCount = words.length;
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

    return readingTimeMinutes;
}
