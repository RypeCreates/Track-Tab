// General delay in milliseconds.
var delay = function(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}