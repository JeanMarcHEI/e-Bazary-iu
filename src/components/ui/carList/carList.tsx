"use client";
import * as React from "react";
import { Box, Button } from "@mui/material";
import { FaDollarSign } from "react-icons/fa";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { RiGasStationLine } from "react-icons/ri";
import Modal from "@mui/material/Modal";
import CarShow from "./CarShow";
const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const iconStyle = {
  fontSize: "1.3rem",
};
const pStyle = {
  fontSize: "0.9rem",
};
interface CarListProps {
  name: string;
  model: string;
  price: number;
  color: string;
  power: number;
  placeNumber: number;
  motorType: string;
  status: boolean;
  type: string;
  imageurl: string;
  description: string;
}

const CarList = ({
  name,
  model,
  price,
  color,
  power,
  placeNumber,
  motorType,
  status,
  type,
  imageurl,
  description,
}: CarListProps) => {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Box
      sx={{
        height: "fit-content",
        width: "22%",
        boxShadow: "5px 5px 5px  rgba(0,0,0,0.3)",
        borderRadius: "10px",
        backgroundColor: "white",
        marginBlock: "1vh",
        padding: "8px",
      }}
    >
      <Box
        sx={{
          height: "30vh",
          width: "100%",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imageurl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "space-between",
          padding: "8px",
          cursor: "pointer",
        }}
        onClick={toggleModal}
      >
        <p
          style={{
            color: "white",
            background: "black",
            height: "fit-content",
            fontSize: "0.9rem",
            padding: "4px 7px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          202
        </p>
        <p
          style={{
            color: "white",
            background: "#3ce669",
            height: "fit-content",
            padding: "4px 7px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          {model}
        </p>
      </Box>
      <Box>
        <p
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            paddingBlock: "1vh",
          }}
        >
          {name}
        </p>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              fontSize: "0.9rem",
              color: "red",
              alignItems: "center",
              paddingBlock: "1vh",
            }}
          >
            <FaDollarSign />
            <p style={{ fontWeight: "bolder" }}>{price}</p>
          </Box>
          <Box
            sx={{ height: "3vh", width: "3vw", backgroundColor: "black" }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingBlock: "1vh",
          }}
        >
          <Box sx={styles}>
            <LiaTachometerAltSolid style={iconStyle} />
            <p style={pStyle}>{power}</p>
          </Box>
          <Box sx={styles}>
            <MdAirlineSeatReclineExtra style={iconStyle} />
            <p style={pStyle}>{placeNumber}</p>
          </Box>
          <Box sx={styles}>
            <RiGasStationLine style={iconStyle} />
            <p style={pStyle}>{motorType}</p>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            "margin": "1vh auto",
            "width": "100%",
            "backgroundColor": "#f04f4f",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          <p>Book Now</p>
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={toggleModal}
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CarShow
          onClose={toggleModal}
          name={name}
          model={model}
          price={price}
          color={color}
          power={power}
          placeNumber={placeNumber}
          motorType={motorType}
          status={status}
          type={type}
          imageurl={imageurl}
          description={description}
        />
      </Modal>
    </Box>
  );
};

export default CarList;
