
// Функция 1//
function calculatingString(string, length) {
    if (string.length >= length) {
        return false;
    }

    if (string.length <= length) {
        return true;
    }
}


// Функция 2//
function checkPalindrome(string = '') {
    string = string.replaceAll(' ', '').toLowerCase();

    let reversedline = '';
    for (let i = string. length - 1; i >= 0; i--) {
        reversedline += string[i];
    }

    return string === reversedline;
}

// Функция 3//
function extractNumbers(string) {
    let result = '';

    for (i = 0; i<=string.length - 1; i++) {
        if (Number.isNaN(parseInt(string[i], 10)) === false) {
            result += string[i]
        }
    }
    return result === '' ? NaN : Number(result);
}
