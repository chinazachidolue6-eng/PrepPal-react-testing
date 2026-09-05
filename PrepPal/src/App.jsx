import Navbar from "./navbar/Navbar";
import Description from "./Description";
import Button from "./button/Button";
import Card from "./cards/Card.jsx";
import Input from "./inputs/Input.jsx";

function App() {
  return (
    <>
      <Description
        name="Navbar"
        description="The navigation bar shows the links and guides userson where to go"
      />
      <Navbar />

      <Description name="Button" />

      <Button name="Get Started" />

      <Description name="Cards" />

      <section className="cards">
        <Card
          title="Smart Study Planner"
          description="Create study schedules that fit your routine and keep track of what
            you need to study."
        />
        <Card
          title="Practice and Quizzes"
          description="Test your knowledge with practice questions and quizzes designed to
            help you prepare."
        />
      </section>

      <Description name="Forms" />

      <Input />
    </>
  );
}

export default App;
