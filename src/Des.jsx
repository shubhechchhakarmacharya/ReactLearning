const Vehicle= {
    brand : "Tesla",
    year : "2020",
    color : "Red"
}
Myvehicle(Vehicle);
export default function Myvehicle(brand, color){
    return (<div> `My ${brand} is ${color}`</div>)
}
