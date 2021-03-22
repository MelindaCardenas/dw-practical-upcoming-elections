const Search = function(state, place){
    this.state = state;
    this.place = place;
    this.errors = [];
}

Search.prototype.validateUserInput = function() {
    if(this.state === "" || this.place === ""){
        this.errors.push("Please enter a place and state")
    }
}

module.exports = Search