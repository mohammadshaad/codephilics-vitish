import React from 'react';

const Table = () => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse">
                <tbody>
                    <tr className="bg-gray-200 border border-gray-300 font-semibold">
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-300">Image</td>
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-300">Name</td>
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-300">Location</td>
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-300">Time Stamp</td>
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-300">Vehicle Info</td>
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-300">Crime Committed</td>
                    </tr>
                    <tr className="bg-gray-50 border border-gray-200">
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-200">Column 1</td>
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-200">Column 2</td>
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-200">Column 3</td>
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-200">Column 4</td>
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-200">Column 5</td>
                        <td className="px-4 py-2 w-1/5 text-center border-r border-gray-200">Column 6</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
