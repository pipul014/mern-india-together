import { ChevronRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const AboutUsBreadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <>
      <div className="mt-28">
        {/* Breadcrumbs */}
        <div>
          <ul className="flex space-x-1">
            <li>
              <Link to="/" className="text-gray-500 hover:text-[#DC3545]">
                Home
              </Link>
            </li>

            {paths.map((path, index) => {
              const routeTo = "/" + paths.slice(0, index + 1).join("/");
              const isLast = index === paths.length - 1;

              return (
                <li key={routeTo} className="flex items-center space-x-1">
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                  <p className="text-gray-500 hover:text-[#DC3545]">About Us</p>
                  {/* {isLast ? (
                    <span className="text-gray-500 capitalize">{path}</span>
                  ) : (
                    <Link to={routeTo} className="capitalize">
                      {path}
                    </Link>
                  )} */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutUsBreadcrumbs;
