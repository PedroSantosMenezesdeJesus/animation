class obj{
    frame = 0
    timer = 0

    constructor(px, py, width, height, image) {
        this.px = px
        this.py = py
        this.width = width
        this.height = height
        this.image = image
    }
    draw() {
        let img = new Image()
        img.src = this.image
        canvas.drawImage(img, this.px, this.py, this.width, this.height)

    }
    animation(speed,limit,nameImage){
        this.timer += 1
        if (this.timer >= speed) {
            this.timer = 0
            this.frame += 1
        }
        if (this.frame > limit) {
            this.frame = 0
        }
        this.imagem = 'img/' + nameImage + this.frame + '.png'
    }
}

class BG extends obj{
    move(velocidade, limite, pos){
        this.px -= velocidade
        if (this.px < -limite) {
            this.px = pos 
        }
    }
}