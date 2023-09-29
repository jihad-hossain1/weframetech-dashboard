"use client";
import React, { useState } from "react";

import { HiBars3 } from "react-icons/hi2";
import {
  BiSolidGridAlt,
  BiSolidMoviePlay,
} from "react-icons/bi";
import { RiCalendarFill,RiArrowRightSLine,RiArrowDownSLine } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { FaFileInvoiceDollar,FaUserTag } from "react-icons/fa6";
import { TbDashboard } from "react-icons/tb";
import { IoChatbubbles ,IoSettingsSharp} from "react-icons/io5";
import {
  MdPermContactCalendar,
  MdEmail,
} from "react-icons/md";

import NavLink from "./NavLink";
import Link from "next/link";

const SideNavbar = () => {
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isKanbanActive, setIsKanbanActive] = useState(false);
  const [isCoursesActive, setIsCoursesActive] = useState(false);
  const [isInvoicesActive, setIsInvoicesActive] = useState(false);
  const totalMails = ['mail-1','mail-2','mail-3']

  return (
    <div className='hidden md:block flex-none max-w-[350px] bg-[#15132B] px-12 '>
      <div className='mt-10 flex items-center space-x-6 '>
        <h4 className='text-slate-100 text-2xl pl-8'>weframetech</h4>{" "}
        <HiBars3 className='text-3xl text-[#7879F1] cursor-pointer'></HiBars3>
      </div>
      <div className='text-[#464366] mt-14'>
        <h4 className="uppercase text-slate-100 mb-8 font-semibold">Main Menu</h4>
        <ul className='flex flex-col space-y-8 '>
          <li>
            <NavLink
              className='flex items-center space-x-7 '
              href={`/dashboard`}
              activeClassName='text-[#6418C3]'
              exact={`/dashboard` === "/dashboard"}
            >
              <TbDashboard className='text-3xl'></TbDashboard>{" "}
              <span className='text-xl '>Dashboard</span>
            </NavLink>
          </li>
          <li>
          <div className='cursor-pointer'>
                <div
                  className='flex items-center justify-between'
                  onClick={() => setIsEmailActive(!isEmailActive)}
                >
                  <div className='flex items-center space-x-7 '>
                  <MdEmail className='text-3xl'></MdEmail>
                    <span className="text-xl">Email</span>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <div className="rounded-full px-2  text-white bg-[#5ECFFF]">
                      {totalMails ? totalMails.length : 0}
                    </div>
                  <div>{isEmailActive ? <RiArrowDownSLine className="text-2xl text-[#7879F1]"></RiArrowDownSLine> : <RiArrowRightSLine className="text-2xl text-[#7879F1]"></RiArrowRightSLine>}</div>
                  </div>
                </div>
                {isEmailActive && (
                  <div className='mt-7'>
                    <NavLink
                      className='flex items-center space-x-7 '
                      exact={`/dashboard/chat` === "/dashboard"}
                      href={`/dashboard/chat`}
                      activeClassName='text-[#6418C3]'
                    >
                      <IoChatbubbles className='text-3xl'></IoChatbubbles>
                      <span className='text-xl '>Chat</span>
                    </NavLink>
                  </div>
                )}
              </div>
          </li>
          <li>
          <Link href={'/dashboard/kanban'} className='cursor-pointer '>
                <div
                  className='flex items-center justify-between '
                  onClick={() => setIsKanbanActive(!isKanbanActive)}
                >
                  <div className='flex items-center space-x-7 '>
                  <BiSolidGridAlt className='text-3xl'></BiSolidGridAlt>
                    <span className="text-xl">Kanban</span>
                  </div>
                  <div>{isKanbanActive ? <RiArrowDownSLine className="text-2xl text-[#7879F1]"></RiArrowDownSLine> : <RiArrowRightSLine className="text-2xl text-[#7879F1]"></RiArrowRightSLine>}</div>
                </div>
                {isKanbanActive && (
                  <div className='mt-7'>
                    <NavLink
                      className='flex items-center space-x-7 '
                      exact={`/dashboard/kanban/profile` === "/dashboard"}
                      href={`/dashboard/kanban/profile`}
                      activeClassName='text-[#6418C3]'
                    >
                      <FaUserTag className='text-3xl'></FaUserTag>
                      <span className='text-xl '>Profile</span>
                    </NavLink>
                  </div>
                )}
              </Link>
          </li>
          <li className="flex justify-between items-center">
          <NavLink
              className='flex items-center space-x-7 '
              href={`/dashboard/contact`}
              activeClassName='text-[#6418C3]'
              exact={`/dashboard/contact` === "/dashboard"}
            >
              <MdPermContactCalendar className='text-3xl'></MdPermContactCalendar>{" "}
              <span className='text-xl '>Contact</span>
            </NavLink>
          <div className="rounded-full px-3 py-1 text-sm text-slate-100 bg-[#E328AF] uppercase">
          new
            </div>
            
          </li>
          <li>
            <NavLink
              className='flex items-center space-x-7 '
              href={`/dashboard/calendar`}
              activeClassName='text-[#6418C3]'
              exact={`/dashboard/calendar` === "/dashboard"}
            >
              <RiCalendarFill className='text-3xl'></RiCalendarFill>{" "}
              <span className='text-xl '>Calendar</span>
            </NavLink>
          </li>
          <li>
          <div className='cursor-pointer'>
                <div
                  className='flex items-center justify-between'
                  onClick={() => setIsCoursesActive(!isCoursesActive)}
                >
                  <div className='flex items-center space-x-7 '>
                  <BiSolidMoviePlay className='text-3xl'></BiSolidMoviePlay>
                    <span className="text-xl">Courses</span>
                  </div>
                  <div>{isCoursesActive ? <RiArrowDownSLine className="text-2xl text-[#7879F1]"></RiArrowDownSLine> : <RiArrowRightSLine className="text-2xl text-[#7879F1]"></RiArrowRightSLine>}</div>
                </div>
                {isCoursesActive && (
                  <div className='mt-7'>
                    <NavLink
                      className='flex items-center space-x-7 '
                      exact={`/dashboard/course/profile` === "/dashboard"}
                      href={`/dashboard/course/profile`}
                      activeClassName='text-[#6418C3]'
                    >
                      <FaUserTag className='text-3xl'></FaUserTag>
                      <span className='text-xl '>Profile</span>
                    </NavLink>
                  </div>
                )}
              </div>
          </li>

          <li>
            <NavLink
              className='flex items-center space-x-7 '
              href={`/dashboard/shop`}
              activeClassName='text-[#6418C3]'
              exact={`/dashboard/shop` === "/dashboard"}
            >
              <FaShoppingBag className='text-3xl'></FaShoppingBag>{" "}
              <span className='text-xl '>Shop</span>
            </NavLink>
          </li>
          
          <li>
          <div className='cursor-pointer'>
                <div
                  className='flex items-center justify-between'
                  onClick={() => setIsInvoicesActive(!isInvoicesActive)}
                >
                  <div className='flex items-center space-x-7 '>
                  <FaFileInvoiceDollar className='text-3xl'></FaFileInvoiceDollar>
                    <span className="text-xl">Invoices</span>
                  </div>
                  <div>{isInvoicesActive ? <RiArrowDownSLine className="text-2xl text-[#7879F1]"></RiArrowDownSLine> : <RiArrowRightSLine className="text-2xl text-[#7879F1]"></RiArrowRightSLine>}</div>
                </div>
                {isInvoicesActive && (
                  <div className='mt-7'>
                    <NavLink
                      className='flex items-center space-x-7 '
                      exact={`/dashboard/invoices/invoice` === "/dashboard"}
                      href={`/dashboard/invoices/invoice`}
                      activeClassName='text-[#6418C3]'
                    >
                      <FaUserTag className='text-3xl'></FaUserTag>
                      <span className='text-xl '>Invoice</span>
                    </NavLink>
                  </div>
                )}
              </div>
          </li>
          <li>
            <NavLink
              className='flex items-center space-x-7 '
              href={`/dashboard/settings`}
              activeClassName='text-[#6418C3]'
              exact={`/dashboard/settings` === "/dashboard"}
            >
              <IoSettingsSharp className='text-3xl'></IoSettingsSharp>{" "}
              <span className='text-xl '>Settings</span>
            </NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;


