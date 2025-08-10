import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaEdit, FaTrashAlt, FaPlus, FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "./../../../components/Shared/LoadingSpinner";
import AddTaskModal from "./AddTaskModal"; // Import the new modal component

const WorkSheet = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const [hoursWorkedValue, setHoursWorkedValue] = useState("");
  const [taskId, setTaskId] = useState("");
  
  // Search and Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTask, setFilterTask] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Helper function to safely format date
  const formatDate = (dateValue) => {
    if (!dateValue) return "N/A";
    
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) return "Invalid Date";
    
    return date.toISOString().split("T")[0];
  };

  // Get all tasks
  const {
    data: employeeWorkSheet = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employeeWorkSheet"],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/employeeWorkSheet/${user?.email}`
      );
      return data;
    },
  });

  // Filter and search logic
  const filteredData = useMemo(() => {
    return employeeWorkSheet.filter((task, index) => {
      const matchesSearch = searchQuery === "" || 
        (index + 1).toString().includes(searchQuery.toLowerCase());
      
      const matchesFilter = filterTask === "" || task.tasks === filterTask;
      
      return matchesSearch && matchesFilter;
    });
  }, [employeeWorkSheet, searchQuery, filterTask]);

  // Pagination calculations
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  // Reset pagination when search/filter changes
  React.useEffect(() => {
    setCurrentPage(0);
  }, [searchQuery, filterTask, itemsPerPage]);

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  // Pagination handlers
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleEdit = (id) => {
    const taskToEdit = employeeWorkSheet.find((task) => task._id === id);
    setTaskValue(taskToEdit?.tasks || "");
    setHoursWorkedValue(taskToEdit?.hoursWorked || "");
    
    // Safely handle date parsing
    const taskDate = taskToEdit?.selectedDate ? new Date(taskToEdit.selectedDate) : new Date();
    setSelectedDate(isNaN(taskDate.getTime()) ? new Date() : taskDate);
    
    setTaskId(id);
    handleEditModalOpen();
  };

  // Handle task update
  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedTask = {
      email: user?.email,
      tasks: taskValue, 
      hoursWorked: hoursWorkedValue,
      selectedDate,
      month: selectedDate.toLocaleString("default", { month: "long" }),
    };

    axiosSecure
      .put(`/employeeWorkSheet/${taskId}`, updatedTask)
      .then((result) => {
        if (result.data.modifiedCount) {
          refetch();
          toast.success("WorkSheet updated successfully!");
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });

    setEditModalOpen(false);
  };

  // Handle task delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/employeeWorkSheet/${id}`)
          .then((result) => {
            refetch();
            // Reset to first page if current page becomes empty
            const newTotalItems = filteredData.length - 1;
            const newTotalPages = Math.ceil(newTotalItems / itemsPerPage);
            if (currentPage >= newTotalPages && newTotalPages > 0) {
              setCurrentPage(newTotalPages - 1);
            }
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            toast.error(error?.message);
          });
      }
    });
  };

  // Handle modal open/close
  const handleEditModalOpen = () => setEditModalOpen(!editModalOpen);
  const handleAddModalOpen = () => setAddModalOpen(!addModalOpen);

  // Clear filters
  const clearFilters = () => {
    setSearchQuery("");
    setFilterTask("");
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="py-6 md:py-12">
      {/* Title */}
      <h2 className="text-4xl font-semibold text-center mb-4 md:mb-8">
        Worksheet
      </h2>

      {/* Top Controls Section */}
      <div className="p-6 md:p-12">
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by ID..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Task Filter */}
          <div className="md:w-48">
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterTask}
              onChange={(e) => setFilterTask(e.target.value)}
            >
              <option value="" disabled>Filter by Task</option>
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
              <option value="Content">Content</option>
              <option value="Paper-work">Paper-work</option>
              <option value="Marketing">Marketing</option>
              <option value="Development">Development</option>
            </select>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg whitespace-nowrap"
          >
            Clear Filters
          </button>

          {/* Add Task Button */}
          <button
            onClick={handleAddModalOpen}
            className="bg-button hover:bg-hoverColor text-white px-6 py-2 rounded-lg flex items-center gap-2 font-medium whitespace-nowrap"
          >
            <FaPlus size={16} />
            Add Task
          </button>
        </div>

        {/* Results Info - Only show when searching or filtering */}
        {(searchQuery || filterTask) && (
          <div className="text-sm text-gray-600 mb-4">
            Showing {currentItems.length} of {totalItems} results
            <span className="ml-2 text-blue-600">
              ({employeeWorkSheet.length - totalItems} filtered out)
            </span>
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto mx-4 md:mx-8">
        <table className="min-w-full table-auto overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Task</th>
              <th className="py-3 px-6 text-left">Hours Worked</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  <span className="animate-pulse">Loading...</span>
                </td>
              </tr>
            ) : currentItems.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  {filteredData.length === 0 && totalItems > 0 
                    ? "No results found matching your search criteria." 
                    : "No worksheet data found."}
                </td>
              </tr>
            ) : (
              currentItems.map((task, index) => {
                const globalIndex = employeeWorkSheet.findIndex(item => item._id === task._id);
                return (
                  <tr
                    key={task._id}
                    className="border-b hover:bg-gray-100 hover:text-primary cursor-pointer"
                  >
                    <td className="py-3 px-6">{globalIndex + 1}</td>
                    <td className="py-3 px-6">{task.tasks || "N/A"}</td>
                    <td className="py-3 px-6">{task.hoursWorked || "0"}</td>
                    <td className="py-3 px-6">{formatDate(task.selectedDate)}</td>
                    <td className="py-3 px-6">
                      <div className="flex gap-2">
                        <Button
                          className="bg-blue-gray-500 hover:bg-blue-gray-900"
                          onClick={() => handleEdit(task._id)}
                          size="sm"
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          className="bg-red-500 hover:bg-red-900"
                          onClick={() => handleDelete(task._id)}
                          size="sm"
                        >
                          <FaTrashAlt />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="p-4 flex justify-between items-center bg-gray-50 border-t">
          {/* Items per page selector */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Show:</span>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="px-2 py-1 border border-gray-300 rounded text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
            </select>
            <span>per page</span>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className={`px-3 py-1 rounded text-sm font-medium ${
                currentPage > 0
                  ? "bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
              }`}
            >
              Previous
            </button>

            {/* Page Info */}
            <span className="px-3 py-1 text-sm text-gray-600 bg-white border border-gray-300 rounded">
              Page {currentPage + 1} of {totalPages || 1}
            </span>

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1 || totalPages === 0}
              className={`px-3 py-1 rounded text-sm font-medium ${
                currentPage < totalPages - 1 && totalPages > 0
                  ? "bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Add Task Modal */}
      <AddTaskModal 
        open={addModalOpen} 
        handleOpen={handleAddModalOpen} 
        refetch={refetch} 
      />

      {/* Edit Task Modal */}
      <Dialog open={editModalOpen} handler={handleEditModalOpen} className="max-w-4xl w-full">
        <DialogHeader>Edit Task</DialogHeader>
        <DialogBody>
          <form onSubmit={handleUpdate} className="flex flex-row gap-4 mb-8">
            <select
              className="p-2 border rounded"
              name="task"
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
              required
            >
              <option value="">Select Task</option>
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
              <option value="Content">Content</option>
              <option value="Paper-work">Paper-work</option>
              <option value="Marketing">Marketing</option>
              <option value="Development">Development</option>
            </select>
            <input
              type="number"
              placeholder="Hours Worked"
              className="w-1/2 p-2 border rounded"
              name="hoursWorked"
              value={hoursWorkedValue}
              onChange={(e) => setHoursWorkedValue(e.target.value)}
              required
            />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="p-2 border rounded w-full"
            />
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleEditModalOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleUpdate}>
            <span>Update</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default WorkSheet;