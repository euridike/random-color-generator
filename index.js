function randomColor(brightness) {
  function randomChannel(brightness) {
    var r = 255 - brightness;
    var n = 0 | (Math.random() * r + brightness);
    var s = n.toString(16);
    return s.length == 1 ? '0' + s : s;
  }
  return (
    '#' +
    randomChannel(brightness) +
    randomChannel(brightness) +
    randomChannel(brightness)
  );
}
//import emoji from 'node-emoji';

//if (process.argv.length < 3) {
//  console.log(emoji.random().emoji);
//} else if (!emoji.hasEmoji(process.argv[2])) {
// console.log('Invalid emoji');//} else {
//console.log(emoji.get(process.argv[2]));}

//import emoji from 'node-emoji';

//if (process.argv.length > 2 && emoji.hasEmoji(process.argv[2])) {
//  console.log(emoji.get(process.argv[2]));
//} else if (process.argv.length > 2 && !emoji.hasEmoji(process.argv[2])) {
//  console.log('Invalid emoji');
//} else {
//  console.log(emoji.random().emoji)}
