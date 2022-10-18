export function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return '<a href="' + url + '">' + url + "</a>";
  });
  // or alternatively
  // return text.replace(urlRegex, '<a href="$1">$1</a>')
}
export function nFormatter(num, digits = 1) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}
export const likeData = [
  {
    item: "Tech",
    color: "#FFB4B4",
    titleColor: "#852222",
    textColor: "#852222",
    icon: "❤️",
  },
  {
    item: "Process",
    color: "#D0CCFF",
    titleColor: "#4B42B0",
    textColor: "#4B42B0",
    icon: "🤖",
  },
  {
    item: "Domain",
    color: "#D9F1BA",
    titleColor: "#608235",
    textColor: "#577235",
    icon: "🌏",
  },
  {
    item: "Others",
    color: "#FFF8B6",
    titleColor: "#A19101",
    textColor: "#867C24",
    icon: "👍",
  },
];
export function headingColor(like) {
  let b = likeData.filter(
    (n, i) =>
      n.item ===
      like?.reduce(function (prev, current) {
        return prev.count > current.count ? prev : current;
      }).item
  )[0];
  return b;
}
