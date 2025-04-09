import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../store/features/user/userPostsSlice";
import { updateHistory } from "../../store/features/user/userHistorySlice";
import { useDeletePostMutation } from "../../store/features/posts/postsAPI";

const Posts = () => {
    const [
        deleteServerPost,
        { data: deleteResponse, isLoading, isSuccess, isError, error },
    ] = useDeletePostMutation();
    const userPosts = useSelector((state) => state.userPosts);
    const dispatch = useDispatch();

    const handleDelete = async (post) => {
        await deleteServerPost(post.id);
        dispatch(deletePost({ id: post.id }));

        const history = {
            action: "Post Deleted",
            id: post.id,
            title: post.title,
            datetime: Date.now(),
        };
        dispatch(updateHistory(history));
    };

    return (
        <div>
            <h3 className="text-center font-semibold text-2xl underline underline-offset-4 mb-10">
                Your Posts
            </h3>

            <div className="overflow-x-auto px-5 mb-10">
                <table className="min-w-full text-sm text-left border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">ID</th>
                            <th className="px-4 py-2 border">Title</th>
                            <th className="px-4 py-2 border">Date Time</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...userPosts].reverse().map((post, idx) => (
                            <tr key={idx} className="even:bg-gray-50">
                                <td className="px-4 py-2 border">{post.id}</td>
                                <td className="px-4 py-2 border">
                                    {post.title}
                                </td>
                                <td className="px-4 py-2 border">
                                    {new Date(post.datetime).toLocaleString()}
                                </td>
                                <td className="px-4 py-2 border">
                                    <button
                                        onClick={() => handleDelete(post)}
                                        className={`px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 ${
                                            isLoading
                                                ? "cursor-not-allowed"
                                                : "cursor-pointer"
                                        }`}
                                        disabled={isLoading}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isSuccess && deleteResponse && (
                <div className="px-10">
                    <h3 className="font-semibold text-lg mb-5">
                        Post Deleted!
                    </h3>
                </div>
            )}

            {isError && (
                <div className="px-10">
                    <h3>Error Occurred!</h3>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default Posts;
