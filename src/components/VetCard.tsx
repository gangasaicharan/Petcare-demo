import React from 'react';

interface VetCardProps {
    name: string;
    specialization: string;
    status: string;
    image: string;
}

const VetCard = ({ name, specialization, status, image }: VetCardProps) => {
    return (
        <div className="bg-white p-4 rounded shadow flex items-center mb-4">
            <img src={image} alt={name} className="w-20 h-20 rounded-full mr-4" />
            <div className="flex-1 justify-center">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold">{name}</h3>
                          <p>{specialization}</p>
                        
                    </div>
                    <p className={status === 'Online' ? 'text-green-500' : 'text-red-500'}>{status}</p>
                </div>
                <div className='flex justify-center mt-4 space-x-2'>
                <button className="bg-transparent bg-blue-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-2 border border-blue-500 hover:border-transparent rounded mt-2">3 slots available</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                    Message</button>
                </div>
             </div>
        </div>
    );
};

export default VetCard;
