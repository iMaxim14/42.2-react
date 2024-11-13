import "./styles.css";
import Button from "../../components/Button/Button";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { lionData, zebraData, hippoData } from "./data";

function Lesson03() {
  return (
    <div className="lesson03-wrapper">
      <AnimalCard
        animalName={lionData.name}
        animalSpecies={lionData.species}
        animalImage={lionData.image}
      />
      <AnimalCard
        animalName={zebraData.name}
        animalSpecies={zebraData.species}
        animalImage={zebraData.image}
      >
        <h5>{zebraData.skills[0]}</h5>
      </AnimalCard>
      <AnimalCard
        animalName={hippoData.name}
        animalSpecies={hippoData.species}
        animalImage={hippoData.image}
      />
      <Button buttonName="Send" />
      <Button buttonName="Delete" />
      <Button />
    </div>
  );
}

export default Lesson03;