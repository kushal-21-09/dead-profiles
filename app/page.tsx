"use client";
import ProfileCard from "@/components/ProfileCard";
import profile from "@/public/icons/profile.svg";
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
        image: profile,
      },
      {
        floor: "3rd Floor",
        name: "Cho Yeon-Hee",
        relation: "Daughter of Han Byung-Soon and Kang Mi-Hye",
        dateOfDeath: "2024-12-01",
        room: "Room 302, Daegu Memorial Park",
        location: "Hanrim Hospital Funeral Hall",
        image: profile,
      },
      // {
      //   floor: "3rd Floor",
      //   name: "Cho Yeon-Hee",
      //   relation: "Daughter of Han Byung-Soon and Kang Mi-Hye",
      //   dateOfDeath: "2024-12-01",
      //   room: "Room 302, Daegu Memorial Park",
      //   location: "Hanrim Hospital Funeral Hall",
      //   image: profile,
      // },
      // {
      //   floor: "3rd Floor",
      //   name: "Cho Yeon-Hee",
      //   relation: "Daughter of Han Byung-Soon and Kang Mi-Hye",
      //   dateOfDeath: "2024-12-01",
      //   room: "Room 302, Daegu Memorial Park",
      //   location: "Hanrim Hospital Funeral Hall",
      //   image: profile,
      // },
    ];

    setData(dummyData);
  }, []);

  // Conditional styles based on the length of the data
  const getCardLayout = () => {
    if (data.length === 2) {
      return "w-full h-full md:grid md:grid-cols-2 md:gap-5 gap-10";
    }
    return "w-full grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-10";
  };

  return data?.length === 1 ? (
    <div className="flex flex-col items-center bg-customGray h-screen xl:py-10 w-full">
      <div className={`w-full`}>
        {data.map((person: Person, index: Key | null | undefined) => (
          <ProfileCard key={index} person={person} dataLength={data.length} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center bg-customBlack min-h-screen py-10 w-full">
      <div className={`${getCardLayout()} px-6 lg:px-12`}>
        {data.map((person: Person, index: Key | null | undefined) => (
          <ProfileCard key={index} person={person} dataLength={data.length} />
        ))}
      </div>
    </div>
  );
}
