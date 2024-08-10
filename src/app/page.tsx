import React from 'react';
import AppointmentList from "@/components/AppointmentList";
import VetCard from "@/components/VetCard";

const appointmentsToday = [
    { doctor: 'Dr. Bobby Sawyer', doctorImage: 'doctor10.jpeg', client: 'Mr. Shashi Singh', pet: 'Cat (Imili)', time: '9:30 - 10:00 AM' },
    { doctor: 'Dr. Kanishk', doctorImage: 'doctor1.jpeg', client: 'Mr. Sahil Singh', pet: 'Dog (Jerry)', time: '9:30 - 10:00 AM' },
    { doctor: 'Dr. Rahul Kumar', doctorImage: 'doctor2.jpeg', client: 'Mr. Shashi Singh', pet: 'Cat (Imili)', time: '9:30 - 10:00 AM' }
];

const pendingAppointments = [
    { doctor: 'Dr. Juhi', doctorImage: 'doctor5.jpeg', client: 'Mr. Shashi Singh', pet: 'Cat (Imili)', time: 'Sun, 06 Jan 9:30 - 10:00 AM', isPending: true },
    { doctor: 'Dr. Rahul Kumar', doctorImage: 'doctor6.jpeg', client: 'Mr. Shashi Singh', pet: 'Cat (Imili)', time: 'Sun, 06 Jan 9:30 - 10:00 AM', isPending: true }
];

const vets = [
    { name: 'Dr. Juhi', specialization: 'Veterinary orthopaedic', status: 'Online', image: 'doctor4.jpeg' },
    { name: 'Dr. Kanishk', specialization: 'Musculoskeletal injuries and diseases for Dogs', status: 'On Break', image: 'doctor5.jpeg' }
];

export default function Home() {
    return (
        <main>
            <div className="grid grid-cols-3 gap-4 ">
                
                <AppointmentList title="Today's Appointments" appointments={appointmentsToday}   />
                <AppointmentList title="Pending Appointments" appointments={pendingAppointments} />
                <div className="bg-white-200 p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4 text-blue-500">All Vets ({vets.length})</h2>
                    <div className="space-y-4">
                        {vets.map((vet, index) => (
                            <VetCard key={index} {...vet} />
                        ))}
                    </div>
                    <div className=' flex space-x-2 mt-5 justify-center'>
                    <button className=" border-dotted border-4 border-light-blue-500 bg-transparent flex  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border-blue-500 hover:border-transparent rounded">
                        Add more vets</button>
                    </div>
                    </div>
            </div>
        </main>
    );
}
