import { Card } from "./components/Card";
import { testimonials } from "./data/testimonials"

function App() {
  return (
    <>
      <section className="max-w-[95dvw] p-8">
        <div
          className={`
            grid 
            xl:grid-cols-4 xl:grid-rows-2 
            md:grid-cols-3 md:grid-rows-3
            grid-cols-1
            gap-5
            `
          }
        >
          {/* DEV NOTE!!! THIS RENDERING LOGIC IS JUST FOR TESTING AND RENDERING I WILL CHANGE IT TO MAP AS SOON AS I CAN */}
          {testimonials.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </section>
    </>
  )
}

export default App
