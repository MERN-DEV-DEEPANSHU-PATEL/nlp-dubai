
import  { useState } from 'react';
import "./Video.scss"

const VideoPlayer = ({ videoUrl, posterUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div>
      <video
        controls
        width="230"
        height="200"
        src={videoUrl}
        poster={posterUrl}
        onClick={handleTogglePlay}
      >
      </video>
    </div>
  );
};

const Video = () => {
  const videos = [
    {
      videoUrl: 'https://www.nlptrainingdubai.com/wp-content/uploads/2019/02/Very-Efficient-and-Effective-way-to-use-NLP-tools-Dulce-Maria-Wellness-Coach.mp4',
      posterUrl: '/wp-content/uploads/2023/10/vimage.jpg',
    },
    {
      videoUrl: 'https://www.nlptrainingdubai.com/wp-content/uploads/2019/02/Tricks-and-Trades-of-NLP-through-Learning-By-Doing-Deepak-Gulati-Founder-Yellow-Balcony-Events.mp4',
      posterUrl: '/wp-content/uploads/2023/10/2img.jpg',
    },
    {
      videoUrl: 'https://www.nlptrainingdubai.com/wp-content/uploads/2019/02/Testimonial-by-Seema-Vyas-Sr.-Specialist.mp4',
      posterUrl: '/wp-content/uploads/2023/10/vimage.jpg',
    },
    {
      videoUrl: 'https://www.nlptrainingdubai.com/wp-content/uploads/2019/02/Testimonial-by-Vijay-Mudaliar-HR-Professional.mp4',
      posterUrl: '/wp-content/uploads/2023/10/2img.jpg',
    },
  ];

  return (
    <div className='container'>
    <h1 className='Video-Testimonials-heading'>Video Testimonials</h1>
    <div className='Video-container'>
      {videos.map((video, index) => (
        <VideoPlayer
          key={index}
          videoUrl={video.videoUrl}
          posterUrl={video.posterUrl}
        />
      ))}
    </div>
   </div>
  );
};

export default Video;