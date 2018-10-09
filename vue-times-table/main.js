let app = new Vue({

    el: "#app",

    data: {
        minInput: 1,
        maxInput: 20,
        rowInput: 5,
        colInput: 6,
        numberOfRows: 5,
        numberOfColumns: 6,
        showRowError: false,
        showColError: false
    },

    methods: {

        validateInput: function () {

            // Validate input (?)
            //   should be integers
            if (Number.isInteger(this.rowInput)) {
                this.showRowError = false;
            }
            else {
                this.showRowError = true;
            }
            if (Number.isInteger(this.colInput)) {
                this.showColError = false;
            }
            else {
                this.showColError = true;
            }

            //   should be between this.minInput and this.maxInput
            if (this.rowInput > this.maxInput || this.rowInput < this.minInput) {
                this.showRowError = true;
            }
            else {
                this.showRowError = false;
            }
            if (this.colInput > this.maxInput || this.colInput < this.minInput) {
                this.showColError = true;
            }
            else {
                this.showColError = false;
            }

            // Update the fields that draw the table (if appropriate)
            if (!this.showColError && !this.showRowError) {
                this.numberOfRows = this.rowInput;
                this.numberOfColumns = this.colInput;
            }

        }

    }

});
