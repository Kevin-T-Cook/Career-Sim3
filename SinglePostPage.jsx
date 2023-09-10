import { useGetSinglePostQuery } from "../slices/apiSlice";

function SinglePostPage() {
    const { data, isLoading, error } = useGetSinglePostQuery(1);

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: 404 Not Found</div>;
      }

      if (!data || !data.posts || data.posts.length === 0) {
        return <div>No post found</div>;
      }
    
      return (
          <div>
              <h3>{data.posts.title}</h3>
          </div>
      )
}

export default SinglePostPage;