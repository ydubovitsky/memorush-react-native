import React, { useEffect } from "react";
import { List } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { cardEntitySelector, getAllCardSets } from "../../../redux/features/card-set/card-set.slice";

const ListAccordionComponent = () => {

  const dispatch = useDispatch();
  const cardEntity = useSelector(cardEntitySelector);

  useEffect(() => {
    dispatch(getAllCardSets());
    console.log(cardEntity);
  }, [])

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const showCardSet = () => {
    return cardEntity.map(cardEntity => (
      <List.Accordion
        title={cardEntity.name}
        left={props => <List.Icon {...props} icon="folder" />}>
        {cardEntity.cardList.map(flashCard => (
          <List.Item title={flashCard.frontSide} />
        ))}
      </List.Accordion>
    ))
  }

  return (
      <List.Section title="FlashCard Sets">
        {showCardSet()}
      </List.Section>
  );
};

export default ListAccordionComponent;