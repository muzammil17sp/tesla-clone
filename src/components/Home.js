import React from "react";
import styled from "styled-components";
import Section from "./Section";
const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        image="model-s.jpg"
        rightButtonText="Custom Order"
        leftButtonText="Existing Order"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        image="model-3.jpg"
        rightButtonText="Custom Order"
        leftButtonText="Existing Order"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        image="model-x.jpg"
        rightButtonText="Custom Order"
        leftButtonText="Existing Order"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-y.jpg"
        rightButtonText="Custom Order"
        leftButtonText="Existing Order"
      />
       <Section
        title="Lowest Cost Solar Panel in America"
        description="Money-back guarantee"
        image="solar-panel.jpg"
        rightButtonText="Order now"
        leftButtonText="Learn more"
      />
       <Section
        title=" Solar for new Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        image="solar-roof.jpg"
        rightButtonText="Custom Order"
        leftButtonText="Existing Order"
      />
           <Section
        title=" Accssories"
         image="accessories.jpg"
        leftButtonText="Shop now"
      />
      
    </Container>
  );
};

export default Home;
const Container = styled.div`
  height: 100vh;
`;
