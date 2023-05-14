import React, { useState } from "react";
import "../css/Sidebar.css";

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navdata =
        ["Dashboard",
            "Student",
            "Teacher",
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
                    <li
                        className={selectedIndex == index ? 'navName' : 'notNavName'}
                        key={index} onClick={() => handleClick(index)} >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
