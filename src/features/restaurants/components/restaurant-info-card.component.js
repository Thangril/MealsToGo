import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const InfoCard = styled(Card)`
  background-color: white;
`;

const InfoCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    address = "100 somewhere street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <InfoCard elevation={5}>
      <InfoCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </InfoCard>
  );
};
