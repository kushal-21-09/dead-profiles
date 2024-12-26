import Image from "next/image";
import dummyImage from "@/public/icons/profile.svg";
import plus from "@/public/icons/Christianity.svg";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

const ProfileCard = ({
  person,
  dataLength,
}: {
  person: any;
  dataLength: number;
}) => {
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
      return "h-[335px] w-[316px]";
    } else {
      return "h-[220px] w-[220px]";
    }
  };

  return dataLength === 1 ? (
    <div className="w-full bg-customGray text-white flex justify-center items-center ">
      <div className="w-full max-w-6xl rounded-lg shadow-lg overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-[3px] border-white rounded-[8px] p-5 mb-3 w-full">
          <p className="font-bold text-2xl text-white">{person.floor}, {person.room}</p>
          <p className="font-bold text-3xl text-white">{person.name}</p>
          <Image src={plus} alt="icon" height={100} width={100} className="h-[48px] w-[48px]" />
        </div>

        <div className="flex flex-col md:flex-row items-center py-5 w-full">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <Image
              src={dummyImage}
              width={100}
              height={100}
              alt="avatar"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>

          {/* Right Section: Details */}
          <div className="w-full md:w-[800px] flex flex-col gap-5 pl-0 md:pl-14">
            {/* Relatives List */}
            <div className="grid grid-cols-2 h-[275px] rounded-lg border-[3px] border-customBorder">
              {person.mournerInfo?.map((mourner: { relationship: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => (
                <div key={index} className="flex justify-around items-center">
                  <p className="text-[24px] 2xl:text-[30px] font-bold text-[#909090]">
                    {mourner.relationship}
                  </p>
                  <p className="text-[28px] 2xl:text-[32px] font-bold">
                    {mourner.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Details */}
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-10 py-2 px-4 border-[3px] border-customBorder rounded-lg">
                <p className="text-[#909090] text-[24px] 2xl:text-[30px]">입관</p>
                <p className="text-[28px] 2xl:text-[32px]">{person.dateOfDeath}</p>
              </div>

              <div className="flex gap-10 py-2 px-4 border-[3px] border-customBorder rounded-lg ">
                <p className="text-[#909090] text-[24px] 2xl:text-[30px]">발인</p>
                <p className="text-[28px] 2xl:text-[32px]">{person.funeralDate}</p>
              </div>

              <div className="flex gap-10 py-2 px-4 border-[3px] border-customBorder rounded-lg">
                <p className="text-[#909090] text-[24px] 2xl:text-[30px]">장지</p>
                <p className="text-[28px] 2xl:text-[32px]">{person.location || "대전 현충원"}</p>
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
          src={dummyImage}
          alt="avatar"
          width={100}
          height={100}
          className={`${getAvatarSize()} object-cover rounded-lg`}
        />

        {/* Relatives List */}
        <div className="grid px-4 py-2 rounded-lg border-2 h-[340px] w-[330px] border-[3px] border-customBorder">
          {person.mournerInfo?.map((mourner: { relationship: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => (
            <div key={index} className="flex justify-between items-center">
              <p className="text-[24px] 2xl:text-[30px] font-bold text-[#909090]">
                {mourner.relationship}
              </p>
              <p className="text-[28px] 2xl:text-[32px] font-bold">
                {mourner.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Details */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-between sm:flex-row gap-4 2xl:gap-10 px-4 py-2 border-[3px] border-customBorder rounded-lg h-auto">
          <p className="text-[24px] 2xl:text-[30px] text-[#909090]">입관</p>
          <p className="text-[28px] 2xl:text-[32px]">{person.dateOfDeath}</p>
        </div>

        <div className="flex flex-col items-center justify-between sm:flex-row gap-4 2xl:gap-10 px-4 py-2 border-[3px] border-customBorder rounded-lg h-auto">
          <p className="text-[24px] 2xl:text-[30px] text-[#909090]">발인</p>
          <p className="text-[28px] 2xl:text-[32px]">{person.funeralDate}</p>
        </div>

        <div className="flex flex-col items-center justify-between sm:flex-row gap-4 2xl:gap-10 px-4 py-2 border-[3px] border-customBorder rounded-lg h-auto">
          <p className="text-[24px] 2xl:text-[30px] text-[#909090]">장지</p>
          <p className="text-[28px] 2xl:text-[32px]">{person.location}</p>
        </div>
      </div>

    </div>

  );
};

export default ProfileCard;
