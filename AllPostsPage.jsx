import { useGetAllPostsQuery } from "../slices/apiSlice"
import Content from "./Content";
import SinglePostPage from "./SinglePostPage";

function AllPostsPage() {
  const { data:posts, isLoading } = useGetAllPostsQuery();

  return(
    <>
        <Content>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                posts.posts.map((post,idx)=> (
                    <SinglePostPage key={idx} name={post.title} />
            ))
            )}
        </Content>
    </>
  );
}

export default AllPostsPage;