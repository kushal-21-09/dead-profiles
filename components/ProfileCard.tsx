import React from 'react';
import Image from 'next/image';
import Avatar from '@mui/joy/Avatar';
import plus from '@/public/plusIcon.svg';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

const ProfileCard = ({ person }: { person: any }) => {
    return (
        <Card
            variant="outlined"
            sx={{
                width: '100%',
                maxWidth: 500,
                minHeight: 300,
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 4,
            }}
        >
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
                <Typography
                    level="title-sm"
                    sx={{ fontWeight: 600, color: 'white' }}
                >
                    {person.floor}
                </Typography>
                <Typography
                    level="title-md"
                    sx={{ fontWeight: 700, color: 'white' }}
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
                }}
            >
                <Avatar src={person.image} size="lg" />
                <div className="border-2 border-gray-500 p-2 rounded w-full">
                    <Typography
                        level="body-md"
                        sx={{ color: 'white', fontWeight: 600, }}
                    >
                        {person.relation}
                    </Typography>
                </div>
            </Box>
            <CardContent>
                <div className="flex items-center justify-between border-2 border-gray-500 p-2 rounded w-full">
                    <Typography level="title-sm" sx={{ color: 'white' }}>
                        Date of Death
                    </Typography>
                    <Typography level="body-sm" sx={{ color: 'white' }}>
                        {person.dateOfDeath}
                    </Typography>
                </div>
                <div className="flex items-center justify-between border-2 border-gray-500 p-2 rounded w-full">
                    <Typography level="title-sm" sx={{ color: 'white' }}>
                        Room
                    </Typography>
                    <Typography level="body-sm" sx={{ color: 'white' }}>
                        {person.room}
                    </Typography>
                </div>
                <div className="flex justify-between items-center border-2 border-gray-500 p-2 rounded w-full">
                    <Typography level="title-sm" sx={{ color: 'white' }}>
                        Location
                    </Typography>
                    <Typography level="body-sm" sx={{ color: 'white' }}>
                        {person.location}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileCard;
