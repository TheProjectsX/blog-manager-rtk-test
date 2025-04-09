import React from "react";
import { useFetchPostsQuery } from "../store/features/posts/postsAPI";

const Home = () => {
    const postsData = useFetchPostsQuery({});

    if (postsData.isLoading)
        return (
            <h3 className="text-center italic py-5 text-lg font-semibold">
                Data Loading.....
            </h3>
        );

    if (!postsData.isLoading && postsData.isError)
        return (
            <h3 className="text-center italic py-5 text-lg font-semibold">
                {productsData.error}
            </h3>
        );

    if (
        !postsData.isLoading &&
        !postsData.isError &&
        postsData.data?.length === 0
    )
        return (
            <h3 className="text-center italic py-5 text-lg font-semibold">
                No Products to Show!
            </h3>
        );

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
            {postsData.data.slice(0, 12).map((post) => (
                <div
                    key={post.id}
                    className="bg-white rounded-xl shadow p-4 border"
                >
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-700">{post.body}</p>
                    <p className="text-sm text-gray-400 mt-3">
                        User ID: {post.userId}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Home;
