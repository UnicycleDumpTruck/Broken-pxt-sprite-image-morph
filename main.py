def on_a_pressed():
    morph(player_sprite, sprites.food.small_lemon)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def morph(mySprite: Sprite, myImage: Image):
    global start_img, mid_img, end_img, pixels_to_change, random_pixel, row, column
    start_img = mySprite.image
    mid_img = img("""
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
    """)
    end_img = myImage
    pixels_to_change = []
    for index in range(257):
        pixels_to_change.append(index)
    while len(pixels_to_change) > 0:
        random_pixel = pixels_to_change.remove_at(randint(0, len(pixels_to_change)))
        row = Math.floor(random_pixel / 16)
        column = random_pixel % 16
        start_img.set_pixel(column, row, end_img.get_pixel(column, row))
        mySprite = sprites.create(start_img, SpriteKind.player)
        pause(0.01)
        print("Remaining: " + str(len(pixels_to_change)))
        print("Random: " + str(random_pixel))
column = 0
row = 0
random_pixel = 0
pixels_to_change: List[number] = []
end_img: Image = None
mid_img: Image = None
mySprite: Sprite = None
start_img: Image = None
player_sprite: Sprite = None
player_sprite = sprites.create(sprites.food.small_apple, SpriteKind.player)