// Game component
const Game = {
    template: `
        <div>
            <section class="row">
                <div class="text-center">Rounds</div>
                <div class="text-center">{{rounds.length}}</div>
                <div class="small-6 columns">
                    <h1 class="text-center">PLAYER 1</h1>
                    <div class="playerbox">
                        <div class="playerbox text-center">
                            <img :src="thinking ? './img/thinking.gif' : icons[player1]" width="200px"/>
                        </div>
                    </div>
                </div>
                <div class="small-6 columns">
                    <h1 class="text-center">PLAYER 2</h1>
                    <div class="playerbox">
                        <div class="playerbox text-center">
                            <img :src="thinking ? './img/thinking.gif' : icons[player2]" width="200px"/>
                        </div>
                    </div>
                </div>
            </section>
            <section class="row controls" v-if="!gameIsRunning">
                <div class="small-12 columns">
                    <button id="start-game" @click="startGame">START NEW GAME</button>
                </div>
            </section>
            <section class="row controls" v-else>
                <div class="small-12 columns">
                    <button id="game-round" @click="round" :disabled="thinking">PLAY ROUND</button>
                    <button id="leave" @click="leave" :disabled="thinking">LEAVE</button>
                </div>
            </section>
            <section class="row log" v-if="rounds.length > 0">
                <div class="small-12 columns">
                    <ul>
                        <li v-for="(turn, index) in rounds" v-bind:key="index"
                            :class="{'player1-turn': turn.isPlayer1, 'player2-turn': !turn.isPlayer1, 'draw-turn': turn.isPlayer1 === undefined}">
                            <img :src="icons[turn.player1]" width="50px"/>
                            <img :src="icons[turn.player2]" width="50px"/>
                            <div>{{ turn.text }}</div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    `,
    name: "Game",
    data() {
        return {
            gameIsRunning: false,
            rounds: [],
            icons: ['./img/rock.png', './img/paper.png', './img/scissors.png'],
            thinking: false,
            player1: undefined,
            player2: undefined,
        }
    },
    mounted: function () {
        // 
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.rounds = [];
        },
        round: function () {
            this.thinking = true;
            axios.get('http://localhost:8080/DemoRest/rest/game/round') // call to rest api
            .then((response) => {
                this.player1 = response.data.player1;
                this.player2 = response.data.player2;

                this.thinking = false;

                var result = this.player1 - this.player2;
                var player1Wins = undefined;
                var text = '';

                // round result
                if (result === 0) {
                    text = 'Draw';
                } else if (result === 1 || result === -2) {
                    player1Wins = true;
                    text = 'Player 1 Wins';
                } else {
                    player1Wins = false;
                    text = 'Player 2 Wins';
                }

                // rounds log is updated
                this.rounds.unshift({
                    isPlayer1: player1Wins,
                    player1: this.player1,
                    player2: this.player2,
                    text: text
                });
            })
            .catch((error) => {
                console.log('Error: ' + error);

                this.player1 = undefined;
                this.player2 = undefined;

                this.thinking = false;
            });
        },
        leave: function () { 
            // cleaning
            this.gameIsRunning = false;
            this.rounds = [];
            this.player1 = undefined;
            this.player2 = undefined;
        }
    }
}