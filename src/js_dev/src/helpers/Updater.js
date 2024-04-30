export class UpdaterByFrame {
    constructor () {
        this.isRunning = false
        this.functions = []
    }

    start () {
        this.isRunning = true
        this._update()
    }

    stop () {
        this.isRunning = false
    }

    setToUpdate (f) {
        this.functions.push(f)
        return () => this.functions = this.functions.filter(func => func !== f)
    }

    _update () {
        const animate = () => {
            if (this.isRunning) {
                requestAnimationFrame(animate)
            }
            if (!this.isRunning) {
                return;
            }

            for (let i = 0; i < this.functions.length; ++i) {
                this.functions[i]()
            }
        }
        animate()
    }
}
