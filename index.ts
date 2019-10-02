const w : number = window.innerWidth
const h : number = window.innerHeight
const scGap : number = 0.01
const strokeFactor : number = 90
const foreColor : string = "#673AB7"
const backColor : string = "#BDBDBD"
const delay : number = 20
const parts : number = 4
const nodes : number = 5

class Stage {

    canvas : HTMLCanvasElement = document.createElement('canvas')
    context : CanvasRenderingContext2D

    initCanvas() {
        this.canvas.width = w
        this.canvas.height = h
        this.context = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)
    }

    render() {
        this.context.fillStyle = backColor
        this.context.fillRect(0, 0, w, h)
    }

    handleTap() {
        this.canvas.onmousedown = () => {

        }
    }

    static init() {
        const stage : Stage = new Stage()
        stage.initCanvas()
        stage.render()
        stage.handleTap()
    }
}
