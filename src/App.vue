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
                <v-flex v-if="wideenough()" xs2>
                    <v-subheader class="display-1">Total</v-subheader>
                </v-flex>
                <v-flex v-else xs2>
                    <v-subheader class="display-1">T</v-subheader>
                </v-flex>

                <v-flex xs2>
                    <v-text-field class="ma-0 pa-0" v-model="total" mask="###" label="Total" outline></v-text-field>
                </v-flex>
                <v-flex xs8>
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

                <v-flex v-if="wideenough()" xs2>
                    <v-subheader class="display-1">Batsman I</v-subheader>
                </v-flex>
                <v-flex v-else xs2>
                    <v-subheader class="display-1">B1</v-subheader>
                </v-flex>

                <v-flex xs2>
                    <v-text-field class="ma-0 pa-0" v-model="striker" mask="###" label="Batsman 1" outline></v-text-field>
                </v-flex>
                <v-flex xs8>
                    <v-btn fab dark color="green" @click="Update('Striker',1)">
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab dark color="red" @click="Update('Striker',-1)">
                        <v-icon dark>remove</v-icon>
                    </v-btn>
                    <v-btn fab dark color="blue" @click="Update('Striker',4)">
                        4
                    </v-btn>
                    <v-btn fab dark color="indigo" @click="Update('Striker',6)">
                        6
                    </v-btn>
                </v-flex>

                <v-flex v-if="wideenough()" xs2>
                    <v-subheader class="display-1">Batsman II</v-subheader>
                </v-flex>
                <v-flex v-else xs2>
                    <v-subheader class="display-1">B2</v-subheader>
                </v-flex>

                <v-flex xs2>
                    <v-text-field class="ma-0 pa-0" v-model="nonstriker" mask="###" label="Batsman 2" outline></v-text-field>
                </v-flex>
                <v-flex xs8>
                    <v-btn fab dark color="green" @click="Update('NonStriker',1)">
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab dark color="red" @click="Update('NonStriker',-1)">
                        <v-icon dark>remove</v-icon>
                    </v-btn>
                    <v-btn fab dark color="blue" @click="Update('NonStriker',4)">
                        4
                    </v-btn>
                    <v-btn fab dark color="indigo" @click="Update('NonStriker',6)">
                        6
                    </v-btn>
                </v-flex>

                <v-flex v-if="wideenough()" xs2>
                    <v-subheader class="display-1">Wickets</v-subheader>
                </v-flex>
                <v-flex v-else xs2>
                    <v-subheader class="display-1">W</v-subheader>
                </v-flex>

                <v-flex xs2>
                    <v-text-field class="ma-0 pa-0" v-model="wickets" mask="##" label="Wickets" outline></v-text-field>
                </v-flex>
                <v-flex xs8>
                    <v-btn fab dark color="green" @click="Update('Wickets',1)">
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab dark color="red" @click="Update('Wickets',-1)">
                        <v-icon dark>remove</v-icon>
                    </v-btn>
                </v-flex>

                <v-flex v-if="wideenough()" xs2>
                    <v-subheader class="display-1">Overs</v-subheader>
                </v-flex>
                <v-flex v-else xs2>
                    <v-subheader class="display-1">O</v-subheader>
                </v-flex>

                <v-flex xs2>
                    <v-text-field class="ma-0 pa-0" v-model="overs" mask="##" label="Overs" outline></v-text-field>
                </v-flex>
                <v-flex xs8>
                    <v-btn fab dark color="green" @click="Update('Overs',1)">
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab dark color="red" @click="Update('Overs',-1)">
                        <v-icon dark>remove</v-icon>
                    </v-btn>
                </v-flex>

                <v-flex v-if="wideenough()" xs2>
                    <v-subheader class="display-1">Extras</v-subheader>
                </v-flex>
                <v-flex v-else xs2>
                    <v-subheader class="display-1">E</v-subheader>
                </v-flex>

                <v-flex xs2>
                    <v-text-field class="ma-0 pa-0" v-model="extras" mask="##" label="Extras" outline></v-text-field>
                </v-flex>
                <v-flex xs8>
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

                <v-flex v-if="wideenough()" xs2>
                    <v-subheader class="display-1">{{targetLabel}}</v-subheader>
                </v-flex>
                <v-flex v-else xs2>
                    <v-subheader class="display-1">{{targetLabelAbbr}}</v-subheader>
                </v-flex>

                <v-flex xs2>
                    <v-text-field class="ma-0 pa-0" v-model="target" mask="###" @label="targetLabel" outline></v-text-field>
                </v-flex>
                <v-flex xs8>
                    <v-btn fab dark color="green" @click="Update('Target',1)">
                        <v-icon dark>add</v-icon>
                    </v-btn>
                    <v-btn fab dark color="red" @click="Update('Target',-1)">
                        <v-icon dark>remove</v-icon>
                    </v-btn>
                </v-flex>

                <v-flex v-if="wideenough()" xs2>
                    <v-subheader class="display-1">Status</v-subheader>
                </v-flex>
                <v-flex v-else xs2>
                    <v-subheader class="display-1">S</v-subheader>
                </v-flex>

                <v-flex xs10>
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
import VueScreenSize from 'vue-screen-size'
export default {
    name: 'App',
    mixins: [VueScreenSize.VueScreenSizeMixin],
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
            targetLabel: "Projected",
            targetLabelAbbr: "P",
            data: null,
            mqtt_connection: {
                host: 'ws://' + location.hostname,
                port: 9001,
                connectTimeout: 4000,
                reconnectPeriod: 4000,
                clientId:'vue-scoreboard-' + Math.random().toString(16).substr(2, 8),
                username:'onfield',
                password:'onfield'
            }
        }
    },
    mqtt: {

    },
    methods: {
        wideenough() {
            return this.$vssWidth > 768;
        },
        xs4() {
            return this.$vssWidth > 768 ? "xs4" : "xs1"
        },
        xs5() {
            return this.$vssWidth > 768 ? "xs5" : "xs8"
        },
        Refresh() {
            if (this.$mqtt.connected) {
                var status = {
                    Source: "OnFieldApplet",
                    MatchID: 42166, 
                    Innings : this.firstInnings ? 1 : 2, 
                    Total: this.$store.state.match.total, 
                    Wickets: this.$store.state.match.wickets,
                    Overs: this.$store.state.match.overs, 
                    Extras: this.$store.state.match.extras, 
                    Target: this.$store.state.match.target,
                    Projected: this.$store.state.match.target,
                    Striker:  this.$store.state.match.striker,
                    NonStriker:  this.$store.state.match.nonstriker,
                    DLS: 0, 
                    LastMan: 0, 
                    LastWicket: 0
                }

                this.$mqtt.publish("/onfield/scoreboard", JSON.stringify(status))
            } else {
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
            }
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
            this.$store.commit('setStriker', '0')
            this.$store.commit('setNonStriker', '0')
        },
        CalculateProjected(field) {
            if (this.firstInnings && (field == 'Total' || field == 'Extras' || field == 'Overs')) {
                var rate = this.total / Math.max(this.overs, 1);
                var projected = Math.ceil(this.maximumOvers * rate).toFixed(0);

                this.$store.commit('setTarget', projected)

                return true
            }

            return false
        },
        Update(field, n) {
            this.$store.commit(field, n)
            this.CalculateProjected(field)
            this.Refresh()
        },
        changedOvers( /*value*/ ) {
            if (this.CalculateProjected('Overs')) {
                this.Refresh()
            }
        },
        changedInnings(value) {
            if (value) {
                this.targetLabel = 'Projected'
                this.targetLabelAbbr = 'P'
                this.Reset()
            } else {
                var n = this.total + 1

                this.targetLabel = 'Target'
                this.targetLabelAbbr = 'T'

                this.$store.commit('setTarget', n + '')
                this.$store.commit('setTotal', '0')
                this.$store.commit('setWickets', '0')
                this.$store.commit('setOvers', '0')
                this.$store.commit('setExtras', '0')
                this.$store.commit('setStriker', '0')
                this.$store.commit('setNonStriker', '0')
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
        },
        striker: {
            get() {
                return this.$store.state.match.striker
            },
            set(value) {
                this.$store.commit('setStiker', value)
            }
        },
        nonstriker: {
            get() {
                return this.$store.state.match.nonstriker
            },
            set(value) {
                this.$store.commit('setNonStriker', value)
            }
        }
    }
}
</script>
