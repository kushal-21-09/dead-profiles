"use client";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import profile from "@/public/icons/profile.svg";
import { Key, useEffect, useState } from "react";

interface Person {
  floor: string;
  name: string;
  relation: string;
  dateOfDeath: string;
  funeralDate: string;
  room: string;
  location: string;
  image: string; 
}

export default function Home() {
  const [data, setData] = useState<Person[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://funeral-management-system-backend.onrender.com/funeral-parlors/floor?floor=1"
      );
      const result = await response.json();
  
      if (result.success && result.data && result.data[0]?.deceasedPersons) {
        const transformedData: Person[] = result.data[0].deceasedPersons.map(
          (person: any) => ({
            floor: `Floor ${result.data[0].floor}`,
            name: person.name,
            relation: person.relationship,
            dateOfDeath: person.dateOfDeath.split("T")[0], // Format date as YYYY-MM-DD
            funeralDate: person.funeralDate.split("T")[0], // Format date as YYYY-MM-DD
            room: `Room ${result.data[0].roomNumber}`,
            location: person.burialSite,
            image: person.image,
            mournerInfo: person.mournerInfo, 
          })
        );
        setData(transformedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    // const dummyData: Person[] = [
    //   {
    //     floor: "3rd Floor",
    //     room: "Room 302, Daegu Memorial Park",
    //     name: "Cho Yeon-Hee",
    //     relation: "Daughter of Han Byung-Soon and Kang Mi-Hye",
    //     dateOfDeath: "2024-12-01",
    //     location: "Hanrim Hospital Funeral Hall",
    //     image: profile,
    //   },
     
    // ];

    fetchData();
  }, []);

  // Conditional styles based on the length of the data
  const getCardLayout = () => {
    if (data.length === 2) {
      return "w-full h-full md:grid md:grid-cols-2 md:gap-5 gap-10";
    }
    return "w-full grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-10";
  };

  return data?.length === 1 ? (
    <div className="relative pb-[100px] flex flex-col items-center bg-customGray min-h-screen py-10 w-full">
      <div className={`w-full`}>
        {data.map((person: Person, index: Key | null | undefined) => (
          <ProfileCard key={index} person={person} dataLength={data.length} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  ) : (
    <div className="relative pb-[100px] flex flex-col items-center bg-customBlack min-h-screen py-10 w-full">
      <div className={`${getCardLayout()} px-6 lg:px-12`}>
        {data.map((person: Person, index: Key | null | undefined) => (
          <ProfileCard key={index} person={person} dataLength={data.length} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}
