controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    morph(player_sprite, sprites.food.smallLemon)
})
function morph (mySprite: Sprite, myImage: Image) {
    start_img = mySprite.image
    mid_img = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    end_img = myImage
    pixels_to_change = []
    for (let index = 0; index <= 255; index++) {
        pixels_to_change.push(index)
    }
    while (pixels_to_change.length > 0) {
        random_pixel = pixels_to_change.removeAt(randint(0, pixels_to_change.length))
        row = Math.floor(random_pixel / 16)
        column = random_pixel % 16
        start_img.setPixel(column, row, end_img.getPixel(column, row))
        mySprite = sprites.create(start_img, SpriteKind.Player)
        pause(0.01)
        console.log("Remaining: " + pixels_to_change.length)
        console.log("Random: " + random_pixel)
    }
}
let column = 0
let row = 0
let random_pixel = 0
let pixels_to_change: number[] = []
let end_img: Image = null
let mid_img: Image = null
let mySprite: Sprite = null
let start_img: Image = null
let player_sprite: Sprite = null
player_sprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
