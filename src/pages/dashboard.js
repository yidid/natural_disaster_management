import React from "react";
import AdminSidebar from "../components/adminSidebar";
import CommunityAdmin from "../components/sidebar";

const AdminDashboardNew = () => {
  const [isMinimized, setIsMinimized] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMinimized(true);
    } else {
      setIsMinimized(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <CommunityAdmin name="Dashboard" />
     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 lg:ml-60 sm:ml-96">
          <div className={`bg-gray-700  text-center text-4xl font-extrabold text-white w-80 h-60  pt-7 ${isMinimized ? "icon-only" : ""}`}>
            <h5>{isMinimized ? "1" : "Disaster"}</h5>
            <h5>{isMinimized ? "1" : "100"}</h5>
          </div>
          <div className={`bg-gray-600 text-center text-4xl font-extrabold pt-7 text-white w-80 h-60  ${isMinimized ? "icon-only" : ""}`}>
            <h5>{isMinimized ? "2" : "Responder"}</h5>
            <h5>{isMinimized ? "2" : "12345"}</h5>
          </div>
          <div className={`bg-gray-600   text-center text-4xl font-extrabold text-white w-80 h-60 pt-7 ${isMinimized ? "icon-only" : ""}`}>
            <h5>{isMinimized ? "3" : "Customer"}</h5>
            <h5>{isMinimized ? "3" : "78453"}</h5>
          </div>
          <div className={`bg-gray-700   text-center text-4xl font-extrabold text-white w-80 h-60 pt-7  ${isMinimized ? "icon-only" : ""}`}>
            <h5>{isMinimized ? "4" : "Donation"}</h5>
            <h5>{isMinimized ? "4" : "100348659"}</h5>
          </div>
        </div>
    
    </>
  );
};

export default AdminDashboardNew;