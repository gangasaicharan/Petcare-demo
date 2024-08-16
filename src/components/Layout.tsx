"use client";
import React, { useState, useEffect, useRef } from 'react';
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineCalendar,
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineTeam,
  AiOutlineMenu,
  AiOutlineLeft,
  AiOutlineSearch,  
} from 'react-icons/ai';
import Image from 'next/image';


function Layout() {
  const [isChatsSidebarOpen, setIsChatsSidebarOpen] = useState(false);
  const [isAppointmentsSidebarOpen, setIsAppointmentsSidebarOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] = useState(false);

  const [chatSearchQuery, setChatSearchQuery] = useState('');
  const [appointmentSearchQuery, setAppointmentSearchQuery] = useState('');
  const [activeAppointmentsTab, setActiveAppointmentsTab] = useState('today');

  const notificationsRef = useRef(null);

  const toggleChatsSidebar = () => {
    setIsChatsSidebarOpen(!isChatsSidebarOpen);
  };

  const toggleAppointmentsSidebar = () => {
    setIsAppointmentsSidebarOpen(!isAppointmentsSidebarOpen);
  };

  const toggleNotificationsDropdown = () => {
    setIsNotificationsDropdownOpen(!isNotificationsDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationsRef]);

  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const chats = [
    { id: 1, name: 'Dr. John Doe', image: '/doctor1.jpeg', lastMessage: "Let's schedule a follow-up.", time:'23:07'},
    { id: 2, name: 'Dr. Jane Smith', image: '/doctor2.jpeg', lastMessage: "Please review the patient's file.",time:'09:33' },
    { id: 3, name: 'Dr. Alice Johnson', image: '/doctor3.jpeg', lastMessage: 'See you at the clinic.',time:'07:24' },
    { id: 4, name: 'Dr. Robert Brown', image: '/doctor4.jpeg', lastMessage: 'We need to adjust the medication.',time:'01:06' },
    { id: 5, name: 'Dr. Emily Davis', image: '/doctor5.jpeg', lastMessage: 'Good job on the surgery today.',time:'10:08' },
  ];

  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. John Doe',
      doctorImage: '/doctor1.jpeg',
      description: 'General check-up the art of medicine consists of amusing the patient while nature cures the disease',
      client: 'Alice Johnson',
      time: '10:00 AM',
      status: 'today',
    },
    {
      id: 2,
      doctorName: 'Dr. Jane Smith',
      doctorImage: '/doctor2.jpeg',
      description: 'Follow-up consultation',
      client: 'Bob Martin',
      time: '11:30 AM',
      status: 'pending',
    },
    {
      id: 3,
      doctorName: 'Dr. Alice Johnson',
      doctorImage: '/doctor3.jpeg',
      description: 'Pediatric check-up',
      client: 'Charlie Smith',
      time: '12:00 PM',
      status: 'cancelled',
    },
  ];

  const notifications = [
    { id: 1, image: '/doctor2.jpeg', note: 'New policy update available.',date:'jan 23, 2024' },
    { id: 2, image: '/doctor4.jpeg', note: 'Appointment reminder for Dr. John Doe.',date:'jan 15, 2024' },
    { id: 3, image: '/doctor2.jpeg', note: 'You have a new message from Dr. Jane Smith.',date:'sep 02, 2024' },
    { id: 4, image: '/doctor6.jpeg', note: 'Your prescription is ready for pickup.',date:'jan 04, 2024' },
  ];

  const handleChatSearchChange = (event) => {
    setChatSearchQuery(event.target.value);
  };

  const handleAppointmentSearchChange = (event) => {
    setAppointmentSearchQuery(event.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveAppointmentsTab(tab);
  };

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(chatSearchQuery.toLowerCase())
  );

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.doctorName.toLowerCase().includes(appointmentSearchQuery.toLowerCase())
  );

  const limitedNotifications = notifications.slice(0, 6);

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
            <a
              href="#"
              className="flex text-blue-700 items-center space-x-1"
              onClick={toggleChatsSidebar}
            >
              <AiOutlineMessage />
              <span>Chats</span>
            </a>
            <a
              href="#"
              className="flex text-blue-700 items-center space-x-1"
              onClick={toggleAppointmentsSidebar}
            >
              <AiOutlineCalendar />
              <span>All appointments</span>
            </a>
            <a href="#" className="flex text-blue-700 items-center space-x-1">
              <AiOutlineBell />
              <span>Subscription</span>
            </a>
            <a
              href="#"
              className="relative flex text-blue-700 items-center space-x-1"
              onClick={toggleNotificationsDropdown}
            >
              <AiOutlineBell />
              <span>Notification</span>
              {isNotificationsDropdownOpen && (
                <div
                  ref={notificationsRef}
                  className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg w-64 z-50 "
                >
                  <div className="p-4 bg-gray-800 flex space-x-20" >
                    <h2 className="text-left text-white ">Notifications</h2>
                    <h2 className="text-right text-green-500">see all</h2>
                  </div>
                  <div className="flex-grow overflow-y-auto p-2 space-y-2">
                    {limitedNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-center p-2 bg-white hover:bg-gray-100 rounded-lg shadow-sm"
                      >
                        <img
                          src={notification.image}
                          alt="Notification"
                          className="h-8 w-8 rounded-full mr-3"
                        />
                        <div>
                          <p className="text-sm text-gray-600">{notification.note}</p>
                          <p className="text-xs text-gray-500">{notification.date} </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  </div>
                
              )}
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
          <p>{getCurrentDate()}</p> 
          <p className="font-bold">Good Morning, Mrs. Jane</p>
          <p>A quick lunch break to recharge, then back to take charge</p>
        </div>

        <div className="flex-grow"></div> 

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

      {isChatsSidebarOpen && (
        <div className="fixed top-0 right-0 w-full h-full flex items-center justify-end bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/3 h-full overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <AiOutlineLeft
                  className="text-gray-700 cursor-pointer"  
                  onClick={toggleChatsSidebar}  
                />
                <h2 className="text-xl font-bold">All Chats</h2>
              </div>
            </div>
            <div className="relative flex items-center mb-4">
            <AiOutlineSearch className="absolute left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search chats"
                value={chatSearchQuery}
                onChange={handleChatSearchChange}
                className="w-full pl-10 p-2 border rounded"
              />
            </div>
            <div className="flex-grow overflow-y-auto">
  {filteredChats.map((chat) => (
    <div key={chat.id} className="flex items-center p-2 hover:bg-gray-100 rounded">
      <img src={chat.image} alt={chat.name} className="h-10 w-10 rounded-full mr-3" />
      <div className="flex-grow">
        <div className="flex justify-between">
          <p className="font-bold">{chat.name}</p>
          <p className="text-sm text-gray-500">{chat.time}</p> 
        </div>
        <p className="text-sm text-gray-600">{chat.lastMessage}</p>
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      )}

      {isAppointmentsSidebarOpen && (
        <div className="fixed top-0 right-0 w-full h-full flex items-center justify-end bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/3 h-full overflow-auto">
          <div className='flex justify-between items-center mb-4'>
            <div className="flex items-center space-x-2">
               <AiOutlineLeft
                  className="text-gray-700 cursor-pointer"  
                  onClick={toggleAppointmentsSidebar}  
                />
              
              <h2 className="text-xl font-bold">All Appointments</h2>
             
            </div>
            </div>
            <div className="relative flex items-center mb-4">
  <AiOutlineSearch className="absolute left-3 text-gray-400" />
  <input
    type="text"
    placeholder="Search appointments"
    value={appointmentSearchQuery}
    onChange={handleAppointmentSearchChange}
    className="w-full pl-10 p-2 border rounded"
  />
</div>

            <div className="flex justify-between mb-6">
              <button
                className={`flex-auto p-2 ${
                  activeAppointmentsTab === 'today' ? 'bg-slate-50 text-slate-800' : 'bg-gray-50'
                }`}
                onClick={() => handleTabChange('today')}
              >
                Today's Appointments
              </button>
              <button
                className={`flex-auto p-2 ${
                  activeAppointmentsTab === 'pending' ? 'bg-slate-50 text-slate-900' : 'bg-gray-50'
                }`}
                onClick={() => handleTabChange('pending')}
              >
                Pending Appointments
              </button>
              <button
                className={`flex-auto p-2 ${
                  activeAppointmentsTab === 'cancelled'
                    ? 'bg-slate-100 text-slate-800'
                    : 'bg-gray-50'
                }`}
                onClick={() => handleTabChange('cancelled')}
              >
                Cancelled Appointments
              </button>
            </div>
            <div className="flex-grow overflow-y-auto">
              {filteredAppointments
                .filter((appointment) => appointment.status === activeAppointmentsTab)
                .map((appointment) => (
                  <div
                    key={appointment.id}
                    className="relative items-center p-2 hover:bg-gray-100 rounded"
                  >
                    <img
                      src={appointment.doctorImage}
                      alt={appointment.doctorName}
                      className=" absolute top-4 left-0 h-11 w-12 rounded-full mr-2"
                    />
                    <div className='pl-14'>
                      <p className="font-bold">{appointment.doctorName}</p>
                      <p className="text-sm text-gray-600">{appointment.description}</p>
                      <p className="text-sm text-blue-600">
                        Client: {appointment.client} | Time: {appointment.time}
                      </p>
                      {activeAppointmentsTab !== 'cancelled' && (
                        <div className="flex space-x-2 mt-4">
                          <button className="bg-blue-500 text-white px-5 py-1 rounded">
                            Cancel
                          </button>
                          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded flex items-center">
                            Reschedule
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
