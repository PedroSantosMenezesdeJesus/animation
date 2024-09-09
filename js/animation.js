let canvas = document.getElementById('canvas').getContext('2d')

let florest = new BG(0, 0, 600, 700, 'img/floresta.jpg')
let florest2 = new BG(600, 0, 600, 700, 'img/floresta.jpg')

let bat = new obj(50, 350, 128, 128, 'img/morcego0.png')

function draw() {
    florest.draw()
    florest2.draw()

    bat.draw()
}

function update() {
    florest.move(7, 600, 0)
    florest2.move(7, 0, 600)

    bat.animation(7, 3, 'morcego')
}

function main() {
    canvas.clearRect(0, 0, 600, 700)
    update()
    draw()
    requestAnimationFrame(main)
}

main()