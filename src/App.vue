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
                        +4
                    </v-btn>
                    <v-btn fab dark color="indigo" @click="Update('Total',6)">
                        +6
                    </v-btn>
                </v-flex>

                <v-flex v-if="wideenough()" xs2>
                    <v-text-field class="ma-0 pa-0" v-model="b1Name" label="Batsman I Name" outline></v-text-field>
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
                        +4
                    </v-btn>
                    <v-btn fab dark color="indigo" @click="Update('Striker',6)">
                        +6
                    </v-btn>
                    <v-btn fab dark color="indigo" @click="Out('Striker')">
                        W
                    </v-btn>
                </v-flex>

                <v-flex v-if="wideenough()" xs2>
                    <v-text-field class="ma-0 pa-0" v-model="b2Name" label="Batsman II Name" outline></v-text-field>
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
                        +4
                    </v-btn>
                    <v-btn fab dark color="indigo" @click="Update('NonStriker',6)">
                        +6
                    </v-btn>
                    <v-btn fab dark color="indigo" @click="Out('NonStriker')">
                        W
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
                        +5
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

                <v-flex xs2>
                    <v-btn color="green" @click="Refresh(true)">Refresh</v-btn>
                </v-flex>

                <v-flex xs2>
                    <v-switch v-model="firstInnings" label="1st Innings" @change="changedInnings"></v-switch>
                </v-flex>

                <v-flex v-if="this.undoStack.length > 0" xs4>
                    <v-btn color="red" @click="Reset()">Reset</v-btn>
                    <v-btn color="blue" @click="Undo()">Undo</v-btn>
                </v-flex>
                <v-flex v-else xs4>
                    <v-btn color="red" @click="Reset()">Reset</v-btn>
                </v-flex>

                <v-flex xs4>
                    <v-select outline v-model="maximumOvers" :items="overs_items" label="Match Type" @change="changedOvers"></v-select>
                </v-flex>

                <v-flex xs4>
                    <v-slider v-model="brightness" max="225" min="75" step="5" label="Brightness" color="red green" thumb-label="always" ticks @change="changeBrightness">

                    </v-slider>
                </v-flex>
                <v-flex xs8>
                    
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
            identity: {id: 'windows'},
            port: '',
            status: "Initialized",
            firstInnings: true,
            light: true,
            brightness: 175,
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
            undoStack: []
        }
    },
    mqtt: {
    },
    mounted: function() {
        var port = this.port
        if (this.Identify() != port) {
            this.Identify() // Try the other port...
        }

        if (this.port != '') {
            this.$mqtt.on('message', (topic, message) => {
                const score = JSON.parse(message);

                if (score.Source == this.$mqtt.options.clientId) return;
                if (topic != '/onfield/scoreboard') return;

                this.$store.commit('setTotal', score.Total);
                this.$store.commit('setWickets', score.Wickets);
                this.$store.commit('setOvers', score.Overs);
                this.$store.commit('setExtras', score.Extras);
                this.$store.commit('setTarget', score.Target);
                this.$store.commit('setStriker', score.Striker);
                this.$store.commit('setNonStriker', score.NonStriker);                 
                this.$store.commit('setStrikerName', score.StrikerName);
                this.$store.commit('setNonStrikerName', score.NonStrikerName);                 
            })

            this.$nextTick(function() {
                this.$mqtt.subscribe("/onfield/scoreboard");   
            })
        }
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
        Identify() {
            var vm = this
            var url = "http://" + location.hostname + vm.port + "/healthcheck"

            this.axios.get(url)
                .then(response => {
                    vm.status = "OK"
                    vm.identity = response.data
                })
                .catch(e => {
                    vm.port = ':8380'
                    vm.identity = {id:'go'}
                    vm.status = e.message
                })

            return vm.port
        },
        Refresh(force) {
            var status = {
                Force: (typeof force !== 'undefined') ?  force : false,
                Source: this.$mqtt.options.clientId,
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
                StrikerName:  this.$store.state.match.strikerName,
                NonStrikerName:  this.$store.state.match.nonstrikerName,
                DLS: 0, 
                LastMan: 0, 
                LastWicket: 0
            }

            var vm = this

            if (this.$mqtt.connected) {
                this.$mqtt.publish("/onfield/scoreboard", JSON.stringify(status))
                vm.status = "OK"
                vm.data = ""
            } else {
                var url = "http://" + location.hostname + vm.port + "/api/v1/board"

                this.axios.put(url, status)
                    .then(response => {
                        vm.status = "OK"
                        vm.data = response.data
                    })
                    .catch(e => {
                        vm.status = e.message
                    })
            }
        },
        Push() {
            var s = {
                Innings : this.firstInnings ? 1 : 2, 
                Total: this.$store.state.match.total, 
                Wickets: this.$store.state.match.wickets,
                Overs: this.$store.state.match.overs, 
                Extras: this.$store.state.match.extras, 
                Target: this.$store.state.match.target,
                Projected: this.$store.state.match.target,
                Striker:  this.$store.state.match.striker,
                NonStriker:  this.$store.state.match.nonstriker,
                StrikerName:  this.$store.state.match.strikerName,
                NonStrikerName:  this.$store.state.match.nonstrikerName
            }

            if (this.undoStack.push(s) > 100) {
                this.undoStack.shift()
            }
        },
        Undo() {
            var score = this.undoStack.pop()

            if (score) {
                this.firstInnings = score.Innings == 1;
                this.$store.commit('setTotal', score.Total);
                this.$store.commit('setWickets', score.Wickets);
                this.$store.commit('setOvers', score.Overs);
                this.$store.commit('setExtras', score.Extras);
                this.$store.commit('setTarget', score.Target);
                this.$store.commit('setStriker', score.Striker);
                this.$store.commit('setNonStriker', score.NonStriker);                 
                this.$store.commit('setStrikerName', score.StrikerName);
                this.$store.commit('setNonStrikerName', score.NonStrikerName);                 
            }
        },
        Light() {
            var vm = this
            var url = "http://" + location.hostname + vm.port + "/api/v1/light?on=true"

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
            this.Push()
            this.$store.commit('setTotal', '0')
            this.$store.commit('setWickets', '0')
            this.$store.commit('setOvers', '0')
            this.$store.commit('setExtras', '0')
            this.$store.commit('setTarget', '0')
            this.$store.commit('setStriker', '0')
            this.$store.commit('setNonStriker', '0')
            this.$store.commit('setStrikerName', '#01')
            this.$store.commit('setNonStrikerName', '#02')
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
        Out(who) {
            this.Push()
            this.$store.commit('set' + who, '0')
            this.$store.commit('Wickets', 1)
            this.$store.commit('set' + who + "Name", 'Batsman #' + this.$store.state.match.wickets)
            this.Refresh()
        },
        Update(field, n) {
            this.Push()
            this.$store.commit(field, n)
            this.CalculateProjected(field)
            this.Refresh()
        },
        changedOvers( /*value*/ ) {
            if (this.CalculateProjected('Overs')) {
                this.Refresh()
            }
        },
        changeBrightness(/*value*/) {
            var vm = this
            var url = "http://" + location.hostname + vm.port + "/api/v1/brightness/" + this.brightness

            this.axios.get(url)
                .then(response => {
                    vm.status = "OK"
                    vm.data = response.data
                })
                .catch(e => {
                    vm.status = e.message
                })
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

                this.Push()
                this.$store.commit('setTarget', n + '')
                this.$store.commit('setTotal', '0')
                this.$store.commit('setWickets', '0')
                this.$store.commit('setOvers', '0')
                this.$store.commit('setExtras', '0')
                this.$store.commit('setStriker', '0')
                this.$store.commit('setNonStriker', '0')
                this.$store.commit('setStrikerName', '#01')
                this.$store.commit('setNonStrikerName', '#02')
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
        },
        b1Name: {
            get() {
                return this.$store.state.match.strikerName
            },
            set(value) {
                this.$store.commit('setStrikerName', value)
            }
        },
        b2Name: {
            get() {
                return this.$store.state.match.nonstrikerName
            },
            set(value) {
                this.$store.commit('setNonStrikerName', value)
            }
        }
    }
}
</script>
