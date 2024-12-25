import Image from "next/image";
import dummyImage from "@/public/profile.svg";
import plus from "@/public/plusIcon.svg";

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
      "w-full bg-gray-900 text-white rounded-lg flex flex-col p-4 border border-gray-800";

    if (dataLength === 2) {
      return `${baseClasses} w-full h-full mx-auto`;
    } else {
      return baseClasses;
    }
  };

  const getAvatarSize = () => {
    if (dataLength === 2) {
      return "h-[240px] w-[320px]"; // 120px
    } else {
      return "h-24 w-24"; // 100px
    }
  };

  return dataLength === 1 ? (
    <div className="h-full w-full bg-black text-white flex justify-center items-center p-5">
      <div className="w-full max-w-6xl rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-2 border-white rounded-[8px] px-5 py-5 mb-4 w-full">
        <p className="font-bold text-lg text-white">{person.floor}</p>
        <p className="font-bold text-xl text-white">{person.name}</p>
        <Image src={plus} alt="icon" height={24} width={24} />
      </div>
      
        <div className=" flex flex-row items-center p-6 ">
          {/* Left Section: Image */}
          <div className="w-1/3 flex justify-center items-center">
            <Image
              src={person.image || dummyImage}
              alt="avatar"
              className="h-[480px] w-[640px] object-cover rounded-lg"
            />
          </div>

          {/* Right Section: Details */}
          <div className="w-[800px] flex flex-col gap-6 pl-14">
            {/* Relatives List */}
            <div className="grid grid-cols-2 gap-5 bg-gray-900 p-5 rounded-lg border-2 border-gray-800">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p className="text-sm font-bold">아들</p>
                  <p className="text-sm font-bold">
                  아들이름
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Details */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between p-4 border border-gray-900 rounded-lg bg-gray-900">
                <p>입관</p>
                <p>{person.dateOfDeath || "2024.03.27 11:00"}</p>
              </div>

              <div className="flex justify-between p-4 border border-gray-900 rounded-lg bg-gray-900">
                <p>발인</p>
                <p>{person.room || "2024.03.27 11:00"}</p>
              </div>

              <div className="flex justify-between p-4 border border-gray-900 rounded-lg bg-gray-900">
                <p>장지</p>
                <p>{person.location || "대전 현충원"}</p>
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

      <div className="flex flex-row items-center gap-4 mb-4">
        <Image
          src={person.image || dummyImage}
          alt="avatar"
          className={`${getAvatarSize()} object-cover`}
        />
        <p className="text-white font-bold text-center text-sm">
          {person.relation}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between p-2 border border-gray-700 rounded-md bg-gray-800">
          <p>입관</p>
          <p>{person.dateOfDeath}</p>
        </div>

        <div className="flex justify-between p-2 border border-gray-700 rounded-md bg-gray-800">
          <p>발인</p>
          <p>{person.room}</p>
        </div>

        <div className="flex justify-between p-2 border border-gray-700 rounded-md bg-gray-800">
          <p>장지</p>
          <p>{person.location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
