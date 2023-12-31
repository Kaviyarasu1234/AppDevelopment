import { useSelector } from 'react-redux';
import Navbar from '../../Layout/Navbar/Navbar';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import { selectUser } from '../../Redux/UserSlice';

function Dashboard() {
     const users = useSelector(selectUser);
     return (
          <>
               <div className="dashboard border">
                    <div className="dashboard navbar"><Navbar/></div>
                    <div className="dashboard sidebar"><Sidebar/></div>
                    <div className="DashboardContent">
                         <h3>Welcome to your DashBoard {users.username}</h3>
                         <div className='content1'>
                              <div className='box1'>Content 1</div>
                              <div className='box1'>Content2</div>
                              <div className='box1'>Content3</div>
                         </div>
                    </div>
               </div>
          </>
     );
   }
   
   export default Dashboard;