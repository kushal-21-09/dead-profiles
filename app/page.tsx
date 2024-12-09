'use client'
import ProfileCard from "@/components/ProfileCard";
import profile from '@/public/profile.svg'
import { Key, useEffect, useState } from "react";

// Define the shape of your person object
interface Person {
  floor: string;
  name: string;
  relation: string;
  dateOfDeath: string;
  room: string;
  location: string;
  image: (label?: string) => void;
}

export default function Home() {
  // Explicitly define the type of 'data' as an array of 'Person'
  const [data, setData] = useState<Person[]>([]);

  useEffect(() => {
    const dummyData: Person[] = [
      {
        floor: "3rd Floor",
        name: "Cho Yeon-Hee",
        relation: "Daughter of Han Byung-Soon and Kang Mi-Hye",
        dateOfDeath: "2024-12-01",
        room: "Room 302, Daegu Memorial Park",
        location: "Hanrim Hospital Funeral Hall",
        image: profile,  // This may need to be updated depending on how you handle 'profile'
      },  {
        floor: "3rd Floor",
        name: "Cho Yeon-Hee",
        relation: "Daughter of Han Byung-Soon and Kang Mi-Hye",
        dateOfDeath: "2024-12-01",
        room: "Room 302, Daegu Memorial Park",
        location: "Hanrim Hospital Funeral Hall",
        image: profile,  // This may need to be updated depending on how you handle 'profile'
      },  {
        floor: "3rd Floor",
        name: "Cho Yeon-Hee",
        relation: "Daughter of Han Byung-Soon and Kang Mi-Hye",
        dateOfDeath: "2024-12-01",
        room: "Room 302, Daegu Memorial Park",
        location: "Hanrim Hospital Funeral Hall",
        image: profile,  // This may need to be updated depending on how you handle 'profile'
      }
     
    ];

    setData(dummyData);
  }, []);

  // Conditional styles based on the length of the data
  const getCardLayout = () => {
    if (data.length === 1) {
      return "w-full h-screen"; 
    }
    if (data.length === 2) {
      return "w-full h-screen md:grid md:grid-cols-2 md:gap-5 gap-10"; 
    }
    return "w-full grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-10"; 
  };

  return (
    <div className="flex flex-col items-center bg-black min-h-screen py-10 w-full">
      <div className={`${getCardLayout()} px-6 lg:px-12`}>
        {data.map((person: Person, index: Key | null | undefined) => (
          <ProfileCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}
