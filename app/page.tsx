"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import profile from '@/public/profile.svg';

interface Person {
    floor: string;
    name: string;
    relation: string;
    dateOfDeath: string;
    room: string;
    location: string;
  }

export default function Home() {
  const [data, setData] = useState<Person[]>([]);

  useEffect(() => {
    const dummyData = [
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
        floor: "2nd Floor",
        name: "Kim Min-Seok",
        relation: "Son of Kim Hyun-Woo and Park Soo-Jin",
        dateOfDeath: "2024-11-30",
        room: "Room 202, Seoul National Cemetery",
        location: "Seoul Memorial Funeral Hall",
        image: profile,
      },
      {
        floor: "1st Floor",
        name: "Park Ji-Eun",
        relation: "Wife of Lee Sang-Hyun",
        dateOfDeath: "2024-11-28",
        room: "Room 101, Incheon Sky Park",
        location: "Incheon Funeral Hall",
        image: profile,
      },
      {
        floor: "4th Floor",
        name: "Lee Hwa-Young",
        relation: "Mother of Choi Woo-Jin and Hwang Ji-Young",
        dateOfDeath: "2024-12-02",
        room: "Room 402, Busan Memorial Park",
        location: "Busan National Cemetery",
        image: profile,
      },
    ];

    setData(dummyData);
  }, []);

  return (
    <div className="flex flex-col items-center bg-black min-h-screen py-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-6 lg:px-12 ">
      {data.map((person, index) => (
        <ProfileCard key={index} person={person} />
      ))}
      </div>
    </div>
  );
};
