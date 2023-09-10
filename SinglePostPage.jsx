import { useGetSinglePostQuery } from "../slices/apiSlice";
import { useParams } from "react-router-dom";

function SinglePostPage() {
    const params = useParams();

    const {data:posts, isLoading} = useGetSinglePostQuery(params.id)

    return(
        <div className="singlePost">
            {isLoading?<h1>Loading...</h1>:<>
                <h1>{posts.title}</h1>
            </>}
        </div>
    )
}

export default SinglePostPage;