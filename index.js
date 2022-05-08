function get_random_color()
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

function get_rand_color()
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
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
