import { Card } from "./components/Card";
import { testimonials } from "./data/testimonials"
import Illustration from "./assets/bg-pattern-quotation.svg";

function App() {

  const card = testimonials;

  return (
    <>
      <section>
        <div className=" grid grid-cols-4 grid-rows-2">
          {/* DEV NOTE!!! THIS RENDERING LOGIC IS JUST FOR TESTING AND RENDERING I WILL CHANGE IT TO MAP AS SOON AS I CAN */}
          <Card {...card[0]} className={'col-span-2'}>
            <div className="absolute right-25 top-0 ">
              <img src={Illustration} />
            </div>
          </Card>
          <Card {...card[1]} />
          <Card {...card[2]} className={'row-span-2'} />
          <Card {...card[3]} />
          <Card {...card[4]} className={'col-span-2'} />
        </div>
      </section>
    </>
  )
}

export default App
