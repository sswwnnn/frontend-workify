import { useQuery } from "@tanstack/react-query";
import { useState, useMemo, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function PaymentHistory() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  
 
  const [count, setCount] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsParPage, setItemsParPage] = useState(5);


  const {
    data: allPaymentHistory = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/paymentHistory/${user?.email}`);
      return data;
    },
  });

  
  const filteredData = useMemo(() => {
    // Ensure allPaymentHistory is an array before filtering
    if (!Array.isArray(allPaymentHistory)) {
      return [];
    }
    
    return allPaymentHistory.filter((payment) => {
     
      const matchesSearch = searchQuery === "" || 
        payment.transactionId?.toLowerCase().includes(searchQuery.toLowerCase());
      
      
      let matchesDate = true;
      
      if (selectedYear && selectedMonth) {
        
        matchesDate = String(payment.year) === String(selectedYear) && 
                     String(payment.month) === String(selectedMonth);
      } else if (selectedYear && !selectedMonth) {
       
        matchesDate = String(payment.year) === String(selectedYear);
      } else if (!selectedYear && selectedMonth) {
       
        matchesDate = String(payment.month) === String(selectedMonth);
      }
      
      
      return matchesSearch && matchesDate;
    });
  }, [allPaymentHistory, searchQuery, selectedYear, selectedMonth]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(0);
  }, [searchQuery, selectedYear, selectedMonth]);

  // Pagination calculations based on filtered data
  const totalItems = filteredData.length;
  const numberOfPages = Math.ceil(totalItems / itemsParPage);
  const startIndex = currentPage * itemsParPage;
  const endIndex = startIndex + itemsParPage;
  const currentItems = filteredData.slice(startIndex, endIndex);


  const availableYears = useMemo(() => {
    
    const currentYear = new Date().getFullYear();
    const allYears = [];
    
   
    for (let year = 2015; year <= currentYear + 1; year++) {
      allYears.push(year);
    }
    
   
    if (Array.isArray(allPaymentHistory)) {
      const dataYears = [...new Set(allPaymentHistory.map(payment => parseInt(payment.year)))];
      dataYears.forEach(year => {
        if (!allYears.includes(year) && !isNaN(year)) {
          allYears.push(year);
        }
      });
    }
    
    // Remove duplicates and sort descending
    return [...new Set(allYears)].sort((a, b) => b - a);
  }, [allPaymentHistory]);

  const availableMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // pagination
  const handleItemParPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsParPage(val);
    setCurrentPage(0);
  };

  const handlePrevItem = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextItem = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedYear("");
    setSelectedMonth("");
  };

  return (
    <div className="py-6 md:py-12">
      <h2 className="text-4xl font-semibold text-center mb-4 md:mb-8">
        Payment History
      </h2>

      {/* Search and Filter Section */}
      <div className="p-6 md:p-12">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Bar for Transaction ID */}
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Transaction ID..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Year Filter */}
          <div className="md:w-40">
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="" disabled>Select Year</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Month Filter */}
          <div className="md:w-48">
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="" disabled>Select Month</option>
              {availableMonths.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg whitespace-nowrap"
          >
            Clear Filters
          </button>
        </div>

        {/* Results Info  */}
        {(searchQuery || selectedYear || selectedMonth) && (
          <div className="text-sm text-gray-600 mb-4">
            Showing {currentItems.length} of {totalItems} results
            <span className="ml-2 text-blue-600">
              ({(Array.isArray(allPaymentHistory) ? allPaymentHistory.length : 0) - totalItems} filtered out)
            </span>
          </div>
        )}
      </div>

      {/* Payment History Table */}
      <div className="overflow-x-auto mx-4 md:mx-8">
        <table className="min-w-full table-auto overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Month</th>
              <th className="py-3 px-6 text-left">Year</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Transaction ID</th>
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
                  {totalItems === 0 && Array.isArray(allPaymentHistory) && allPaymentHistory.length > 0
                    ? "No results found matching your search criteria."
                    : "No payment history found."}
                </td>
              </tr>
            ) : (
              currentItems.map((payment, index) => {
                
                const globalIndex = Array.isArray(allPaymentHistory) 
                  ? allPaymentHistory.findIndex(item => item._id === payment._id)
                  : index;
                return (
                  <tr
                    key={payment._id}
                    className="border-b hover:bg-gray-100 hover:text-primary cursor-pointer"
                  >
                    <td className="py-3 px-6">{globalIndex + 1}</td>
                    <td className="py-3 px-6">{payment.month}</td>
                    <td className="py-3 px-6">{payment.year}</td>
                    <td className="py-3 px-6">{payment.salary}</td>
                    <td className="py-3 px-6">{payment.transactionId}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        <div className="p-4 flex justify-between items-center">
          {/* Items per page selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show:</span>
            <select
              value={itemsParPage}
              onChange={handleItemParPage}
              className="px-2 py-1 border border-gray-300 rounded text-sm"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <span className="text-sm text-gray-600">per page</span>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-4">
            {/* Previous Button */}
            <button
              onClick={handlePrevItem}
              disabled={currentPage === 0}
              className={`px-4 py-2 rounded ${
                currentPage > 0
                  ? "bg-primary text-white hover:bg-blue-900"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Previous
            </button>

            {/* Page Info */}
            <span className="text-sm">
              Page {currentPage + 1} of {numberOfPages || 1}
            </span>

            {/* Next Button */}
            <button
              onClick={handleNextItem}
              disabled={currentPage === numberOfPages - 1 || numberOfPages === 0}
              className={`px-4 py-2 rounded ${
                currentPage < numberOfPages - 1 && numberOfPages > 0
                  ? "bg-primary text-white hover:bg-blue-900"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;