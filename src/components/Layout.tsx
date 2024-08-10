import React from 'react';
import { AiOutlineHome, AiOutlineMessage, AiOutlineCalendar,  AiOutlineBell, AiOutlineUser, AiOutlineClockCircle, AiOutlineTeam,AiOutlineMenu } from 'react-icons/ai';

function Layout() {
  return (
    <>
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="logo2.png" alt="Logo" className="h-12" />
          <h1 className="text-2xl font-bold text-blue-600">Pet-care</h1>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex space-x-10 items-center">
            <a href="#" className="flex text-blue-700 items-center space-x-1">
              <AiOutlineHome />
              <span>Home</span>
            </a>
            <a href="#" className="flex text-blue-700 items-center space-x-1">
              <AiOutlineMessage />
              <span>Chats</span>
            </a>
            <a href="#" className="flex text-blue-700 items-center space-x-1">
              <AiOutlineCalendar />
              <span>All appointments</span>
            </a>
            <a href="#" className="flex text-blue-700 items-center space-x-1">
              <AiOutlineBell/>
              <span>Subscription</span>
            </a>
            <a href="#" className="flex text-blue-700 items-center space-x-1">
              <AiOutlineBell />
              <span>Notification</span>
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-gray-700 h-6 w-6" />

          <img src="avatar.jpeg" alt="User" className="h-12 w-12 rounded-full" />
        </div>
      </header>
      <div className="p-4 flex space-x-4">
        <img src="avatar.jpeg" alt="User" className="h-20 w-20 rounded-full" />
        <div>
          <p>Mon,Aug12,2024</p>
          <p className='font-bold'>Good Morning, Mrs.Jane</p>
          <p>A quick lunch break to recharge, then back to take charge</p>
        </div>

        <div className="flex-grow"></div> {/* This div will take all available space and push the next div to the right */}

        <div className="flex flex-col justify-end space-y-4">
          <div className="flex justify-end space-x-4">
            <div className="bg-white p-4 rounded shadow flex items-center space-x-2">
              <AiOutlineClockCircle className="text-blue-700" />
              <div>
                <p className="text-gray-700">Remaining Appointments:</p>
                <span className="text-lg font-semibold">5 Appt.</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow flex items-center space-x-2">
              <AiOutlineUser className="text-blue-800" />
              <div>
                <p className="text-gray-700">Doctors Present:</p>
                <span className="text-lg font-semibold">03 Doctors</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow flex items-center space-x-2">
              <AiOutlineTeam className="text-blue-700" />
              <div>
                <p className="text-gray-700">Total Patients:</p>
                <span className="text-lg font-semibold">15 Patients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
