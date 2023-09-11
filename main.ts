function visa_emoji () {
    emoji += 1
    if (emoji == 0) {
        basic.showIcon(IconNames.Scissors)
    } else if (emoji == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (emoji == 2) {
        basic.showIcon(IconNames.Square)
    } else if (emoji == 3) {
        basic.showIcon(IconNames.Triangle)
    } else {
        emoji = 0
        basic.showIcon(IconNames.Scissors)
    }
}
input.onButtonPressed(Button.A, function () {
    visa_emoji()
})
function välj_emoji () {
    lista = [
    images.iconImage(IconNames.Scissors),
    images.iconImage(IconNames.Heart),
    images.iconImage(IconNames.Square),
    images.iconImage(IconNames.Triangle)
    ]
}
input.onButtonPressed(Button.B, function () {
	
})
radio.onReceivedValue(function (name, value) {
	
})
let lista: Image[] = []
let emoji = 0
radio.setGroup(40)
basic.forever(function () {
	
})
