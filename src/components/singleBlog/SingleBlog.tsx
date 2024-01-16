import React, { useEffect, useState } from "react";
import Heading from "../page-heading/Heading";
import DOMPurify from "dompurify";
import "./SingleBlog.scss";
import { useParams } from "react-router-dom";
import { BlogData } from "../../ConstantData";
const SingleBlog = () => {
  const { id } = useParams();
  const sanitizedHtml = DOMPurify.sanitize(BlogData[id]?.htmlData);

  return BlogData[id] && sanitizedHtml ? (
    <div className="blog">
      <Heading headingText={BlogData[id].heading} />
      <div
        className="blog__container"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
      <div className="blog__footer">
        <p>
          <strong data-rich-text-format-boundary="true">
            NLP Training Dubai (www.nlptrainingdubai.com)
          </strong>{" "}
          – powered by <strong>UV Consultants</strong>, is a global NLP training
          &amp; coaching platform which offers quality NLP training and coaching
          certification programs in Dubai and other locations across the middle
          east. To know more about our NLP &amp; Coaching programs, please write
          to <strong>nlptraining@uvconsultants.com</strong> or{" "}
          <strong>call +971 4 8525752 | +971 50 670 5615.</strong>
        </p>
      </div>
    </div>
  ) : (
    "Loading......."
  );
};

export default SingleBlog;
