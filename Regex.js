var text = "plunger pot caffeine froth caramelization barista, crema eu to go crema redeye medium grounds, rich, espresso, pumpkin spice, to go shop fair trade steamed frappuccino. Espresso is delicioso. as coffee, beans café au lait to go beans, single shot organic strong affogato a to go siphon foam viennese so half and half aroma con panna viennese. Thirsty? Aromatic, white coffee siphon single origin turkish breve. frappuccino dark latte, decaffeinated cappuccino foam cortado espresso. Affogato. Mm."

// Part 1: replace any occurrence of "espresso" (upper or lowercase) with "ESPRESSO YUM YUM YUM".

// text = text.replace(/espresso/ig, "ESPRESSO YUM YUM YUM")

// console.assert(text.match(/espresso yum yum yum/ig) !== null)

// console.log(text)

// // Part 2: Make any question (?) an exclamation (!).

// text_two = text.replace(/\?/g, "!")

// console.assert(text.indexOf('?') === -1)

// console.log(text_two)

// // Part 3: replace any occurrence of "café au lait" (upper or lowercase) with "café-au-lait?".

// text_three = text.replace(/café au lait/ig, "café-au-lait?")

// console.assert(text.match(/café au lait/ig) === null)
// console.log(text_three)

// // Part 4: replace any occurrence of two same letters ("aa", "mm", etc) with four of the same letters ("aaaa", "mmmm", etc).


var text_four = /(\w)\1+/ig;

double = function (){
var x = [], t;
 while ((t = text_four.exec(text))) {
    x = x.concat(t)
}
    for (i=0; i< x.length; i++){
        text_four += text_four[i].concat(i)
    }
    return x;
}


text_fourdouble = text.replace(text_four, double)
console.log(text_fourdouble)


// console.assert(text.match(/(\w)\1[^ \1]/ig) === null)

// testing for any occurrences of 2 letters, but no more:
// var myRe = /(\w)\1+/ig;
// var matches = [], t;
// while ((t = myRe.exec(text)) !== null) {
//     matches = matches.concat(t)
// }
// matches = matches.filter(function(v){
//     return v.length === 2
// })
// console.assert(matches.length === 0)
