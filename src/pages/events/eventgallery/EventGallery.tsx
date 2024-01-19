import { useEffect, useRef, useState } from "react";
import Heading from "../../../components/page-heading/Heading";
import "./EventGallery.scss";
import EventGalleryData from "./EventGalleryData";
import LazyImg from "../../../components/lazyloadImg/LazyImg";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

const EventGallery = () => {
  const [selectedId, setSelectedId] = useState(null);
  const viewBox = useRef(null);

  return (
    <div className="event-gallery">
      <Heading />
      <div className="event-gallery-container">
        <div className="pictures">
          {EventGalleryData.map((pic) => (
            <motion.div
              key={pic.id}
              layoutId={pic.id}
              onClick={() => setSelectedId(pic.id)}
              className="picture-container"
            >
              <LazyImg
                src={`/event-gallery/${pic.image}`}
                alt={"NLP Coaching"}
                className={"gallery-img"}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            ref={viewBox}
            id="fullView"
            className="fullView"
            layoutId={selectedId}
          >
            <LazyImg
              src={`/event-gallery/${
                EventGalleryData[selectedId - 1].hd_image
              }`}
              alt={"NLP Coaching"}
            />
            <motion.button onClick={() => setSelectedId(null)}>
              <RxCross1 color="white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventGallery;
