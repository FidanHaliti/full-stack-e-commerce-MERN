import BlogDetails from "../components/BlogDetails/BlogDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const BlogDetailsPage = () => {
  const [singleBlog, setSingleBlog] = useState(null);
  const { id: blogId } = useParams();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/blogs/${blogId}`);

        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }

        const data = await response.json();
        setSingleBlog(data);
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchSingleBlog();
  }, [apiUrl, blogId]);



  return setSingleBlog ? (
     <BlogDetails singleBlog={singleBlog} setSingleBlog={setSingleBlog} />
     ) : (
      <p>Ürün Yükleniyor</p>
    );
  };

export default BlogDetailsPage;