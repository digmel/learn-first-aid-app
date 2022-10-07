import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "@router";
import { StoreProvider } from "@store";
import { Text, View } from "react-native";
import { supabase } from "@configs";
import Menu from "./Menu.svg";
import { Svg, Icon } from "@components";

const App = () => {
  const [cards, setCards] = useState([]);
  const [fetchedError, setFetchedError] = useState(null);
  const [svgURL, setSvgURL] = useState<any>();

  const fetchData = async () => {
    try {
      const { data: cards, error } = await supabase.from("cards").select("SVG");

      if (cards) {
        setCards(cards);
        console.log("success fetching");
      } else {
        console.log("error is happening");
      }
    } catch (error) {
      console.log("first", error);
    }
  };

  const fetchSVG = async () => {
    try {
      const { data, error } = await supabase.storage
        .from("illustrations")
        .getPublicUrl(`intro/${cards[0].SVG}.svg`);

      setFetchedError(error);
      if (data) {
        setSvgURL(data.publicURL);
        console.log("success fetching svg");
      }
    } catch (error) {
      console.log("error on svgs", error);
    }
  };

  useEffect(() => {
    fetchData().then(() => {
      fetchSVG();
    });
  }, []);

  console.log("hehee", svgURL, fetchedError);

  return (
    <StoreProvider>
      <NavigationContainer>
        {/* <Router /> */}
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Database test</Text>

          <View style={{ width: 400, height: 400, backgroundColor: "green" }}>
            <Svg uri={svgURL} />
          </View>

          <Menu width={40} height={40} />
          <Icon name="BulletSolid" />
          <Text>{cards && JSON.stringify(cards[0])}</Text>
        </View>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
