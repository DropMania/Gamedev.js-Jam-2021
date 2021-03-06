import io from 'socket.io-client'

export const socket = io(
    location.href.startsWith('http://localhost:3000/')
        ? 'http://localhost:5000'
        : location.href.includes('itch.io')
        ? 'https://mirrormates.herokuapp.com'
        : undefined
)
