import { Routes, Route } from "react-router-dom";
import AllPostsPage from "./AllPostsPage";
import SinglePostPage from "./SinglePostPage";

function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<AllPostsPage />} />
        <Route path="/singlepost" element={<SinglePostPage />} />
      </Routes>
    </div>
  )
};

export default RouterComponent;
