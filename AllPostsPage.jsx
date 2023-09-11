import { useGetAllPostsQuery } from "../slices/apiSlice"
import Content from "./Content";
import SinglePostPage from "./SinglePostPage";

function AllPostsPage() {
  const { data: posts, isLoading } = useGetAllPostsQuery();
  console.log(posts, isLoading);
  console.log('Data:', posts);
  console.log('Is Loading:', isLoading);

  return (
    <>
      <Content>
        {isLoading ? (
            <h1>Loading...</h1>
        ) : (
            posts && posts.posts && posts.posts.map((post, idx) => (
                <SinglePostPage key={idx} name={post.author.username} />
            ))
        )}
      </Content>
    </>
  )
}

export default AllPostsPage;