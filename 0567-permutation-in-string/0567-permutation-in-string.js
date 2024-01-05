/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = (s1, s2) => {
    let windowStart = 0,
        matched = 0,
        charFrequency = {};

    for (let i = 0; i < s1.length; i++) {
        const chr = s1[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
        const rightChar = s2[windowEnd];
        if (rightChar in charFrequency) {
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }

        while (matched === Object.keys(charFrequency).length) {
            if (windowEnd - windowStart + 1 === s1.length) {
                return true;
            }

            let leftChar = s2[windowStart];
            windowStart += 1;

            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }
    }
    return false;
}
