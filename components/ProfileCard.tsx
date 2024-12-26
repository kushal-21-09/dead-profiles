import Image from "next/image";
import dummyImage from "@/public/icons/profile.svg";
import plus from "@/public/icons/plusIcon.svg";

const ProfileCard = ({
  person,
  dataLength,
}: {
  person: any;
  dataLength: number;
}) => {
  // Dynamic styles based on the length of the data
  const getCardClasses = () => {
    let baseClasses =
      "w-full bg-customBlack text-white rounded-lg flex flex-col p-4 border border-gray-800";

    if (dataLength === 2) {
      return `${baseClasses} w-full h-full mx-auto`;
    } else {
      return baseClasses;
    }
  };
  
  const getAvatarSize = () => {
    if (dataLength === 2) {
      return "h-[335px] w-[316px]"; // 120px
    } else {
      return "h-[220px] w-[220px]"; // 100px
    }
  };

  return dataLength === 1 ? (
    <div className="w-full bg-customGray text-white flex justify-center items-center ">
  <div className="w-full max-w-6xl rounded-lg shadow-lg overflow-auto">
    {/* Header */}
    <div className="flex justify-between items-center border-[3px] border-white rounded-[8px] h-[108px] lg:p-10 p-5 mb-3 w-full">
      <p className="font-bold text-[44px] text-white">{person.floor}</p>
      <p className="font-bold text-[60px] text-white">{person.name}</p>
      <Image src={plus} alt="icon" height={100} width={100} className="h-[48px] w-[48px]"/>
    </div>

    <div className="flex flex-col md:flex-row items-center py-5 w-full">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <Image
          src={person.image || dummyImage}
          alt="avatar"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Right Section: Details */}
      <div className="w-full md:w-[800px] flex flex-col gap-6 pl-0 md:pl-14">
        {/* Relatives List */}
        <div className="grid grid-cols-2 px-4 py-2 h-[340px] rounded-lg border-[3px] border-customBorder">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex  justify-around items-center">
              <p className="text-[30px] font-bold text-[#909090]">아들</p>
              <p className="text-[32px] font-bold">아들이름</p>
            </div>
          ))}
        </div>

        {/* Additional Details */}
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-10 py-2 px-4 border-[3px] border-customBorder rounded-lg">
            <p className="text-[#909090] text-[30px]">입관</p>
            <p className="text-[32px]">{person.dateOfDeath || "2024.03.27 11:00"}</p>
          </div>

          <div className="flex gap-10 py-2 px-4 border-[3px] border-customBorder rounded-lg ">
            <p className="text-[#909090] text-[30px]">발인</p>
            <p className="text-[32px]">{person.room || "2024.03.27 11:00"}</p>
          </div>

          <div className="flex gap-10 py-2 px-4 border-[3px] border-customBorder rounded-lg">
            <p className="text-[#909090] text-[30px]">장지</p>
            <p className="text-[32px]">{person.location || "대전 현충원"}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  ) : (
    <div className={getCardClasses()}>
    <div className="flex justify-between items-center mb-4">
      <p className="font-bold text-lg text-white">{person.floor}</p>
      <p className="font-bold text-xl text-white">{person.name}</p>
      <Image src={plus} alt="icon" height={24} width={24} />
    </div>
  
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-4">
      <Image
        src={person.image || dummyImage}
        alt="avatar"
        className={`${getAvatarSize()} object-cover rounded-lg`}
      />
  
      {/* Relatives List */}
      <div className="grid px-4 py-2 rounded-lg border-2 h-[340px] w-[330px] border-[3px] border-customBorder">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex justify-between items-center">
            <p className="text-[30px] font-bold text-[#909090]">아들</p>
            <p className="text-[32px] font-bold">아들이름</p>
          </div>
        ))}
      </div>
    </div>
  
    {/* Additional Details */}
    <div className="flex flex-col gap-4">
      <div className="flex gap-10 px-4 py-2 border-[3px] border-customBorder rounded-lg h-[84px]">
        <p className="text-[30px] text-[#909090]">입관</p>
        <p className="text-[32px]">{person.dateOfDeath}</p>
      </div>
  
      <div className="flex gap-10 px-4 py-2 border-[3px] border-customBorder rounded-lg h-[84px] ">
        <p className="text-[30px] text-[#909090]">발인</p>
        <p className="text-[32px]">{person.room}</p>
      </div>
  
      <div className="flex gap-10 px-4 py-2 border-[3px] border-customBorder rounded-lg h-[84px]">
        <p className="text-[30px] text-[#909090]">장지</p>
        <p className="text-[32px]">{person.location}</p>
      </div>
    </div>
  </div>
  
  );
};

export default ProfileCard;
