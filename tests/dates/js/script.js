var text = document.getElementsByTagName("input")[0];
var step = 1800000;         // шаг для времени = 30 минутам
var WEEKDAYS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

function changeDateTimeOrder(timeText) {   // ф-ция модифицирует строку ввода и возвращает
  var arr = timeText.split(', ');  // формируем массив из строки ввода, разделитель - ","
  var newArr = new Array;     // промежуточный массив, который будем модифицировать
  var resultArr = new Array;  // результирующий массив

  for (var j = 0; j < arr.length; j++) {
    arr[j] = arr[j].replace(":",""); // убираем ":"
    newArr[j]= fromWeekToNumber(arr[j]) + ' ' + arr[j].substring(arr[j].indexOf(" ")+1);
  };

  newArr.sort( function(a,b) { // соритруем массив по возрастанию даты и времени
    if (getWeekNo(a) < getWeekNo(b)) { // если день недели a < дня недели b
      return -1
    } else { // если день недели a >= дня недели b
      if (getWeekNo(a) == getWeekNo(b)) { // если день недели a = дню недели b
        return getDateFromStr(a)-getDateFromStr(b); // сортируем по времени
      }
      else { // если день недели a > дня недели b
        return 1;
      }
    }
  });

  var decArrCount = arr.length - 1; // количество эл-то массива минус один

  var tire = false;            // предыдущая запись оканчивается символом "-"
  var coma = false;            // предыдущая запись оканчивается символом ","
  var tzpt = true;             //  предыдущая запись оканчивается символом ";"

  var currentTime = new Date();               // время текущай записи
  var nextTime = new Date();                  // время следующей записи
  var diffTime = new Date();                  // разница во времени между текущей и след. записями
  var resultString; // результирующая строка, содержащая преобразованый к нужному виду текст

  for (var i = 0; i < (decArrCount); i++) {

    var currentWeekNo = getWeekNo(newArr[i]);   // день недели текущей записи
    var nextWeekNo = getWeekNo(newArr[i+1]);    // день недели следующей записи

    currentTime = getDateFromStr(newArr[i]);
    nextTime = getDateFromStr(newArr[i+1]);

    var currentHH = getHH(currentTime);         // часы текущей записи
    var nextHH = getHH(nextTime);               // часы следующей записи
    var currentMM = getMM(currentTime);         // минуты текущей записи
    var nextMM = getMM(nextTime);               // минуты следующей записи

    diffTime = nextTime - currentTime;

    if (currentWeekNo == nextWeekNo) { // дни недели текущей и следующей записи совпадает

      if (diffTime == step) { // д.н. совпадают, разница во времени равна шагу

        if (tzpt) { // предыдущая запись оканчивается на ";"
          if (i == decArrCount-1) { // рассматривается последняя пара дат
            resultArr[i] = WEEKDAYS[currentWeekNo] + ': ' + currentHH + ":" +
              currentMM + '-' + nextHH + ":" + nextMM;
          } // рассматривается последняя пара дат
          else { // рассматривается непоследняя пара дат
            resultArr[i] = WEEKDAYS[currentWeekNo] + ': ' + currentHH + ":" + currentMM + '-';
            tire = true;
            tzpt = false;
            coma = false;
          } // рассматривается непоследняя пара дат
        } // предыдущая запись оканчивается на ";"
        else { // предыдущая запись оканчивается не на ";"
          if (coma) { // предыдущая запись оканчивается на ","
            if (i == decArrCount-1) { // рассматривается последняя пара дат
              resultArr[i] = currentHH + ":" + currentMM + '-' + nextHH + ":" +  nextMM;
            } else { // рассматривается непоследняя пара дат
              resultArr[i] = currentHH + ":" + currentMM + '-';
              tire = true;
              tzpt = false;
              coma = false;
            } // рассматривается непоследняя пара дат
          } // предыдущая запись оканчивается на ","
          else // предыдущая запись оканчивается не на "," ,";"
            if (tire) { // тире
              if (i == decArrCount-1) { // рассматривается последняя пара дат
                resultArr[i] = nextHH + ":" + nextMM;
              } // рассматривается последняя пара дат
            } // тире
            else console.log('ошибка в окончании предыдущей записи - нет "," ,";" или "-"');
        } // предыдущая запись оканчивается не на ";"
      } // д.н. совпадают, разница во времени равна шагу
      else { // д.н. совпадают, а разница во времени отличается от шага
        if (tzpt) { // предыдущая запись оканчивается на ";"
          if (i == decArrCount-1) { // рассматривается последняя пара дат
            resultArr[i] = WEEKDAYS[currentWeekNo] + ': ' + currentHH + ":" +
              currentMM + ', ' + nextHH + ":" + nextMM;
          } else { // рассматривается непоследняя пара дат
            resultArr[i] = WEEKDAYS[currentWeekNo] + ': ' + currentHH + ":" +
              currentMM + ', ';
            tire = false;
            tzpt = false;
            coma = true;
          } // рассматривается непоследняя пара дат
        } // предыдущая запись оканчивается на ";"
        else { // предыдущая запись оканчивается не на ";"
          if (coma) { // предыдущая запись оканчивается на ","
            if (i == decArrCount-1) { // рассматривается последняя пара дат
              resultArr[i] = currentHH + ":" + currentMM + ', ' + nextHH + ":" +
                nextMM;
            } else { // рассматривается непоследняя пара дат
              resultArr[i] = currentHH + ":" + currentMM + ', ';
              tire = false;
              tzpt = false;
              coma = true;
            } // рассматривается непоследняя пара дат
          } // предыдущая запись оканчивается на ","
          else { // предыдущая запись оканчивается не на ","
            if (tire) { // предыдущая запись оканчивается на "-"
              if (i == decArrCount-1) { // рассматривается последняя пара дат
                resultArr[i] = currentHH + ":" + currentMM + ', ' + nextHH + ":" + nextMM;
              } else { // рассматривается непоследняя пара дат
                resultArr[i] = currentHH + ":" + currentMM + ', ';
                coma = true;
                tire = false;
                tzpt = false;
              } // рассматривается непоследняя пара дат
           } // предыдущая запись оканчивается на "-"
          } // предыдущая запись оканчивается не на ","
        } // предыдущая запись оканчивается не на ";"
      } // д.н. совпадают, а разница во времени отличается от шага

    } // дни недели текущей и следующей записи совпадает
    else { // дни недели текущей и следующей записи не совпадает
      if (tzpt) { // предыдущая запись оканчивается на ";"
        if (i == decArrCount-1) { // рассматривается последняя пара дат
          resultArr[i] = WEEKDAYS[currentWeekNo] + ': ' + currentHH + ":" +
            currentMM + '; ' + WEEKDAYS[nextWeekNo] + ': ' + nextHH + ":" + nextMM;
        } else { // рассматривается непоследняя пара дат
          resultArr[i] = WEEKDAYS[currentWeekNo] + ': ' + currentHH + ":" +
            currentMM + '; ';
          tzpt = true;
          coma = false;
          tire = false;
        }
      } else { // предыдущая запись не оканчивается на ";"
          if (i == decArrCount-1) { // рассматривается последняя пара дат
            resultArr[i] = currentHH + ":" + currentMM + '; ' +
              WEEKDAYS[nextWeekNo] + ': ' + nextHH + ":" + nextMM;
          } else { // рассматривается непоследняя пара дат
            resultArr[i] = currentHH + ":" + currentMM + '; ';
            tzpt = true;
            coma = false;
            tire = false;
          }
      } // предыдущая запись не оканчивается на ";"
    } // дни недели текущей и следующей записи не совпадает
  }; // конец цикла

  resultString = "";
  for (var i = 0; i < resultArr.length; i++) {
    if (resultArr[i] != null ) {
      resultString = resultString + resultArr[i];
    }
  };
  return resultString;
};

function getDateFromStr (str) { // возвращает дату в формате Date из строки str
  var myTime = new Date();
  var myHoursLength = Number(str.indexOf(":")-str.indexOf(" ")-1);
  var myHours = Number( str.substr( str.indexOf(" ")+1, myHoursLength) );
  var myMinutes = Number( str.substr( str.indexOf(":")+1) );
  myTime.setHours(myHours, myMinutes, 0, 0);
  return myTime;
};

function getWeekNo(str) { // возвращает название дня недели вида "Пн" из строки
  var WeekNoStr = str.substr(0,2);
  return Number(WeekNoStr);
}

function fromWeekToNumber(weekDayName) { // возвращает номер дня недели из названия дня недели вида "Пн"
  for (var i = 0; i < WEEKDAYS.length; i++) {
    if ( WEEKDAYS[i] === weekDayName.substring(0,2) ) {
      return i;
      break;
    };
  };
};

function getMM(dTime) { // возврщает количество минут даты dTime в формате mm
  return ( (dTime.getMinutes()<10?'0':'') + dTime.getMinutes());
}

function getHH(dTime) { // возврщает часы минут даты dTime
  return dTime.getHours();
}
