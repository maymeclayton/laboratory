let app = new Vue({

    el: "#app",

    data: {
        show: 'grid'
    },

    computed: {

    },

    methods: {





        pickGrid: function () {
            this.pickView('grid');
        },

        pickList: function () {
            this.pickView('list');
        },

        pickView: function (style) {
            this.show = style;
        }


    }



});
