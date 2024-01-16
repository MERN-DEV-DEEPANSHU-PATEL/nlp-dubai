import "./NlpTrainer.scss"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const NlpTrainer = () => {
    const videoIds = ['ch_5Xsg5YGA', 'bVidnMRRZG4', '0UCGBsNNyjs'];
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
        <>
         <h1 className="Trainer-heading">Vikram Dhar NLP Trainer</h1>
        <div style={{ textAlign: 'center',  }}>
        {videoIds.map((videoId) => (
          <div key={videoId} style={{ display: 'inline-block', margin: '50px' }}>
            <iframe
              width="300"
              height="250"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube Video ${videoId}`}
               
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

    <div className="Event-gallery">
         <h1 className='Trainer-heading'>Event Gallery</h1>  
      <OwlCarousel className='owl-theme' {...options} >   
           <div>
               <img src={"DSC_0181.jpg"} style={{height:"250px",  }} /> 
           </div>
           <div>
               <img src={"DSC_0185.jpg"} style={{height:"250px",}} /> 
           </div>
           <div>
              <img src={"DSC_3125.jpg"} style={{height:"250px",}} /> 
           </div>
          <div>
             <img src={"group.jpg"} style={{height:"250px", }} /> 
          </div>
    
    </OwlCarousel>;
  </div>

      </>
    )
}

export default NlpTrainer