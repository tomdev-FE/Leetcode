/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
     function buildString(str) {
        const result = [];
        for (let char of str) {
            if (char === '#' && result.length > 0) {
                result.pop();
            } else if (char !== '#') {
                result.push(char);
            }
        }
        return result.join('');
    }

    const finalS = buildString(s);
    const finalT = buildString(t);

    return finalS === finalT;
};