import React from "react";
import { MIND_MAP_DATA } from "../Data/MidMapData";
import {
  CardContainer,
  Card,
  CardTitle,
  CardText,
  MindMapTitle,
  MindMapSection,
  MindArrow,
} from "./MindMap.styled";

const MindMap = () => {
  return (
    <MindMapSection Apes id="mindmap">
      <MindMapTitle>MindMap</MindMapTitle>
      <CardContainer>
        {MIND_MAP_DATA.map((item, index) => (
          <a href={item.url} key={index}>
            <Card style={{ backgroundColor: item.bgColor }}>
              <CardText>{item.text}</CardText>
              <CardTitle>{item.title}</CardTitle>
              {item.icon && <MindArrow />}
            </Card>
          </a>
        ))}
      </CardContainer>
    </MindMapSection>
  );
};

export default MindMap;
