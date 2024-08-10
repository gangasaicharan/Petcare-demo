import React from 'react';
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
    return (
        <div className="bg-white p-4 rounded shadow">
            <div className="flex items-start mb-4">
                <img src={doctorImage} alt={doctor} className="w-20 h-20 rounded-full mr-4" />
                <div className="flex-1 justify-center ">
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
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Approve</button>
                            <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-6 border border-red-500 hover:border-transparent rounded">Reject</button>
                        </>
                    ) : (
                        <>
                            <button className="bg-blue-500 text-white px-6 py-2 rounded">Cancel</button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded flex items-center">
                                <AiOutlineMessage className="mr-2" />
                                Message
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
