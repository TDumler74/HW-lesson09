/* Задание 1
 Создайте стрелочную функцию, которая бы принимала
 массив и цифру,
 возвращала бы элемент массива под этим индексом.
 */

const arrayElementByIndex = (arr,index)=> arr[index];

const arr =["apple","orange","peach"];
console.log(arrayElementByIndex(arr,2));



/*
Задание 2 *
Создайте функцию, которая бы принимала бы следующие параметры:

код погоды
функция decode, которая дает расшифровку погоды по коду.
Функция должна возвращать строку, описывающую погоду.

Таблица соответствия код-описание:
SQ – шквал
PO – пыльный вихрь
FC - торнадо
BR – дымка (видимость от 1 до 9 км)
HZ – мгла (видимость менее 10 км)
FU – дым (видимость менее 10 км)
DS - пыльная буря (видимость менее 10 км)
SS - песчаная буря (видимость менее 10 км)
Подсказка: удобно использовать в одном из методов switch-case:
*/

const decode= (code) =>{ switch(code){
    case "SQ":
        return console.log("шквал");
    case "PO":
        return console.log("пыльный вихрь");
    case "FC":
        return console.log("торнадо");
    case "BR":
        return console.log("дымка (видимость от 1 до 9 км)");
    case "HZ":
        return console.log("мгла (видимость менее 10 км)");
    case "FU":
        return console.log("дым (видимость менее 10 км)");
    case "DS":
        return console.log("пыльная буря (видимость менее 10 км)");
    case "SS":
        return console.log("песчаная буря (видимость менее 10 км)");
    default: 
        return console.log(" ");
}
};
const weather = (code) =>{ 
    console.log(code),decode(code);
};
weather("SS");

//SS
 //песчаная буря (видимость менее 10 км)





