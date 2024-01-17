import { BlogData } from "../../ConstantData";
import BlogItem from "../../components/blogitem/BlogItem";
import Heading from "../../components/page-heading/Heading";
import SingleBlog from "./singleBlog/SingleBlog";
import "./Blog.scss";
import { BlogListData } from "../../ConstantData";

const Blog = () => {
  return (
    <section className="blog">
      <Heading />
      <div className="blog__slider">
        {BlogListData.map((item) => (
          <BlogItem
            key={item.id}
            id={item.id}
            heading={item.heading}
            subtext={item.subtext}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
