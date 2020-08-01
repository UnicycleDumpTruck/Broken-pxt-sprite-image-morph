function morph (mySprite: Sprite, myImage: Image) {
    pixels_to_change = []
    for (let index = 0; index <= 255; index++) {
        pixels_to_change.push(index)
    }
    while (pixels_to_change.length > 0) {
        random_pixel = pixels_to_change.removeAt(randint(0, pixels_to_change.length - 1))
        row = Math.floor(random_pixel / 16)
        column = random_pixel % 16
        mySprite.image.setPixel(column, row, myImage.getPixel(column, row))
        pause(0.01)
    }
}
let column = 0
let row = 0
let random_pixel = 0
let pixels_to_change: number[] = []
let player_sprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
game.showLongText("Press A to start morph.", DialogLayout.Bottom)
morph(player_sprite, sprites.food.smallLemon)
morph(player_sprite, sprites.food.smallStrawberry)
morph(player_sprite, sprites.food.smallPizza)
