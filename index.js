var person = require('./domain/person/persontype')
var Age = require('./domain/personbyage/personbyage')

var person1 = new person('Dona', '6403052107820001', '1982-07-21')

if (person1.getWeekType() === 'Weekday' || person1.getWeekType() === 'Weekend') {
    console.log(`${person1.name} lahir pada tipe minggu ${person1.getWeekType()}`)
  } else {
    console.log(`Tanggal lahir ${person1.name} bermasalah`)  
  }
  console.log(`Saat ini berumur ${person1.getAge()} tahun`)

var age1 = new Age('Dona', '6403052107820001', '1982-07-21');
console.log(`Merupakan seorang ${age1.personByAge()}`)