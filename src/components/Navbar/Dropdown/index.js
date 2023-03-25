import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";


function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeOption, setActiveOption] = useState(1);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        switch (path) {
            case "/":
                setActiveOption(1);
                break;
            case "/vehicleTracking":
                setActiveOption(2);
                break;
            case "/crimeDetection":
                setActiveOption(3);
                break;
            default:
                setActiveOption(1);
        }
    }, [location]);

    function optionClick(option) {
        setActiveOption(option);
    }

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    function handleBlur(event) {
        if (
            event.relatedTarget &&
            !event.currentTarget.contains(event.relatedTarget)
        ) {
            setIsOpen(false);
        }
    }

    return (
        <div className="relative inline-block text-left" onBlur={handleBlur}>
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    {activeOption === 1 ? "Vehicle Tracking" : "24/7 Crime Detection"}
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        <Link
                            to="/vehicleTracking"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                            onClick={optionClick}
                        >
                            Vehicle Tracking
                        </Link>
                        <Link
                            to="/crimeDetection"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                            onClick={optionClick}
                        >
                            24/7 Crime Detection
                        </Link>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
