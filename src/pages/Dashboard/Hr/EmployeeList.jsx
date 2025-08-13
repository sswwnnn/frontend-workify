import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaFilter, FaEdit } from "react-icons/fa";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeUpdateModal from "./EmployeeUpdateModal";
import "./EmployeeList.css";

function EmployeeList() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployeeForUpdate, setSelectedEmployeeForUpdate] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  // Hardcoded employee data with currentRole field added
  const [employees, setEmployees] = useState([
    {
      _id: "1",
      name: "Lim Alcovendas",
      email: "limalcovendas@company.com",
      department: "Sales",
      hiredDate: "01-28-2023",
      firstName: "Lim",
      middleName: "",
      lastName: "Alcovendas",
      jobTitle: "Sales Manager",
      currentRole: "Manager",
      phoneNumber: "+63 963-633-4053",
      gender: "Male",
      age: 23,
      birthDate: "April 5, 2003",
      birthPlace: "Nodado Hospital, Caloocan City",
      civilStatus: "Single",
      nationality: "Filipino",
      fullAddress: "Blk 16, Lot 1, Pkg 3, Phase 12 Brgy. 188, Tala Caloocan City, 1427",
      sss: "2331-2343-1132",
      tin: "12312-31546-422",
      philhealth: "139924756-1323FA",
      gsis: "3424636-1232-5",
      motherMaidenName: "Evelyn Alcovendas",
      motherPhoneNumber: "09123456789",
      motherOccupation: "Home Maker",
      motherStatus: "Alive",
      motherAddress: "Blk 16, Lot 1, Pkg 3, Phase 12 Brgy. 188, Tala Caloocan City, 1427",
      fatherMaidenName: "Rommel San-Jose",
      fatherPhoneNumber: "09987654321",
      fatherOccupation: "AV Works",
      fatherStatus: "Alive",
      fatherAddress: "Blk 16, Lot 1, Pkg 3, Phase 12 Brgy. 188, Tala Caloocan City, 1427",
      contactName: "Rommel San-Jose",
      contactPhoneNumber: "09987654321",
      contactRelationship: "Father",
      employeeNumber: "0023-232348-2324",
    },
    {
      _id: "2",
      name: "Ezekiel Olasiman",
      email: "zekeolasiman@company.com",
      department: "Marketing",
      jobTitle: "Marketing Specialist",
      currentRole: "Specialist",
      employeeNumber: "0023-232348-2325",
      hiredDate: "04-07-2023",
    },
    {
      _id: "3",
      name: "Klei Ishia Pagatpatan",
      email: "kleipagatpatan@company.com",
      department: "Marketing",
      jobTitle: "Digital Marketing Coordinator",
      currentRole: "Coordinator",
      employeeNumber: "0023-232348-2326",
      hiredDate: "06-11-2021",
    },
    {
      _id: "4",
      name: "Regine Mae Hambiol",
      email: "reginehambiol@company.com",
      department: "Compliance",
      jobTitle: "Compliance Officer",
      currentRole: "Officer",
      employeeNumber: "0023-232348-2327",
      hiredDate: "11-19-2023",
    },
    {
      _id: "5",
      name: "Mark Regie Magtangob",
      email: "regiemagtangob@company.com",
      department: "Sales",
      jobTitle: "Sales Representative",
      currentRole: "Representative",
      employeeNumber: "0023-232348-2328",
      hiredDate: "07-10-2024",
    },
    {
      _id: "6",
      name: "Jesalle Villegas",
      email: "jesallevillegas@company.com",
      department: "Compliance",
      jobTitle: "Compliance Analyst",
      currentRole: "Analyst",
      employeeNumber: "0023-232348-2329",
      hiredDate: "08-08-2022",
    }
  ]);

  // Get unique departments for filter dropdown
  const departments = [...new Set(employees.map(emp => emp.department))].sort();

  // Filter employees based on search term and selected department
  const filteredEmployees = employees.filter(employee => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = employee.name.toLowerCase().includes(searchLower);
    const matchesDepartment = selectedDepartment === "" || employee.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  // Toggle filter dropdown
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Handle department selection
  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setIsFilterOpen(false);
  };

  // Clear filter
  const clearFilter = () => {
    setSelectedDepartment("");
    setIsFilterOpen(false);
  };

  // Helper function to parse date strings in MM-DD-YYYY format
  const parseDate = (dateString) => {
    const [month, day, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  // Handle employee update
  const handleEmployeeUpdate = (employeeId, updatedData) => {
    setEmployees(prevEmployees => 
      prevEmployees.map(emp => 
        emp._id === employeeId 
          ? { ...emp, ...updatedData }
          : emp
      )
    );
    console.log(`Employee ${employeeId} updated with:`, updatedData);
  };

  // Define columns for react-data-table-component with custom sorting
  const columns = [
    {
      name: "Employee No.",
      selector: row => row.employeeNumber,
      sortable: true,
      width: "13%",
      sortFunction: (rowA, rowB) => {
        return rowA.employeeNumber.localeCompare(rowB.employeeNumber);
      },
    },
    {
      name: "Name",
      selector: row => row.name,
      sortable: true,
      width: "18%",
      sortFunction: (rowA, rowB) => {
        return rowA.name.localeCompare(rowB.name);
      },
    },
    {
      name: "Email",
      selector: row => row.email,
      sortable: true,
      width: "20%",
      sortFunction: (rowA, rowB) => {
        return rowA.email.localeCompare(rowB.email);
      },
    },
    {
      name: "Department",
      selector: row => row.department,
      sortable: true,
      width: "13%",
      sortFunction: (rowA, rowB) => {
        return rowA.department.localeCompare(rowB.department);
      },
    },
    {
      name: "Job Title",
      selector: row => row.jobTitle,
      sortable: true,
      width: "15%",
      sortFunction: (rowA, rowB) => {
        return rowA.jobTitle.localeCompare(rowB.jobTitle);
      },
    },
    {
      name: "Hired Date",
      selector: row => row.hiredDate,
      sortable: true,
      width: "11%",
      sortFunction: (rowA, rowB) => {
        const dateA = parseDate(rowA.hiredDate);
        const dateB = parseDate(rowB.hiredDate);
        return dateB - dateA; // Sort by recent date (newest first)
      },
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          style={{
            backgroundColor: '#ff5003',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '12px'
          }}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedEmployeeForUpdate(row);
            setIsUpdateModalOpen(true);
          }}
        >
          <FaEdit size={14} />
          Update
        </button>
      ),
      width: "10%",
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  // Custom styles for the data table
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#003f7d',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: '14px',
      },
    },
    rows: {
      style: {
        minHeight: '55px',
        fontSize: '12px',
        backgroundColor: '#ffffff',
        color: '#000000',
      },
    },
    pagination: {
      style: {
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid #e0e0e0',
      },
    },
  };

  // Handle row click to open modal with employee details
  const handleRowClicked = (row) => {
    setSelectedEmployee(row);
    setIsModalOpen(true);
  };

  // Close modal handler
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="employee-list-container">
      <div className="employee-list-table-container">
        <div className="controls-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by Employee Name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-container">
            <button 
              className={`filter-button ${selectedDepartment ? 'active' : ''}`}
              onClick={toggleFilter}
            >
              <FaFilter />
            </button>
            {isFilterOpen && (
              <div className="filter-dropdown">
                <div className="filter-dropdown-header">
                  <span>Filter by Department</span>
                  <button 
                    className="clear-filter-btn"
                    onClick={clearFilter}
                  >
                    Clear
                  </button>
                </div>
                {departments.map((department) => (
                  <div
                    key={department}
                    className={`filter-option ${selectedDepartment === department ? 'selected' : ''}`}
                    onClick={() => handleDepartmentSelect(department)}
                  >
                    {department}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <DataTable
          columns={columns}
          data={filteredEmployees}
          pagination
          highlightOnHover
          responsive
          customStyles={customStyles}
          paginationPerPage={6}
          paginationRowsPerPageOptions={[6, 12, 18, 24]}
          onRowClicked={handleRowClicked}
          pointerOnHover
        />
      </div>
      {isModalOpen && (
        <EmployeeDetails employee={selectedEmployee} onClose={closeModal} />
      )}
      <EmployeeUpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        employee={selectedEmployeeForUpdate}
        onUpdateEmployee={handleEmployeeUpdate}
      />
    </div>
  );
}

export default EmployeeList;
