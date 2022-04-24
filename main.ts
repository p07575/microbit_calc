let calc = [8 + 6, 12 - 8, 4 * 6, 16 / 4, 5 / 2]
let num = ["8+6", "12-8", "4*6", "16/4", "5/2"]
for (let ans of calc) {
    for (let word of num) {
        basic.showString(word + "=" + ("" + ans), 150)
    }
}
