Int16Array.prototype.toJSON = function() {
    return Array.from(this);
};