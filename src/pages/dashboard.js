import React from "react";
import AdminSidebar from "../components/adminSidebar";

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
      <AdminSidebar name="Dashboard" />
     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 lg:ml-60 sm:ml-96">
          <div className={`bg-red-300  text-center w-80 h-20  pt-7 ${isMinimized ? "icon-only" : ""}`}>
            <h5>{isMinimized ? "1" : "Disaster 100"}</h5>
          </div>
          <div className={`bg-blue-300   text-center w-80 h-20 pt-7 ${isMinimized ? "icon-only" : ""}`}>
            <h5>{isMinimized ? "2" : "Responders 12345"}</h5>
          </div>
          <div className={`bg-green-300  text-center w-80 h-20 pt-7 ${isMinimized ? "icon-only" : ""}`}>
            <h5>{isMinimized ? "3" : "Customer 78453"}</h5>
          </div>
          <div className={`bg-orange-300  text-center w-80 h-20 pt-7  ${isMinimized ? "icon-only" : ""}`}>
            <h5>{isMinimized ? "4" : "Donation 100348659"}</h5>
          </div>
        </div>
    
    </>
  );
};

export default AdminDashboardNew;