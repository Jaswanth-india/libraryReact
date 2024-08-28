import { useSelector } from "react-redux";
import { useState,useRef } from "react";
import Book from "./Book.jsx";
import { Link,useParams } from "react-router-dom";

function BookList(){
    let colouredButton=useRef(0);
    let data=useSelector((store)=>store.books.items);
    let [filteredBooks,setFilteredBooks]=useState(data);
    let genre=[data[0].genre[0]];
    let paramData=useParams();
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data[i].genre.length;j++){
            let includes=false;
            for(let k=0;k<genre.length;k++){
                if(data[i].genre[j].includes(genre[k])){
                    includes=true;
                    break;
                }
            }
            if(!includes){
                genre.push(data[i].genre[j]);
            }
        }
    }
    let filteredData=[];
        for(let i=0;i<data.length;i++){
            for(let j=0;j<data[i].genre.length;j++){
                if(paramData.category==data[i].genre[j]){
                    filteredData.push(data[i]);
                }
            }
        }
    filteredBooks=filteredData
    function filterByGenre(e){
        e.target.style.backgroundColor="lightgreen";
        let filteredData=[];
        for(let i=0;i<data.length;i++){
            for(let j=0;j<data[i].genre.length;j++){
                if(e.target.innerHTML==data[i].genre[j]){
                    filteredData.push(data[i]);
                }
            }
        }
        if(colouredButton.current!=0){
            colouredButton.current.style.backgroundColor="rgba(197, 173, 173, 0.74)";
        }
        colouredButton.current=e.target
        setFilteredBooks(filteredData);
    }
    return (
        <section id="bookList">
            <div>
                Filter by Genre: {genre.map((item,index)=><Link to={"/books/"+item} key={index}><button key={index} onClick={(e)=>{filterByGenre(e)}}>{item}</button></Link>)}
            </div>
            <div>
                {filteredBooks.map((book)=><Book key={book.id} data={book}/>)}
            </div>
        </section>
    )
}

export default BookList;