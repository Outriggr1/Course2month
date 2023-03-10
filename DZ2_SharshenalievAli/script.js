//Первое задание
var arr = [10, 20, 30, 50, 235, 3000 ];
for (var elem of arr){
    if(elem.toString()[0] === '1' || elem.toString()[0] === '2' || elem.toString()[0] === '5'){
        console.log(elem)
    }
}

//Второе задание
 for (var i = 20; i >= 0; i--) {
     console.log(i)
 }

 //Третье задание
var trafficlights = prompt('Введите цвет светофора (желтый, красный, зеленый)').toLowerCase().trim()

 var colors = {
     red: 'красный',
     yellow: 'желтый',
     green: 'зеленый',
 }

 switch (trafficlights) {
     case colors.red:
         alert('СТОЙ')
         break
     case colors.yellow:
         alert('ЖДИ')
         break
     case colors.green:
         alert('ИДИ')
         break
     default:
         alert('Ошибка')
 }