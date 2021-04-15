import { reactive } from 'vue'

export default reactive({
    game: {
        players: [],
        maxPlayers: 0,
        minPlayers: 0,
        started: false,
        state: 'NONE',
        timeLeft: 0
    },
    images: [],
    player: {
        id: '',
        name: '',
        host: false
    }
})
