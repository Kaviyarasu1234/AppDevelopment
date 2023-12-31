import { useSelector } from 'react-redux';
import Navbar from '../../Layout/Navbar/Navbar';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import '../../component/Dashboard/Dashboard.css';
import { selectUser } from '../../Redux/UserSlice';

function Accounts() {
     const users = useSelector(selectUser);
     return (
          <>
               <div className="DashboardBorder">
                    <div className="DashboardNavBar"><Navbar/></div>
                    <div className="DashboardSideBar">
                         <Sidebar/>
                    </div>
                    <div className="DashboardContent">
                         <h3>Welcome to your Accounts Section {users.username}</h3>
                         <div className='content1'>
                              <div className='box1'></div>
                              <div className='box1'></div>
                              <div className='box1'></div>
                         </div>
                    </div>
                    <div className="DashboardFooter"></div>
               </div>
          </>
     );
   }
   
   export default Accounts;