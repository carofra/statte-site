export function compareLabTitles(a: string, b: string): number {
  return a.localeCompare(b, "it", { sensitivity: "base" });
}

export function sortLabsByTitle<T extends { title: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => compareLabTitles(a.title, b.title));
}
