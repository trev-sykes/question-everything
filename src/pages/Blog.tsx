import { BlogCard } from "../components/blogCard/BlogCard";
import { blogData } from "../blogData/BlogData";

const Blog: React.FC = () => {
    return (
        <div>
            <h1 style={{ color: "#00ff9d", fontFamily: "Orbitron, monospace" }}>Blogs</h1>
            <div style={{ display: "grid", gap: "2rem", padding: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                {[...blogData]
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // sort descending by date
                    .map((blog) => (
                        <BlogCard key={blog.slug} {...blog} />
                    ))}
            </div>
        </div>
    );
};

export default Blog;
