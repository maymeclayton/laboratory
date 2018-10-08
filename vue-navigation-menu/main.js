var app = new Vue({

    el: '#app',

    data: {

        active: ''

    },

    methods: {

        makeActive: function(item) {

            this.active = item;

        }

    }

})
