<template>
<v-app>
    <v-toolbar app>
        <v-toolbar-title class="headline">
            <span>OnField Scoreboard</span>
        </v-toolbar-title>
    </v-toolbar>

    <v-content>
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs4>
                    <v-subheader class="display-1">Total</v-subheader>
                </v-flex>
                <v-flex xs3>
                    <v-text-field class="ma-0 pa-0" v-model="total" mask="###" label="Total" outline></v-text-field>
                </v-flex>
                <v-flex xs5>
                    <v-btn fab dark color="green" @click="Update('Total',1)">
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab dark color="red" @click="Update('Total',-1)">
                        <v-icon dark>remove</v-icon>
                    </v-btn>
                    <v-btn fab dark color="blue" @click="Update('Total',4)">
                        4
                    </v-btn>
                    <v-btn fab dark color="indigo" @click="Update('Total',6)">
                        6
                    </v-btn>
                </v-flex>

                <v-flex xs4>
                    <v-subheader class="display-1">Wickets</v-subheader>
                </v-flex>
                <v-flex xs3>
                    <v-text-field class="ma-0 pa-0" v-model="wickets" mask="##" label="Wickets" outline></v-text-field>
                </v-flex>
                <v-flex xs5>
                    <v-btn fab dark color="green" @click="Update('Wickets',1)">
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab dark color="red" @click="Update('Wickets',-1)">
                        <v-icon dark>remove</v-icon>
                    </v-btn>
                </v-flex>

                <v-flex xs4>
                    <v-subheader class="display-1">Overs</v-subheader>
                </v-flex>
                <v-flex xs3>
                    <v-text-field class="ma-0 pa-0" v-model="overs" mask="##" label="Overs" outline></v-text-field>
                </v-flex>
                <v-flex xs5>
                    <v-btn fab dark color="green" @click="Update('Overs',1)">
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab dark color="red" @click="Update('Overs',-1)">
                        <v-icon dark>remove</v-icon>
                    </v-btn>
                </v-flex>

                <v-flex xs4>
                    <v-subheader class="display-1">Extras</v-subheader>
                </v-flex>
                <v-flex xs3>
                    <v-text-field class="ma-0 pa-0" v-model="extras" mask="##" label="Extras" outline></v-text-field>
                </v-flex>
                <v-flex xs5>
                    <v-btn fab dark color="green" @click="Update('Extras',1)">
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab dark color="red" @click="Update('Extras',-1)">
                        <v-icon dark>remove</v-icon>
                    </v-btn>
                    <v-btn fab dark color="orange" @click="Update('Extras',5)">
                        5
                    </v-btn>
                    <v-btn fab dark color="violet" @click="Light()" :disabled="!light">
                        <v-icon dark>highlight</v-icon>
                    </v-btn>
                </v-flex>

                <v-flex xs4>
                    <v-subheader class="display-1">Target</v-subheader>
                </v-flex>
                <v-flex xs3>
                    <v-text-field class="ma-0 pa-0" v-model="target" mask="###" label="Target" outline></v-text-field>
                </v-flex>
                <v-flex xs5>
                    <v-btn fab dark color="green" @click="Update('Target',1)">
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab dark color="red" @click="Update('Target',-1)">
                        <v-icon dark>remove</v-icon>
                    </v-btn>
                </v-flex>

                <v-flex xs4>
                    <v-subheader class="display-1">Status</v-subheader>
                </v-flex>
                <v-flex xs8>
                    <v-subheader class="display-1">{{status}}</v-subheader>
                </v-flex>

                <v-flex xs4>
                    <v-btn color="green" @click="Refresh()">Refresh</v-btn>
                    <v-btn color="red" @click="Reset()">Reset</v-btn>
                </v-flex>
                <v-flex xs4>
                    <v-switch v-model="firstInnings" label="1st Innings" @change="changedInnings"></v-switch>
                </v-flex>
                <v-flex xs4>
                    <v-select outline v-model="maximumOvers" :items="overs_items" label="Match Type" @change="changedOvers"></v-select>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
    <v-footer app>
        <div>Copyright &copy; {{ new Date().getFullYear() }} OnField Technology, LLC. All rights reserved.</div>
    </v-footer>
</v-app>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            status: "Initialized",
            firstInnings: true,
            light: true,
            overs_items: [{
                    text: "T20",
                    value: 20
                },
                {
                    text: "T10",
                    value: 10
                }, {
                    text: "25 Overs",
                    value: 25
                },
                {
                    text: "30 Overs",
                    value: 30
                },
                {
                    text: "35 Overs",
                    value: 35
                },
                {
                    text: "40 Overs",
                    value: 40
                },
                {
                    text: "45 Overs",
                    value: 45
                },
                {
                    text: "50 Overs",
                    value: 50
                }
            ],
            maximumOvers: 20,
            data: null
        }
    },
    mqtt: {

    },
    methods: {
        Refresh() {
            var url = "http://" + location.hostname + ":8380/cgi/live-basic.cgi"
            // Other Info = MatchID:Inning:Total:Wickets:Overs:Extras:Target/Projected:D/L:LastMan:LastWicket
            var info = "42166:1:" + this.$store.state.match.total + ":" + this.$store.state.match.wickets + ":" + this.$store.state.match.overs + ":" +
                this.$store.state.match.extras + ":" + this.$store.state.match.target + ":0:0:0"

            url = url + "?o=" + info

            var vm = this

            this.axios.get(url)
                .then(response => {
                    vm.status = "OK"
                    vm.data = response.data
                })
                .catch(e => {
                    vm.status = e.message
                })

            var status = {
                MatchID: 42166, 
                Innings : vm.firstInnings ? 1 : 2, 
                Total: this.$store.state.match.total, 
                Wickets: this.$store.state.match.wickets,
                Overs: this.$store.state.match.overs, 
                Extras: this.$store.state.match.extras, 
                Target: this.$store.state.match.target,
                DLS: 0, 
                LastMan: 0, 
                LastWicket: 0
            }

            this.$mqtt.publish("/onfield/scoreboard", JSON.stringify(status))
        },
        Light() {
            var url = "http://" + location.hostname + ":8380/cgi/light.cgi?on=true"
            var vm = this

            if (this.light) {
                this.light = false;

                this.axios.get(url)
                    .then(response => {
                        vm.status = "OK"
                        vm.data = response.data
                        vm.light = true;
                    })
                    .catch(e => {
                        vm.status = e.message
                        vm.light = true;
                    })
            }
        },
        Reset() {
            this.$store.commit('setTotal', '0')
            this.$store.commit('setWickets', '0')
            this.$store.commit('setOvers', '0')
            this.$store.commit('setExtras', '0')
            this.$store.commit('setTarget', '0')
        },
        CalculateTarget(field) {
            if (this.firstInnings && (field == 'Total' || field == 'Extras' || field == 'Overs')) {
                var rate = this.total / Math.max(this.overs, 1);
                var target = Math.ceil(this.maximumOvers * rate).toFixed(0);

                this.$store.commit('setTarget', target)

                return true
            }

            return false
        },
        Update(field, n) {
            this.$store.commit(field, n)
            this.CalculateTarget(field)
            this.Refresh()
        },
        changedOvers( /*value*/ ) {
            if (this.CalculateTarget('Overs')) {
                this.Refresh()
            }
        },
        changedInnings(value) {
            if (value) {
                this.Reset()
            } else {
                var n = this.total + 1

                this.$store.commit('setTarget', n + '')
                this.$store.commit('setTotal', '0')
                this.$store.commit('setWickets', '0')
                this.$store.commit('setOvers', '0')
                this.$store.commit('setExtras', '0')
            }

            this.Refresh()
        }
    },
    computed: {
        total: {
            get() {
                return this.$store.state.match.total
            },
            set(value) {
                this.$store.commit('setTotal', value)
            }
        },
        wickets: {
            get() {
                return this.$store.state.match.wickets
            },
            set(value) {
                this.$store.commit('setWickets', value)
            }
        },
        overs: {
            get() {
                return this.$store.state.match.overs
            },
            set(value) {
                this.$store.commit('setOvers', value)
            }
        },
        extras: {
            get() {
                return this.$store.state.match.extras
            },
            set(value) {
                this.$store.commit('setExtras', value)
            }
        },
        target: {
            get() {
                return this.$store.state.match.target
            },
            set(value) {
                this.$store.commit('setTarget', value)
            }
        }
    }
}
</script>
