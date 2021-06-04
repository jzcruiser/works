function getColor(color) {
    if ((color == 'none') || (color == 'transparent')) {
      return color;
    } else if (/^[0-9a-fA-F]{3,6}$/.test(color)) {
      return '#' + color;
    } else if (/^#[0-9a-fA-F]{3,6}$/.test(color)) {
      return color;
    }
}
// function getColor(a){if((a=="none")||(a=="transparent")){return a}else{if(/^[0-9a-fA-F]{3,6}$/.test(a)){return"#"+a}else{if(/^#[0-9a-fA-F]{3,6}$/.test(a)){return a}}}};

console.log(getColor('#fff'))
console.log(getColor('fff'))
console.log(getColor("none"))
console.log(getColor())
console.log(getColor('transparent'))
// export function getColor(value, placehover = "transparent") {
//   if (value === null || value === undefined || String(value).trim() === "") {
//     return placehover;
//   }
//   const color = String(value).trim();
//   const HEX_NO_HASH = /(^[0-9a-fA-F]{8}$)|(^[0-9a-fA-F]{6}$)|(^[0-9a-fA-F]{4}$)|(^[0-9a-fA-F]{3}$)/i;

//   if (HEX_NO_HASH.test(color)) {
//     return "#" + color;
//   }
//   // if (HEX.test(color) || RGB.test(color) || HSL.test(color)) {
//   //   return color;
//   // }

//   return color;
// }