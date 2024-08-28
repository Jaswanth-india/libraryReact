import { useParams,Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails (){
    let data = useSelector((store)=>store.books.items);
    data=data[useParams().id-1];
    console.log(data);
    return(<>
        <div id="bookDetails">
            <div>
                <div>
                    <h1>Book Details</h1>
                    <div>
                        <div><img src={data.cover_image} width="100" height="100"/></div>
                        <table>
                        
                            <thead>
                                
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td>:</td>
                                    <td>{data.title}</td>
                                </tr>
                                <tr>
                                    <td>Author</td>
                                    <td>:</td>
                                    <td>{data.author}</td>
                                </tr>
                                <tr>
                                    <td>Publication Year</td>
                                    <td>:</td>
                                    <td>{data.publication_year}</td>
                                </tr>
                                <tr>
                                    <td>Genre</td>
                                    <td>:</td>
                                    <td>{data.genre}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{width:"100%",display:"flex",justifyContent:"center"}}><Link to="/books"><button>Return to Browse Books</button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default BookDetails;