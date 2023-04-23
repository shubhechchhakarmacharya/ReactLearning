const Vehicle = {
    brand: "Tesla",
    year: "2020",
    color: "Red"
}
Myvehicle(Vehicle);
function Myvehicle(brand, color) {
    const message = `My ${Vehicle.brand} is ${Vehicle.color}`
    return (<div> {message} </div>)
}
export default Myvehicle;