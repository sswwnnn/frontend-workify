import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function Progress() {
  const axiosSecure = useAxiosSecure();
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  // employee Name
  const { data: employeeName = [], isLoading } = useQuery({
    queryKey: ["employeeName"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/employeeWorkSheet/name");
      const uniqueNames = Array.from(
        new Map(data.map((item) => [item.name, item])).values()
      );
      return uniqueNames;
    },
  });

  // employee WorkSheet
  const { data: employeeWorkSheet = [] } = useQuery({
    queryKey: ["employeeWorkSheet", selectedEmployee, selectedMonth],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/employeeWorkSheet?employeeName=${selectedEmployee}&month=${selectedMonth}`
      );
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="py-6 md:py-12">
      <h2 className="text-3xl font-semibold text-center mb-4 md:mb-8">
        Employee Work Progress
      </h2>

      {/* Table to show work records */}
      <div className="overflow-x-auto mx-4 md:mx-8">
        <table className="min-w-full table-auto shadow-md overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Employee Name</th>
              <th className="px-6 py-3 text-left">Work Sheet</th>
              <th className="px-6 py-3 text-left">Hours Worked</th>
              <th className="px-6 py-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="">
            {employeeWorkSheet.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No records found
                </td>
              </tr>
            ) : (
              employeeWorkSheet.map((record, index) => (
                <tr
                  key={record._id}
                  className="border-b hover:bg-gray-100 hover:text-primary"
                >
                  <td className="px-6 py-4 ">{index + 1}</td>
                  <td className="px-6 py-4 ">{record.name}</td>
                  <td className="px-6 py-4 ">{record.tasks}</td>
                  <td className="px-6 py-4 ">{record.hoursWorked}</td>
                  <td className="px-6 py-4 text-center">
                    {new Date(record.selectedDate).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Progress;