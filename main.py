def morph(mySprite: Sprite, myImage: Image):
    global start_img, end_img, pixels_to_change, random_pixel, row, column
    start_img = mySprite.image
    end_img = myImage
    pixels_to_change = []
    for index in range(256):
        pixels_to_change.append(index)
    while len(pixels_to_change) > 0:
        random_pixel = pixels_to_change.remove_at(randint(0, len(pixels_to_change) - 1))
        row = Math.floor(random_pixel / 16)
        column = random_pixel % 16
        start_img.set_pixel(column, row, end_img.get_pixel(column, row))
        pause(0.01)
column = 0
row = 0
random_pixel = 0
pixels_to_change: List[number] = []
end_img: Image = None
start_img: Image = None
player_sprite = sprites.create(sprites.food.small_apple, SpriteKind.player)
game.show_long_text("Press A to start morph.", DialogLayout.BOTTOM)
morph(player_sprite, sprites.food.small_lemon)
morph(player_sprite, sprites.food.small_strawberry)
morph(player_sprite, sprites.food.small_pizza)