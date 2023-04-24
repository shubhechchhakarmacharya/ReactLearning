const Show = (props) =>{
    console.log(props);

    const render = props.form.map((final) =>{
        return(
            <div>
                <h2>Getting data from another jsx using props.</h2>
                <p>Name: {final.name}</p>
                <p>Post: {final.post}</p>
            </div>
        )
    })
    return(
        <div>{render}</div>
    )
}
export default Show;
