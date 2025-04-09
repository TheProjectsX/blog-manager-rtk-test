import React from "react";
import { useSubmitPostMutation } from "../../store/features/posts/postsAPI";
import { useDispatch } from "react-redux";
import { updateHistory } from "../../store/features/user/userHistorySlice";
import { addPost } from "../../store/features/user/userPostsSlice";

const CreatePost = () => {
    const [
        submitPost,
        { data: submitResponse, isLoading, isError, error, isSuccess },
    ] = useSubmitPostMutation();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            title: e.target.title.value,
            body: e.target.body.value,
        };

        const res = await submitPost(body);

        if (res.error) return;

        e.target.title.value = "";
        e.target.body.value = "";

        const history = {
            action: "Post Created",
            id: res.data.id,
            title: res.data.title,
            datetime: Date.now(),
        };
        dispatch(updateHistory(history));
        dispatch(addPost({ ...res.data, datetime: Date.now() }));
    };

    return (
        <div>
            <h3 className="text-center font-semibold text-2xl underline underline-offset-4 mb-10">
                Create new Post
            </h3>

            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mb-10 p-4 bg-white shadow rounded space-y-4"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="w-full p-2 border rounded"
                    required
                />
                <textarea
                    name="body"
                    placeholder="Body"
                    className="w-full p-2 border rounded h-32"
                    required
                />
                <button
                    type="submit"
                    className={`bg-blue-500 text-white px-4 py-2 rounded mx-auto block ${
                        isLoading ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    disabled={isLoading}
                >
                    Submit
                </button>
            </form>

            {isSuccess && submitResponse && (
                <div className="px-10">
                    <h3 className="font-semibold text-lg mb-5">
                        Post Submitted!
                    </h3>
                    <p>ID: {submitResponse?.id}</p>
                    <p>Title: {submitResponse?.title}</p>
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

export default CreatePost;
