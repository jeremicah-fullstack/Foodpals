import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Logo, LogoSmall } from "public";
import { getRecipeInfo } from "@/Redux/recipeInfo";
import { useRouter } from "next/router";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [recipeNames, setRecipeNames] = useState([]);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchAutocompleteResults = async () => {
      const response = await fetch(`/api/autocomplete?query=${searchTerm}`);
      const recipeNames = await response.json();
      setRecipeNames(recipeNames);
    };

    if (searchTerm) {
      fetchAutocompleteResults();
    } else {
      setRecipeNames([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="sidebar flex bg-white">
      <div className="container">
        <div className=" flex  items-center py-1">
          <div className="sidebar--logo flex w-50">
            <Link href="/">
              <Image src={Logo} alt="Foodpals Logo" className="img2 " />
            </Link>
          </div>

          <div className="flex items-center w-50">
            <ul className="flex my-3">
              <li
                className={`nav-li ${router.pathname === "/" ? "active" : ""}`}
              >
                <Link href="/" className="flex items-center link">
                  <span className="li-title text-base">Home</span>
                </Link>
              </li>
              <li
                className={`nav-li ${
                  router.pathname === "/trending" ? "active" : ""
                }`}
              >
                <Link href="/trending" className="flex items-center link">
                  <span className="li-title text-base">Trending</span>
                </Link>
              </li>
              <li
                className={`nav-li ${
                  router.pathname === "/services" ? "active" : ""
                }`}
              >
                <Link href="/services" className="flex items-center link">
                  <span className="li-title text-base">Services</span>
                </Link>
              </li>
              <li
                className={`nav-li ${
                  router.pathname === "/credits" ? "active" : ""
                }`}
              >
                <Link href="/credits" className="flex items-center link">
                  <span className="li-title text-base">Credits</span>
                </Link>
              </li>
            </ul>

            <div className="py-5 flex justify-between relative">
              <div className="banner--navbar w-50">
                <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-70 border border-slate-300 rounded-2xl py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search for anything..."
                    type="text"
                    name="search"
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                </label>

                {searchTerm && recipeNames.length > 0 && (
                  <ul className="absolute bg-white w-full shadow-md leading-10 z-20">
                    {recipeNames?.map((recipeName) => (
                      <li key={recipeName?.id}>
                        <Link href={`/recipe/${recipeName.id}`}>
                          {recipeName.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
