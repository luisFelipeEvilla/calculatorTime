/* script que calcula la diferencia de tiempo entre dos fechas introducidas
por el usuario*/
const init = getElementById('initButton')
init.addEventListenner("click",init)

function ini() {
/*se le pide al usuario que introduzca los valores de la primera
fecha en el formato AÑO - MES - DÍA*/
  let year1 = prompt("type the year of the date1")
  let month1 = prompt("type the month of the date1")
  let day1 = prompt("type the day of the date1")

  /*se le pide al usuario que introduzca los valores de la segunda
  fecha en el formato AÑO - MES - DÍA*/
  let yar2 = prompt("type the year of the date2")
  let day2 = prompt("type the day of the date2")
  let month2 = prompt("type the month of the date2")

/*Se almacenan las 2 fechas en variables */
  let date1 = convertToDate(year1,month1 -1 ,day1)
  let date2 = convertToDate(year2,month2 -1 ,day2)

// se calcula la diferencia de tiempo de ambas fechas(EL RESULTADO SE DA EN NANOSEGUNDOS)
  let difference = date2 - date1

/*Se pasa el resultado de la diferencia de tiempo de ambas
fechas de nano segundos a otras unidades*/
  let minutes = difference / 60
  let seconds = difference / 60
  let hours = difference / 60
  let days = difference / 24
  let years = difference / 12


  function convertToDate(year,month,day){
    let this.year = year
    let this.motnh = month
    let this.day = day
    return new Date(this.year,this.month,this.day)
  }
}
