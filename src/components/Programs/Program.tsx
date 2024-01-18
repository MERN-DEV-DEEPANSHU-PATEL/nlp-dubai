
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Program.scss"


const CardSlider = () => {
  const options = {
    items:1,
    loop: true,
    autoplayTimeout:3000,
    animateOut: "fadeOut",
    autoplay:true,
    nav:true,
    dots:true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
    <div className='p-5'>
    <h1 className='upcoming-heading'> Our Program</h1>
    <div className='bg-container'>
        
      <OwlCarousel className="owl-theme" {...options}>
        
        <div className="program-card">
            <img src='imgpsh_fullsize_anim-5.png' />
          <div className='text-container'>
            <h3 className='program-heading'> <a> Certified NLP Master Practitioner </a> </h3>
             <p className='program-title'> Our Level 2 (formerly ACTP) ICF Accredited Coaching Education program includes Completion of the </p>
           </div>
          </div>  

          <div className="program-card">
            <img src='people-1979261_1920-1.jpg' />
          <div className='text-container'>
             <h3 className='program-heading'> <a> Certified Emotional Intelligence Coach Practitioner – Feb 2024 Batch </a> </h3>
             <p className='program-title'>Certified Program (ICF &amp; IAPCCT approved) &#8211;  Feb 2024 Batch Emotional Intelligence Coach Practitioner 29...</p> 
           </div>
          </div>  

          <div className="program-card">
            <img src='pexels-fauxels-3184419-1-scaled.jpg' />
          <div className='text-container'>
             <h3 className='program-heading'> <a>  Certified NLP Practitioner and Coach Workshop – Feb 2024</a> </h3>
             <p className='program-title'> Certified NLP Practitioner and Coach &#8211; Feb 2024 in Dubai Integrated Program With Six Certifications</p>
           </div>
          </div>
    
          <div className="program-card">
            <img src='ICF-ACC-program.jpg' />
          <div className='text-container'>
             <h3 className='program-heading'> <a> YES TO INSPIRED MINDS</a> </h3>
             <p className='program-title'>YES TO INSPIRED MINDS Youth Empowerment Program for Children between 10 &amp; 16 years Empower</p>
            </div>
          </div>

          <div className="program-card">
            <img src='kids.png' />
          <div className='text-container'>
             <h3 className='program-heading'> <a> YES TO INSPIRED MINDS</a> </h3>
             <p className='program-title'>YES TO INSPIRED MINDS Youth Empowerment Program for Children between 10 &amp; 16 years Empower</p>
            </div>
          </div>

          <div className="program-card">
            <img src='programImages3.jpg' />
          <div className='text-container'>
             <h3 className='program-heading'> <a> YES TO INSPIRED MINDS</a> </h3>
             <p className='program-title'>YES TO INSPIRED MINDS Youth Empowerment Program for Children between 10 &amp; 16 years Empower</p>
            </div>
          </div>

          <div className="program-card">
            <img src='programImages4.jpg' />
          <div className='text-container'>
             <h3 className='program-heading'> <a> Certified Wellbeing Coach & Mindfulness Practitioner</a> </h3>
             <p className='program-title'>Certified Wellbeing Coach & Mindfulness Practitioner Radisson Blu Hotel, Dubai Deira Creek 8, 9, 10,…	</p>
            </div>
          </div>
    
       
      </OwlCarousel>
      </div> 
      </div> 
      </>
  );
  
};

export default CardSlider;
