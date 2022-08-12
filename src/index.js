module.exports = function reverse (n) {
    n = Math.abs(n);
    n = n + "";
	return n.split("").reverse().join("");
}
