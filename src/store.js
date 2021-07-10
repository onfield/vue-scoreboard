import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    match: {
      total: 0,
      wickets: 0,
      overs: 0,
      extras: 0,
      target: 0,
      striker: 0,
      nonstriker: 0
    }
  },
  mutations: {
    Total(state, n) {
      var x = state.match.total + n;
      if (x >= 0 && x < 1000) {
        state.match.total += n;
      }
    },
    setTotal(state, n) {
      var x = parseInt(n, 10);
      if (x >= 0) {
        state.match.total = x;
      }
    },
    Wickets(state, n) {
      var x = state.match.wickets + n;
      if (x >= 0 && x < 11) {
        state.match.wickets += n;
      }
    },
    setWickets(state, n) {
      var x = parseInt(n, 10);
      if (x >= 0) {
        state.match.wickets = x;
      }
    },
    Overs(state, n) {
      var x = state.match.overs + n;
      if (x >= 0 && x < 100) {
        state.match.overs += n;
      }
    },
    setOvers(state, n) {
      var x = parseInt(n, 10);
      if (x >= 0) {
        state.match.overs = x;
      }
    },
    Extras(state, n) {
      var x = state.match.extras + n;
      if (x >= 0 && x < 100) {
        state.match.extras += n;

        x = state.match.total + n;
        if (x >= 0 && x < 1000) {
          state.match.total += n;
        }
      }
    },
    setExtras(state, n) {
      var x = parseInt(n, 10);
      if (x >= 0) {
        state.match.extras = x;
      }
    },
    Target(state, n) {
      var x = state.match.target + n;
      if (x >= 0 && x < 1000) {
        state.match.target += n;
      }
    },
    setTarget(state, n) {
      var x = parseInt(n, 10);
      if (x >= 0) {
        state.match.target = x;
      }
    },
    Striker(state, n) {
      var x = state.match.striker + n;
      if (x >= 0 && x < 1000) {
        state.match.striker += n;

        x = state.match.total + n;
        if (x >= 0 && x < 1000) {
          state.match.total += n;
        }
      }
    },
    setStriker(state, n) {
      var x = parseInt(n, 10);
      if (x >= 0) {
        state.match.striker = x;
      }
    },
    NonStriker(state, n) {
      var x = state.match.nonstriker + n;
      if (x >= 0 && x < 1000) {
        state.match.nonstriker += n;

        x = state.match.total + n;
        if (x >= 0 && x < 1000) {
          state.match.total += n;
        }
      }
    },
    setNonStriker(state, n) {
      var x = parseInt(n, 10);
      if (x >= 0) {
        state.match.nonstriker = x;
      }
    }
  },
  actions: {

  }
})
