
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


function isMeetingWithinWorkingHours(startOfWork, endOfWork, startOfMeeting, duration) {
  // Разбиваем время на часы и минуты
  const [startOfWorkHours, startOfWorkMinutes] = startOfWork.split(':').map(Number);
  const [endOfWorkHours, endOfWorkMinutes] = endOfWork.split(':').map(Number);
  const [startOfMeetingHours, startOfMeetingMinutes] = startOfMeeting.split(':').map(Number);

  // Преобразуем время начала в минуты от начала суток
  const startOfWorkTotalMinutes = startOfWorkHours * 60 + startOfWorkMinutes;
  const endOfWorkTotalMinutes = endOfWorkHours * 60 + endOfWorkMinutes;
  const startOfMeetingTotalMinutes = startOfMeetingHours * 60 + startOfMeetingMinutes;

  // Проверяем, если время начала встречи + продолжительность встречи больше времени окончания рабочего дня
  if (startOfMeetingTotalMinutes + duration > endOfWorkTotalMinutes) {
      return false;
  }

  // Проверяем, если время начала встречи меньше времени начала рабочего дня
  if (startOfMeetingTotalMinutes < startOfWorkTotalMinutes) {
      return false;
  }

  return true;
}

