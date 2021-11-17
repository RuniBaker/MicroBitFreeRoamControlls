game.setLife(1)

let ship1 = game.createSprite(2,2)
input.onButtonPressed(Button.A, function() {
    ship1.move(-1)
})
input.onButtonPressed(Button.B, function () {
    ship1.move(1)
})
input.onButtonPressed(Button.AB, function () {
    
    ship1.turn(Direction.Right, 90)
})

input.onPinPressed(TouchPin.P0, function() {

}


/*
let ship2 = game.createSprite(2, 2)
input.onButtonPressed(Button.A, function () {
    ship2.move(-1)
})
input.onButtonPressed(Button.B, function () {
    ship2.move(1)
})
input.onButtonPressed(Button.AB, function () {

    ship2.turn(Direction.Right, 90)
})
*/
)