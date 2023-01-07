import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeScreen = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const ListContainer = styled.View`
  flex: 1;
  padding: 16px;
`;
export const RestaurantsScreen = () => (
  <SafeScreen>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <ListContainer>
      <RestaurantInfoCard />
    </ListContainer>
  </SafeScreen>
);
