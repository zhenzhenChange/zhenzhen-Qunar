let defaultCity = '桂林'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}
export default {
  city: defaultCity
}
