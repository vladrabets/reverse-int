module.exports = function reverse (n) {
    n = n.toString();
    n=+n.split('').filter(item => item!='-').reverse().join('');
    return n
}
