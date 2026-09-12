import mockData from "./mockData.json";
import Post from "./shared/Post";
import type { PostProps } from "./types/post-types";

const posts = mockData as PostProps[];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-[552px] mx-auto space-y-2">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default App;
