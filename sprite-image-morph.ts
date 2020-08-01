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
