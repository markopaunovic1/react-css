import './gallery.css'
import cat1 from '../assets/img/cat1.jpg'
import cat2 from '../assets/img/cat2.jpg'
import cat3 from '../assets/img/cat3.webp'
import cat4 from '../assets/img/cat4.jpg'
import cat5 from '../assets/img/cat5.jpg'
import { useState } from 'react'
import Bordered from './Bordered'

const Gallery = () => {
    const [columns, setColumns] = useState(2);

    let imagesClass = 'images';

    switch(columns) {

        case 1 : 
        imagesClass += ' one-column'
        break;

        case 2:
        imagesClass += ' two-column'
        break;

        case 3:
        imagesClass += ' three-column'
        break;

    default:
        imagesClass += ' two-column'
    }

    return (
        <div className='gallery'>
            
            <Bordered>
                <section>
                    <button onClick={() => setColumns(1)}> one column</button>
                    <button onClick={() => setColumns(2)}>two column</button>
                    <button onClick={() => setColumns(3)}>three column</button>
                </section>
            </Bordered>

            <section className={imagesClass}>
                <img src={cat1} alt="cat 1" />
                <img src={cat2} alt="2" />
                <img src={cat3} alt="3" />
                <img src={cat4} alt="4" />
                <img src={cat5} alt="5" />
            </section>

            
        </div>
    )
}

export default Gallery;