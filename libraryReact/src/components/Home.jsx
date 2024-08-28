import { useSelector } from "react-redux";
import Book from "./Book.jsx";

function Home(){
    let data=useSelector((store)=>store.books.items);
    let genre=[data[0].genre[0]];
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
    let popularBooks=[]
    for(let i=0;i<1;i++){
        popularBooks.push(data[Math.floor(50*Math.random())]);
    }
    return (
        <section id="homeSection">
            <h1 style={{textAlign:"center",fontSize:"2.2rem"}}>Welcome to Online Library</h1>
            <div>
                <div>
                    <div id="aboveMarquee">Books by Genre: </div>
                    <marquee>
                        <div>
                            {genre.map((genre,index)=><span key={index}>{genre}</span>)}
                        </div>
                    </marquee>
                </div>
                <div>
                    <div id="popularBooks">
                        <h2 style={{textAlign:"center"}}>Popular Book</h2>
                        <hr></hr>
                        {popularBooks.map((book,index)=><Book key={index} data={book}/>)}
                    </div>
                    <div id="recentAddedBook">
                        <h2 style={{textAlign:"center"}}>Recent Book</h2><hr></hr>
                        {<Book data={data[data.length-1]}/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;