import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function EmployeeList() {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  // all employees data
  const {
    data: employees = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/employees");
      return data;
    },
  });

  // toggle Verification
  const toggleVerification = async (id, isVerified) => {
    const { data } = await axiosSecure.patch(`/employeesVerified/${id}`, {
      isVerified: !isVerified,
    });
    if (data?.modifiedCount > 0) {
      refetch();
      toast.success(
        `Employee verification status successfully ${
          isVerified ? "removed" : "updated"
        }!`
      );
    }
  };

  // Helper function to format salary as money with commas
  const formatSalary = (salary) => {
    if (salary === null || salary === undefined || salary === "") return "$0";
    const numSalary = Number(salary);
    if (isNaN(numSalary)) return "$0";
    return "$" + numSalary.toLocaleString();
  };

  // ReactTable columns
  const columns = [
    { header: "Name", accessorKey: "name" },
    { header: "Email", accessorKey: "email" },
    { header: "Role", accessorKey: "role" },
    {
      header: "Verified",
      accessorKey: "isVerified",
      cell: ({ row }) => (
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleVerification(row.original._id, row.original.isVerified);
          }}
          className={`px-2 py-1 rounded ${
            row.original.isVerified ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {row.original.isVerified ? "Yes" : "No"}
        </button>
      ),
    },
    { header: "Account No.", accessorKey: "bankAccountNo" },
    { 
      header: "Salary", 
      accessorKey: "salary",
      cell: ({ row }) => formatSalary(row.original.salary)
    },
    {
      header: "Pay",
      cell: ({ row }) => (
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (row.original.isVerified) {
              setSelectedEmployee(row.original);
              handleOpen();
            } else {
              toast.warning("Only verified employees can be paid.");
            }
          }}
          disabled={!row.original.isVerified}
          className={`px-4 py-2 rounded ${
            row.original.isVerified
              ? "bg-button hover:bg-hoverColor text-white"
              : "bg-gray-400 cursor-not-allowed text-white"
          }`}
        >
          Pay
        </button>
      ),
    },
  ];

  // Filter employees based on search term and role
  const filteredEmployees = useMemo(() => {
    let filtered = employees;
    
    if (searchTerm) {
      filtered = filtered.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (roleFilter) {
      filtered = filtered.filter(employee =>
        employee.role.toLowerCase() === roleFilter.toLowerCase()
      );
    }
    
    return filtered;
  }, [employees, searchTerm, roleFilter]);

  // ReactTable
  const table = useReactTable({
    data: filteredEmployees,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // handlePay
  const handlePayRequest = () => {
    const { name, email, designation, photo, salary } = selectedEmployee;
    const payInfo = {
      name,
      email,
      designation,
      photo,
      salary,
      month,
      year,
      isPaid: false,
      createdAt: new Date(),
    };

    // post payroll
    axiosSecure
      .post("/payroll", payInfo)
      .then((result) => {
        if (result?.data?.insertedId) {
          toast.success("Pay request submitted successfully!");
        }
      })
      .catch((error) => {
        const errorMessage =
          error?.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
      });
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="py-6 md:py-12">
      <h2 className="text-3xl font-semibold text-center mb-4 md:mb-8">
        Employee Table
      </h2>
      
      {/* Search and Filter Controls */}
      <div className="mb-4 mx-4 md:mx-8 flex flex-col md:flex-row items-center gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search by employee name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            }
          />
        </div>
        
        {/* Role Filter Dropdown */}
        <div className="w-full md:w-auto">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="block w-full md:w-48 appearance-none rounded-md border border-gray-300 bg-white py-2 px-3 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          >
            <option value="">All Roles</option>
            <option value="HR">HR</option>
            <option value="Employee">Employee</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto mx-4 md:mx-8">
        <table className="min-w-full table-auto overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="py-3 px-6 text-left">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b hover:bg-gray-100 hover:text-primary cursor-pointer"
                onClick={() => navigate(`/dashboard/details/${row.original.email}`)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-3 px-6">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-4 flex justify-between items-center">
          {/* Previous Button */}
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`px-4 py-2 rounded ${
              table.getCanPreviousPage()
                ? "bg-primary text-white hover:bg-blue-900"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Previous
          </button>

          {/* Page Info */}
          <span className="text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>

          {/* Next Button */}
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`px-4 py-2 rounded ${
              table.getCanNextPage()
                ? "bg-primary text-white hover:bg-blue-900"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      {/* Modal */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Pay Employee</DialogHeader>
        <DialogBody>
          <div className="space-y-4">
            <p>
              <strong>Employee Name:</strong> {selectedEmployee?.name}
            </p>
            <p>
              <strong>Salary:</strong> {formatSalary(selectedEmployee?.salary)}
            </p>
            <div className="space-y-4">
              {/* Month Selector */}
              <div>
                <label
                  htmlFor="month"
                  className="block text-sm font-medium text-gray-700"
                >
                  Month
                </label>
                <div className="relative mt-1">
                  <select
                    required
                    id="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 px-3 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  >
                    <option value="" disabled>
                      Select a month
                    </option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  {/* Dropdown Icon */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Year Input */}
              <div>
                <label
                  htmlFor="year"
                  className="block text-sm font-medium text-gray-700"
                >
                  Year
                </label>
                <div className="relative mt-1">
                  <input
                    required
                    type="text"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Enter year (e.g., 2025)"
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handlePayRequest();
              handleOpen();
            }}
            disabled={
              !selectedEmployee?.isVerified ||
              !month ||
              !year ||
              isNaN(year) ||
              year.length !== 4
            }
          >
            Pay
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default EmployeeList;