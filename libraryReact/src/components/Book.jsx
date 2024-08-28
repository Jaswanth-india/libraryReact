import { Link } from "react-router-dom"

function Book(props){
    return(
        <>
            <div>
                <div><Link to={"/books/bookDetails/"+props.data.id}><img src={props.data.cover_image}/></Link></div>
                <div>
                    <h2>{props.data.title}</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Author</td>
                                <td>:</td>
                                <td>{props.data.author}</td>
                            </tr>
                            <tr>
                                <td>Year of Publication</td>
                                <td>:</td>
                                <td>{props.data.publication_year}</td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td>:</td>
                                <td>{props.data.genre.map((data)=>data+", ")}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>:</td>
                                <td>{props.data.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div title="Please click on the image of the book to view Book Details Page">i</div>
            </div>
        </>
    )
}

export default Book;