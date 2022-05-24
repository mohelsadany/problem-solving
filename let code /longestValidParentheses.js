var longestValidParentheses = function (s) {
    if (s.length <= 1) {
        return 0;
    }

    let longestString = 0;
    let potentiallyValidStrings = [];

    // Loop through the input string
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // Increment all potentially valid strings by 1
            potentiallyValidStrings = potentiallyValidStrings.map(
                (possibility) => {
                    possibility.stringLength += 1;
                    return possibility;
                }
            );

            // Add a potentially valid string starting at the current point
            potentiallyValidStrings.push({
                start: i,
                stringLength: 1,
            });
        } else {
            // Decrease all potentially valid strings by 1
            potentiallyValidStrings = potentiallyValidStrings.map(
                (possibility) => {
                    possibility.stringLength -= 1;
                    return possibility;
                }
            );

            // Run through all of the potentially valid strings that are now correctly closed (and are therefore all valid)
            potentiallyValidStrings
                .filter((possibility) => possibility.stringLength == 0)
                .forEach((possibility) => {
                    // Store the length of the string (if it's the longest one found so far)
                    longestString = Math.max(
                        longestString,
                        i - possibility.start + 1
                    );
                });

            // Remove any now-invalid potential strings
            potentiallyValidStrings = potentiallyValidStrings.filter(
                (possibility) => possibility.stringLength >= 0
            );
        }
    }

    return longestString;
};