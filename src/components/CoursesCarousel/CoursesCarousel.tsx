
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CoursesCarousel = () => {
  const options = {
    items:1,
    loop: true,
    autoplayTimeout:3000,
    animateOut: "fadeOut",
    autoplay:true,
    nav:true,
    dots:true,
    margin: 10,
    responsive:{
      1100:{
        items:3,
      },
      724:{
        items:1
      },
      500:{
        items:1
      },
      370:{
        items:1,
        innerWidth:"100%",
        outerWidth:"100%"

      }
    }
  } 
  return(
  <div className='container'>
     <h1 className='heading'>Our Courses</h1>
    <OwlCarousel className='owl-theme' {...options} >
    <div className='item' >
         <img src={"blog-01-min.jpg"} style={{height:"200px"}} /> 
         <p>Certified Life Coaching</p>
    </div>
    <div className='item' >
         <img src={"case-detail.jpg"} style={{height:"200px"}} /> 
         <p >Advance Diploma in  NPL & Coaching</p>
    </div>
    <div className='item' >
       <img src={"case-studies-2-min-1.jpg"} style={{height:"200px"}} /> 
       <p >Certified NLP Practitioner & Coach</p>
    </div>
    <div className='item' >
        <img src={"case-studies-4-min.jpg"} style={{height:"200px"}} /> 
        <p>Certified NLP Master Practitioner</p>
    </div>
    
</OwlCarousel>;
  </div>
  ) 
} 


export default CoursesCarousel