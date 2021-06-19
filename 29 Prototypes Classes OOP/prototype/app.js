String.prototype.yell = function() {
    return `OMG!!!! ${this.toUpperCase()}`;
};

//can override preexisting methods
Array.prototype.pop = function() {
    return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!";
};