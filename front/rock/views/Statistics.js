// Statistics component
const Statistics = {
    template: `
        <div class="small-12 columns" style="text-align: center;">
            <img v-if="thinking" src="./img/thinking.gif" width="200px"/>
            <section class="row log" v-if="info !== undefined">
                <div>
                    <ul>
                        <li v-for="(value, key) in info">
                            <div class="small-6 columns player1-turn" style="margin-top: 3px; text-align: right;">{{ key }}</div>
                            <div class="small-6 columns" style="margin-top: 3px; text-align: left;">{{ value }}</div>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    `,
    name: "Statistics",
    data() {
        return {
            info: undefined,
            thinking: false
        }
    },
    mounted: function () {
        this.thinking = true;
        axios.get(rest_info) // call to rest api (info)
        .then((response) => {
            this.thinking = false;

            this.info = response.data;
        })
        .catch((error) => {
            this.thinking = false;

            console.log('Error: ' + error);
            this.info = {'Something went wrong': error}
        });
    }
}