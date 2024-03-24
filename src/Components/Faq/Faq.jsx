import React, { useState } from "react";
import { FAQ_DATA } from "../Data/FaqData";
import {
  BoxOpen,
  FaqAnswer,
  FaqImage,
  FaqItemContainer,
  FaqQuestion,
  FaqSection,
  FaqTitle,
  NumQues,
} from "./Faq.styled";

import FaqImg1 from "../../Images/Png/faq1.png";
import FaqImg2 from "../../Images/Png/faq2.png";
import FaqImg3 from "../../Images/Png/faq3.png";
import FaqImg4 from "../../Images/Png/faq4.png";

const Faq = () => {
  const [openId, setOpenId] = useState(FAQ_DATA[0].id);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <FaqSection>
      <FaqTitle>FAQ</FaqTitle>
      {FAQ_DATA.map((item) => (
        <FaqItem
          key={item.id}
          item={item}
          isOpen={item.id === openId} // Проверяем, открыт ли текущий элемент
          onClick={() => handleToggle(item.id)} // Передаем id элемента в обработчик события
        />
      ))}
    </FaqSection>
  );
};

const FaqItem = ({ item, isOpen, onClick }) => {
  let imgSrc = "";
  switch (item.id) {
    case 1:
      imgSrc = FaqImg1;
      break;
    case 2:
      imgSrc = FaqImg2;
      break;
    case 3:
      imgSrc = FaqImg3;
      break;
    case 4:
      imgSrc = FaqImg4;
      break;
    default:
      imgSrc = "";
  }

  return (
    <FaqItemContainer isOpen={isOpen} onClick={onClick}>
      {isOpen && (
        <FaqImage isOpen={isOpen} src={imgSrc} alt={`FAQ Image ${item.id}`} />
      )}
      <NumQues isOpen={isOpen}>{item.num}</NumQues>
      <BoxOpen>
        <FaqQuestion isOpen={isOpen}>{item.question}</FaqQuestion>
        <FaqAnswer isOpen={isOpen}>{item.answer}</FaqAnswer>
      </BoxOpen>
    </FaqItemContainer>
  );
};

export default Faq;
