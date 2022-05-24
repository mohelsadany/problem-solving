var longestValidParentheses = function (s) {
    if (s.length <= 1) {
        return 0;
    }

    let openParentheses = [];
    let invalidParentheses = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // Store all opening parentheses
            openParentheses.push(i);
        } else {
            if (openParentheses.length) {
                // Remove all successfully closed parentheses
                openParentheses.pop();
            } else {
                invalidParentheses.add(i);
            }
        }
    }

    // Store any outstanding unclosed parentheses as invalid
    while (openParentheses.length) {
        invalidParentheses.add(openParentheses.pop());
    }

    // If the entire string was valid
    if (!invalidParentheses.size) {
        return s.length;
    } else {
        let longestValidString = 0,
            currentStringLength = 0;

        // Loop through the original string
        for (let i = 0; i <= s.length; i++) {
            // If this character is a part of a larger valid string
            if (i < s.length && !invalidParentheses.has(i)) {
                currentStringLength++;
            }
            // Reached invalid character or the end of the string
            else {
                // Store the length of this string (if its the longest found)
                longestValidString = Math.max(
                    longestValidString,
                    currentStringLength
                );
                currentStringLength = 0;
            }
        }
        return longestValidString;
    }
};