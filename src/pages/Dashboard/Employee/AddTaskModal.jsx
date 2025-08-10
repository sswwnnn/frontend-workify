import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddTaskModal = ({ open, handleOpen, refetch }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [taskValue, setTaskValue] = useState("");
  const [hoursWorkedValue, setHoursWorkedValue] = useState("");

  // Reset form
  const resetForm = () => {
    setTaskValue("");
    setHoursWorkedValue("");
    setSelectedDate(new Date());
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskValue || !hoursWorkedValue) {
      toast.error("Please fill all required fields");
      return;
    }

    const employeeInfo = {
      name: user?.displayName,
      email: user?.email,
      tasks: taskValue,
      hoursWorked: hoursWorkedValue,
      selectedDate,
      month: selectedDate.toLocaleString("default", { month: "long" }),
    };

    axiosSecure
      .post("/employeeWorkSheet", employeeInfo)
      .then((result) => {
        if (result?.data?.insertedId) {
          refetch();
          toast.success("Employee data successfully added!");
          resetForm();
          handleOpen(); 
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <Dialog open={open} handler={handleOpen} className="max-w-lg w-full">
      <DialogHeader>Add New Task</DialogHeader>
      <DialogBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Task Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Task *
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
              required
            >
              <option value="">Select Task</option>
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
              <option value="Content">Content</option>
              <option value="Paper-work">Paperwork</option>
              <option value="Marketing">Marketing</option>
              <option value="Development">Development</option>
            </select>
          </div>

          {/* Hours Worked Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hours Worked *
            </label>
            <input
              type="number"
              placeholder="Hours Worked"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={hoursWorkedValue}
              onChange={(e) => setHoursWorkedValue(e.target.value)}
              min="0"
              step="0.1"
              required
            />
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </form>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={() => {
            resetForm();
            handleOpen();
          }}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleSubmit}>
          <span>Submit</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AddTaskModal;