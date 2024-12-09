import { Avatar, Box, Card, CardContent, Typography } from "@mui/joy";
import Image from "next/image";
import plus from '@/public/plusIcon.svg';

const ProfileCard = ({ person }: { person: any }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
        <Typography
          level="title-sm"
          sx={{ fontWeight: 600, color: 'white', fontSize: { xs: '0.9rem', md: '1rem' } }}
        >
          {person.floor}
        </Typography>
        <Typography
          level="title-md"
          sx={{ fontWeight: 700, color: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}
        >
          {person.name}
        </Typography>
        <div className="bg-white px-2 py-1 rounded-full flex items-center justify-center">
          <Image src={plus} alt="icon" height={20} width={12}></Image>
        </div>
      </div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          paddingInlineStart: '16px',
          flexGrow: 1,
          paddingBottom: { xs: '10px', md: '20px' }, // Adjust padding based on screen size
        }}
      >
        <Avatar src={person.image} size="lg" />
        <div className="border-2 border-gray-500 p-2 rounded w-full">
          <Typography
            level="body-md"
            sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.9rem', md: '1rem' } }}
          >
            {person.relation}
          </Typography>
        </div>
      </Box>
      <CardContent sx={{ paddingTop: 2, paddingBottom: 0 }}>
        <div className="flex items-center justify-between border-2 border-gray-500 p-2 rounded w-full">
          <Typography level="title-sm" sx={{ color: 'white', fontSize: { xs: '0.8rem', md: '1rem' } }}>
            입관
          </Typography>
          <Typography level="body-sm" sx={{ color: 'white', fontSize: { xs: '0.8rem', md: '1rem' } }}>
            {person.dateOfDeath}
          </Typography>
        </div>
        <div className="flex items-center justify-between border-2 border-gray-500 p-2 rounded w-full">
          <Typography level="title-sm" sx={{ color: 'white', fontSize: { xs: '0.8rem', md: '1rem' } }}>
            발인
          </Typography>
          <Typography level="body-sm" sx={{ color: 'white', fontSize: { xs: '0.8rem', md: '1rem' } }}>
            {person.room}
          </Typography>
        </div>
        <div className="flex justify-between items-center border-2 border-gray-500 p-2 rounded w-full">
          <Typography level="title-sm" sx={{ color: 'white', fontSize: { xs: '0.8rem', md: '1rem' } }}>
            장지
          </Typography>
          <Typography level="body-sm" sx={{ color: 'white', fontSize: { xs: '0.8rem', md: '1rem' } }}>
            {person.location}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
