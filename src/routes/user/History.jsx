import React from "react";
import { useSelector } from "react-redux";

const History = () => {
    const historyData = useSelector((state) => state.userHistory);

    if (historyData.length === 0) {
        return (
            <h3 className="text-center italic py-5 text-lg font-semibold">
                No History Found!
            </h3>
        );
    }

    return (
        <div>
            <h3 className="text-center font-semibold text-2xl underline underline-offset-4 mb-10">
                Your History
            </h3>

            <div className="overflow-x-auto px-5">
                <table className="min-w-full text-sm text-left border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Action</th>
                            <th className="px-4 py-2 border">Title</th>
                            <th className="px-4 py-2 border">Date Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...historyData].reverse().map((item, idx) => (
                            <tr key={idx} className="even:bg-gray-50">
                                <td className="px-4 py-2 border w-1/3">
                                    {item.action}
                                </td>
                                <td className="px-4 py-2 border w-1/3">
                                    {item.title}
                                </td>

                                <td className="px-4 py-2 border w-1/3">
                                    {new Date(item.datetime).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
