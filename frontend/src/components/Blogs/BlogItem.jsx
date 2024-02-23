import { Link } from "react-router-dom";
import "./BlogItem.css"
import PropTypes from "prop-types";

const BlogItem = ({blogItem}) => {
  return (
    <Link to={`/blogs/${blogItem._id}`} className="blog-item">
    <li className="blog-item">
      <a href="#" className="blog-image">
        <img src={blogItem.img} alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>25 Feb, 2021 </span>-<span>0 Comments</span>
        </div>
        <div className="blog-info-center">
          <a href="#">{blogItem.title}</a>
        </div>
        <div className="blog-info-bottom">
          <a href="#">Read More</a>
        </div>
      </div>
    </li>
    </Link>
  );
};

export default BlogItem;

BlogItem.propTypes = {
  blogItem: PropTypes.object,
};

