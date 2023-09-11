import "./mainsidebar.css";
import { motion } from "framer-motion";
import {
  AccountCircleRounded,
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  TocRounded,

} from "@material-ui/icons";
import PersonIcon from '@material-ui/icons/Person';
import Item from './Item';
import { useState } from "react";
import { Link } from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';
import EditNoteIcon from '@mui/icons-material/EditNote';
function MainSidebar() {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "auto",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "5rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };
  return (
    <div className="MainSidebar" >
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}

            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
          {/* profile */}
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="profile_img"
            />
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0, color: 'white', fontSize: 'x-large', fontWeight: 'bold' }}
              >
                Developer
              </motion.h3>
              <Link to='/' style={{ color: 'white' }}>  <Item icon={<DashboardRounded />} name="Dashboard" /></Link>
              {/* <Item icon={<BarChartRounded />} name="Performance" /> */}
            </div>
          </div>
          {/* group 2 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              Content
            </motion.h3>
            {/* <Item icon={<AttachMoneyRounded />} name="Sales" /> */}
            <Link to='/profile' style={{ color: 'white' }}>   <Item icon={<PersonIcon />} name="Profile" /></Link>
            <Link to='/documentation' style={{ color: 'white' }}>   <Item icon={<SettingsRemoteRounded />} name="Documentation" /></Link>
            <Link to='/notification' style={{ color: 'white' }}>   <Item icon={<AssignmentTurnedInRounded />} name="Notification" />{" "}</Link>
           
          </div>
          {/* group 3 */}
          {/* <div className="group">

            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              CUSTOMIZATION
            </motion.h3>
            
            <Link to='/profile' style={{ color: 'white' }}>   <Item icon={<PersonIcon />} name="Profile" /></Link>

          </div> */}
          {/* group 4 */}
          <div className="group">

            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              CRUD Operation
            </motion.h3>

            <Link to='/todolist' style={{ color: 'white' }}>   <Item icon={<EditNoteIcon />} name="To do List" /></Link>
          </div>
        </motion.div>
      </motion.div>


      <div className="body_container">
        {/* <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr /> */}
      </div>
    </div>
  );
}

export default MainSidebar; 