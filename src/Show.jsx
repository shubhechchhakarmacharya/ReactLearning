const Show = (props) =>{
    console.log(props);

    const render = props.list.map((final) =>{
        return(
            <div>
                <h2>Getting data from another jsx using props.</h2>
                <p>{final.name}</p>
                <p>{final.post}</p>
            </div>
        )
    })
    return(
        <div>{render}</div>
    )
}
export default Show;
