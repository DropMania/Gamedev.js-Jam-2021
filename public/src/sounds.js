let ost = new Audio('/src/assets/sounds/ost.mp3')
ost.loop = true
ost.volume = 0.4

let win = new Audio('/src/assets/sounds/win.mp3')
win.volume = 1
let fail = new Audio('/src/assets/sounds/fail.mp3')
fail.volume = 1
let blick = new Audio('/src/assets/sounds/blick.mp3')
blick.volume = 1

export let startOST = () => {
    ost.play()
}
export let muteOST = () => {
    ost.muted = !ost.muted
}
export let playWin = () => {
    win.play()
}
export let playClick = () => {
    blick.play()
    setTimeout(() => {
        blick.pause()
        blick.currentTime = 0
    }, 100)
}
export let playFail = () => {
    fail.play()
}
export let ostIsMuted = ost.muted
