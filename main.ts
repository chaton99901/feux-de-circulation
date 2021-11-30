function jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.A, function () {
    passage_piéton = 1
})
function verte () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function orange () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function blanche () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
let passage_piéton_2 = 0
let verte_1 = 0
let passage_piéton = 0
passage_piéton = 0
basic.clearScreen()
basic.forever(function () {
    if (passage_piéton == 0) {
        verte()
        verte_1 = 1
        basic.pause(5000)
        jaune()
        basic.pause(2500)
        verte_1 = 0
        rouge()
        basic.pause(5000)
    }
    if (verte_1 == 0 && passage_piéton == 1) {
        passage_piéton_2 += 1
        blanche()
        basic.pause(7000)
        passage_piéton_2 += 0
        orange()
        basic.pause(3000)
        passage_piéton = 0
    }
})
basic.forever(function () {
    if (verte_1 == 0 && passage_piéton == 1 && passage_piéton_2 == 1) {
        basic.showNumber(9)
        basic.pause(350)
        basic.showNumber(8)
        basic.pause(350)
        basic.showNumber(7)
        basic.pause(350)
        basic.showNumber(6)
        basic.pause(350)
        basic.showNumber(5)
        basic.pause(350)
        basic.showNumber(4)
        basic.pause(350)
        basic.showNumber(3)
        basic.pause(350)
        basic.showNumber(2)
        basic.pause(350)
        basic.showNumber(1)
        basic.pause(350)
        basic.showNumber(0)
        basic.pause(350)
        basic.clearScreen()
    }
})
