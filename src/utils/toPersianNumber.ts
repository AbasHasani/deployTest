export default function (n: number | string | bigint) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n
    .toString()
    .split("")
    .map((x: any) => farsiDigits[x])
    .join("");
}
