import { reactive } from 'vue'

export default reactive({
    game: {
        players: [],
        maxPlayers: 0,
        minPlayers: 0,
        started: false,
        state: 'NONE',
        timeLeft: 0,
        currentWord: '',
        lifes: 3,
        currentCompare: ''
    },
    images: [],
    player: {
        id: '',
        name: '',
        host: false,
        sort: 0
    }
})
