import { Sidebar } from "../components";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Sidebar />
      {children}
    </div>
  );
};
export default Layout;
