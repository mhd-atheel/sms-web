import React, { useState } from "react";
import "../css/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navdata =
        ["Dashboard",
            "Students",
            "Teachers",
            "Staffs",
            "Subjects",
            "Leaves",
            "Time Table",
            "Events",
            "Settings",
        ];

    const handleClick = (index) => {
        //console.log(`index is ${index}`);
        setSelectedIndex(index);
        console.log(` Nav index is ${selectedIndex}`);
    };

    return (

        <div className="container">
            <div className="container2"></div>
            <ul>
                {navdata.map((item, index) => (
                    <Link to={index === 0 ? '/' : `/${item.toLowerCase().replace(" ", "-")}`} style={{ textDecoration: 'none' }}>
                       <li
                        className={selectedIndex == index ? 'navName' : 'notNavName'}
                        key={index} onClick={() => handleClick(index)} >
                            {item}
                        {/* <Link to={index === 0 ? '/' : `/${item.toLowerCase().replace(" ", "-")}`}>{item}</Link> */}
                    </li>
                    </Link>
                    
                    
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
