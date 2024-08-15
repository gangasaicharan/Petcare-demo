"use client";

import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';

interface AppointmentCardProps {
  doctor: string;
  doctorImage: string;
  client: string;
  pet: string;
  time: string;
  isPending?: boolean;
}

const AppointmentCard = ({ doctor, doctorImage, client, pet, time, isPending }: AppointmentCardProps) => {
  const [showApprovePopup, setShowApprovePopup] = useState(false);
  const [showRejectPopup, setShowRejectPopup] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);

  const handleApproveClick = () => setShowApprovePopup(true);
  const handleRejectClick = () => setShowRejectPopup(true);
  const handleCancelClick = () => setShowCancelPopup(true);
  const handleMessageClick = () => setShowMessagePopup(true);

  const closeAllPopups = () => {
    setShowApprovePopup(false);
    setShowRejectPopup(false);
    setShowCancelPopup(false);
    setShowMessagePopup(false);
  };

  const handleYesAction = () => {
    console.log('Yes action triggered');
    closeAllPopups();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-start mb-4">
        <img src={doctorImage} alt={doctor} className="w-20 h-20 rounded-full mr-4" />
        <div className="flex-1 justify-center">
          <h3 className="font-bold">{doctor}</h3>
          <p className="text-sm text-blue-600">Client: {client}</p>
          <p className="text-sm text-blue-500">Pet: {pet}</p>
          <p className="text-sm text-black-500">{time}</p>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <div className="flex space-x-4">
          {isPending ? (
            <>
              <button onClick={handleApproveClick} className="bg-blue-500 text-white px-4 py-2 rounded">Approve</button>
              <button onClick={handleRejectClick} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-6 border border-red-500 hover:border-transparent rounded">Reject</button>
            </>
          ) : (
            <>
              <button onClick={handleCancelClick} className="bg-blue-500 text-white px-6 py-2 rounded">Cancel</button>
              <button onClick={handleMessageClick} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded flex items-center">
                <AiOutlineMessage className="mr-2" />
                Message
              </button>
            </>
          )}
        </div>
      </div>

      {showApprovePopup && (
        <Popup title="Approve Appointment" onYes={handleYesAction} onNo={closeAllPopups} onClose={closeAllPopups}>
          <p>Do you really want to approve this appointment?</p>
        </Popup>
      )}

      {showRejectPopup && (
        <Popup title="Reject Appointment" onYes={handleYesAction} onNo={closeAllPopups} onClose={closeAllPopups}>
          <p>Do you really want to reject this appointment?</p>
        </Popup>
      )}

      {showCancelPopup && (
        <Popup title="Cancel Appointment" onYes={handleYesAction} onNo={closeAllPopups} onClose={closeAllPopups}>
          <p>Do you really want to cancel this appointment?</p>
        </Popup>
      )}

      {showMessagePopup && (
        <Popup title="Send a Message" onClose={closeAllPopups}>
          <p>Send a message to the client about the appointment.</p>
        </Popup>
      )}
    </div>
  );
};

interface PopupProps {
  title: string;
  onClose: () => void;
  onYes?: () => void;
  onNo?: () => void;
  children: React.ReactNode;
}

const Popup = ({ title, onClose, onYes, onNo, children }: PopupProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {children}
        <div className="mt-4 flex justify-end space-x-4">
          {onYes && onNo && (
            <>
              <button onClick={onYes} className="bg-green-500 text-white px-4 py-2 rounded">Yes</button>
              <button onClick={onNo} className="bg-red-500 text-white px-4 py-2 rounded">No</button>
            </>
          )}
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
