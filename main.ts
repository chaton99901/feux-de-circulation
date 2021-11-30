let verte_1 = 0
let passage_piéton = 0
function jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.A, function () {
    if (verte_1 == 0) {
        passage_piéton = 1
        blanche()
        basic.pause(7000)
        orange()
        basic.pause(3000)
        passage_piéton = 0
    }
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
basic.forever(function () {
    if (passage_piéton == 0) {
        verte()
        verte_1 = 1
        basic.pause(10000)
        jaune()
        basic.pause(5000)
        rouge()
        verte_1 = 0
        basic.pause(10000)
    }
})
