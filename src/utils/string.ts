export function toCapitalCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toCapitalCaseExceptAnd(str: string): string {
  return str
    .split(" ")
    .map((word) =>
      word.toLowerCase() === "and"
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
}
