import React from 'react';
import AppointmentCard from './AppointmentCard';

interface AppointmentListProps {
    title: string;
    appointments: {
        doctor: string;
        doctorImage: string;
        client: string;
        pet: string;
        time: string;
        isPending?: boolean;
    }[];
}

const AppointmentList = ({ title, appointments }: AppointmentListProps) => {
    // Determine color based on the title
    const titleColorClass = title === "Today's Appointments" ? "text-pink-500 " : "text-green-500";

    return (
        <div className={`p-4 rounded-lg shadow `}>
            <h2 className={`text-lg font-semibold mb-4  ${titleColorClass}`}>
                {title} ({appointments.length}) {/* Display number of appointments */}
            </h2>
            <div className="space-y-4">
                {appointments.map((appointment, index) => (
                    <AppointmentCard key={index} {...appointment} />
                ))}
            </div>
        </div>
    );
};

export default AppointmentList;
