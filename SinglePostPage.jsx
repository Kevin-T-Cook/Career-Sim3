import { useGetSinglePostQuery } from "../slices/apiSlice";
import { useParams } from "react-router-dom";

function SinglePostPage() {
    const params = useParams();

    const {data: posts, isLoading} = useGetSinglePostQuery(params.username);

    return (
        <div className="singlePost">
            {isLoading ? <h1>Loading...</h1> :<>
            <h1>{posts.title}</h1>
            <p>{posts.description}</p>
            <p>{posts.price}</p>
            <h4>{posts.author.username}</h4>
            </>}
        </div>
    )
}

export default SinglePostPage;




