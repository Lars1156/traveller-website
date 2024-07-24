import React, {useState} from "react";
import '../Pages/cssFiles/home.css';
// import '../image/lugu-lake-4648775_1920.jpg';
const Home = () =>{
    const [currentImage , setCurrentImage] = useState(0)
    // const images =[
    //     lugu-lake-4648775_1920.jpg,
    //     nature-1680255_1920.jpg,
    //     traveling-5152153_1920.jpg
    // ];
    const nextImage=()=>{
        setCurrentImage((currentImage + 1) % images.length);
    }
    const prevImage =()=>{
        setCurrentImage((currentImage-1 + images.length) % images.length)
    }
    return(
        <div className='home'>
            <div className='slider'>
                <div className={'slider-image'} style={{backgroundImage: `url(${images[currentImage]})`}}/>
                <button className="prev" onClick={prevImage}>❮</button>
                <button className="next" onClick={nextImage}>❯</button>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search for hotels..."/>
                <button>Search Hotels</button>
                <input type="text" placeholder="Search for restaurants..."/>
                <button>Search Restaurants</button>
            </div>
        </div>
    )
}
export default Home;