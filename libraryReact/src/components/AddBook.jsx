import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux";
import { addBook } from "../utils/reduxStore";

function AddBook(){
    let totalBooks=useSelector((store)=>store.books.items);
    let dispatch=useDispatch();
    function addBookFunc(){    
        if(document.querySelector("#titleInput").value && document.querySelector("#authorInput").value && document.querySelector("#yearInput").value && document.querySelector("#genreInput").value){
            let newBook={};
            newBook.id=totalBooks.length+1;
            newBook.title=document.querySelector("#titleInput").value;
            newBook.author=document.querySelector("#authorInput").value;
            newBook.publication_year=document.querySelector("#yearInput").value;
            newBook.genre=document.querySelector("#genreInput").value.split(",");
            newBook.cover_image="https://fakeimg.pl/667x1000/cc6600";
            newBook.description=document.querySelector("#descriptionInput").value;
            dispatch(addBook.addBook(newBook));
            document.querySelector("#titleInput").value="";
            document.querySelector("#authorInput").value="";
            document.querySelector("#yearInput").value="";
            document.querySelector("#genreInput").value=""
            document.querySelector("#descriptionInput").value="";
        }
    }
    useEffect(()=>{
        document.querySelector("form").addEventListener("submit",(e)=>{
            e.preventDefault()
        })
    })

    return(
        <div id="addBook">
            <div>
                <h1 style={{textAlign:"center"}}>Add a Book</h1>
                <small style={{textAlign:"center",display:"block"}}>Please fill the details of the book to get added</small>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <form style={{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:"50px",border:"5px double black",borderRadius:"10px",marginTop:"40px"}}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td>:</td>
                                    <td><input type="text" id="titleInput" required/></td>
                                </tr>
                                <tr>
                                    <td>Author Name</td>
                                    <td>:</td>
                                    <td><input type="text" id="authorInput" required/></td>
                                </tr>
                                <tr>
                                    <td>Publication Year</td>
                                    <td>:</td>
                                    <td><input type="number" id="yearInput" required/></td>
                                </tr>
                                <tr>
                                    <td>Genre</td>
                                    <td>:</td>
                                    <td><input type="text" id="genreInput" required/></td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>:</td>
                                    <td><textarea id="descriptionInput"></textarea></td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{width:"100%",marginTop:"50px",display:"flex",justifyContent:"center"}} onClick={addBookFunc}><Link to="/"><button>Submit</button></Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBook;