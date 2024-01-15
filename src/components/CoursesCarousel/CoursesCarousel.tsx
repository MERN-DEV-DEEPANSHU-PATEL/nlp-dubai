
//import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CoursesCarousel = () => {
  const item = {
    items : [
       <img src={"case-detail.jpg"} style={{height: "100vh", width: "98vw"}} />,
       <img src={"case-detail.jpg"} style={{height: "100vh", width: "98vw"}} />,
       <img src={"case-detail.jpg"} style={{height: "100vh", width: "98vw"}} />
    ]
  }
  const options = {
    items:1,
    nav:true,
    rewind:true,
    autoplay:true 
  }

  return(
    <div className='container'>
     {item.items}
    </div>
  )
} 


export default CoursesCarousel