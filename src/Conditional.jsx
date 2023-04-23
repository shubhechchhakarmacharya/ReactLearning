// eslint-disable-next-line
function Conditional() {
    const apply = ["Hatana", "Jeffry", "Moron"];
    apply.push("Grindeah")
    apply.push("Keorh")
    apply.pop()
    return apply.map((app) => {
        if (app.length >= 6) {
            console.log(app);
            return (
                <div>
                    <p>{app}</p>
                </div>
            );
        }

    });
}

export default Conditional;
