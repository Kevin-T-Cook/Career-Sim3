import { useGetAllPostsQuery } from "../slices/apiSlice"

function AllPostsPage() {
  const { data: posts, isLoading, error } = useGetAllPostsQuery();

console.log(posts);
console.log(data)
console.log(data.posts[0].title)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: 404 Not Found</div>;
  }

  if (!data || !data.posts || data.posts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    //    <div>
    //   {data.posts.map((posts) => (
    //     <div key={posts._id}>
    //       <h3>{posts.title}</h3>
    //     </div>
    //   ))}
    // </div>
    <div>
        {posts.posts.map((post) => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
  )};

export default AllPostsPage;