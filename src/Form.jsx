import List from "./List";
class From extends React.Component {
    state = {
        name: "",
        post: ""
    }
    render() {
        return (
            <div className=" box-decoration-slice bg-gradient-to-r mt-5 from-indigo-600 to-pink-500 text-white rounded " >
                <form className=" px-2 ">
                    <label>Name</label> <br />
                    <input
                        className="rounded max-w- px-1"
                        placeholder="Enter your name"
                    /> <br />
                    <label>Post</label> <br />
                    <input
                        className="rounded max-w- px-1"
                        placeholder="Enter your post"
                    /> <br />
                    <button class=" rounded-md border-dashed border-2 border-indigo-200 border-y-indigo-500 mt-4 pt-1 pb-1 px-4">Submit</button>
                </form>
            </div>
        )
    }
}
export default From;