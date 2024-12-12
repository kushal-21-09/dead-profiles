import { Avatar, Box, Card, CardContent, Typography } from "@mui/joy";
import Image from "next/image";
import dummyImage from '@/public/plusIcon.svg';

const ProfileCard = ({ person, dataLength }: { person: any; dataLength: number }) => {
  // Dynamic styles based on the length of the data
  const getCardStyle = () => {
    const baseStyle = {
      width: "100%",
      backgroundColor: "#1E1E1E",
      color: "white",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      padding: "16px",
      border: "1px solid #333",
    };

    if (dataLength === 1) {
      return { ...baseStyle, maxWidth: "600px", margin: "0 auto" }; 
    } else if (dataLength === 2) {
      return { ...baseStyle, width: "100%", height:"100%", margin: "0 auto"  };
    } else {
      return baseStyle; 
    }
  };

  const getAvatarSize = () => {
    if (dataLength === 1) {
      return "150px";
    } else if (dataLength === 2) {
      return "120px"; 
    } else {
      return "100px";
    }
  };

  return (
    <Card sx={getCardStyle()}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "#FFFFFF" }}
        >
          {person.floor}
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#FFFFFF" }}
        >
          {person.name}
        </Typography>
        <Image src={dummyImage} alt="icon" height={24} width={24} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Avatar
          src={person.image || dummyImage}
          sx={{
            width: getAvatarSize(),
            height: getAvatarSize(),
            borderRadius: "50%",
            border: "2px solid #FFFFFF",
          }}
        />
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          {person.relation}
        </Typography>
      </Box>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 12px",
            border: "1px solid #555",
            borderRadius: "4px",
            backgroundColor: "#2A2A2A",
          }}
        >
          <Typography>입관</Typography>
          <Typography>{person.dateOfDeath}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 12px",
            border: "1px solid #555",
            borderRadius: "4px",
            backgroundColor: "#2A2A2A",
          }}
        >
          <Typography>발인</Typography>
          <Typography>{person.room}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 12px",
            border: "1px solid #555",
            borderRadius: "4px",
            backgroundColor: "#2A2A2A",
          }}
        >
          <Typography>장지</Typography>
          <Typography>{person.location}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;