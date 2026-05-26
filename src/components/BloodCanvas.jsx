import { useEffect, useRef } from 'react'

function BloodCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let drips = []
    let pools = []

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function rnd(a, b) { return a + Math.random() * (b - a) }

    class Drip {
      constructor(x) {
        this.x = x
        this.y = rnd(0, 5)
        this.vy = rnd(0.3, 1.0)
        this.w = rnd(4, 11)
        this.path = [{ x: this.x, y: this.y }]
        this.done = false
        this.pauseTimer = 0
        this.maxPause = rnd(20, 80)
        this.accel = rnd(0.008, 0.025)
        this.wobble = rnd(-0.15, 0.15)
        this.r = rnd(130, 170)
      }

      update() {
        if (this.done) return
        if (this.pauseTimer > 0) { this.pauseTimer--; return }
        this.vy = Math.min(this.vy + this.accel, 3.5)
        this.x += this.wobble * 0.5
        this.y += this.vy
        this.path.push({ x: this.x, y: this.y })
        if (this.path.length > 200) this.path.shift()
        if (Math.random() < 0.006 && this.vy < 1.2) {
          this.pauseTimer = this.maxPause
        }
        if (this.y >= canvas.height - 3) {
          this.done = true
          pools.push({ x: this.x, rx: this.w * 0.6, ry: this.w * 0.18, maxRx: this.w * 4 + rnd(5, 20) })
        }
      }

      draw() {
        if (this.path.length < 2) return
        const col = `rgba(${this.r}, 4, 4, 0.9)`
        ctx.beginPath()
        ctx.moveTo(this.path[0].x, this.path[0].y)
        for (let i = 1; i < this.path.length; i++) {
          const p0 = this.path[i - 1], p1 = this.path[i]
          ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) / 2, (p0.y + p1.y) / 2)
        }
        ctx.lineWidth = this.w * Math.min(this.path.length / 60, 1)
        ctx.strokeStyle = col
        ctx.lineCap = 'round'
        ctx.stroke()
        const tip = this.path[this.path.length - 1]
        const bulge = this.w * 0.7 + (this.pauseTimer > 0 ? this.pauseTimer * 0.04 : 0)
        ctx.beginPath()
        ctx.ellipse(tip.x, tip.y, bulge * 0.7, bulge, 0, 0, Math.PI * 2)
        ctx.fillStyle = col
        ctx.fill()
      }
    }

    function spawnDrip(x) {
      drips.push(new Drip(x ?? rnd(20, canvas.width - 20)))
    }

    let auto = 0
    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      pools.forEach(p => {
        if (p.rx < p.maxRx) { p.rx += 0.18; p.ry += 0.05 }
        ctx.beginPath()
        ctx.ellipse(p.x, canvas.height - 2, p.rx, p.ry, 0, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(120, 0, 0, 0.9)'
        ctx.fill()
      })

      drips.forEach(d => { d.update(); d.draw() })
      drips = drips.filter(d => !d.done)

      auto++
      if (auto % 120 === 0) spawnDrip()

      animId = requestAnimationFrame(loop)
    }

    for (let i = 0; i < 6; i++) {
      setTimeout(() => spawnDrip(), i * 350)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none'  }}
    />
  )
}

export default BloodCanvas