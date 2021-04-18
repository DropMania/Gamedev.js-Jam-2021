import io from 'socket.io-client'

export const socket = io(
    location.href == 'http://localhost:3000/'
        ? 'http://localhost:5000'
        : undefined
)
