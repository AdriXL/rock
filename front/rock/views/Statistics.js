// Statistics component
const Statistics = {
    template: `
        <div>
            <section class="row log" v-if="info !== undefined">
                <div class="small-12 columns">
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
            info: undefined
        }
    },
    mounted: function () {
        axios.get(rest_info) // call to rest api (info)
        .then((response) => {
            this.info = response.data;
        })
        .catch((error) => {
            console.log('Error: ' + error);
            this.info = {'Something went wrong': error}
        });
    }
}