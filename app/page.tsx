import EventCard from "@/components/EventCard";
import ExploerBtn from "@/components/ExploerBtn";
import events from "@/lib/constants";

async function page() {
  return (
    <section>
      <h1 className="text-center">
        The Hub For Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackthones, Meetups, and Conferences, All in One Place
      </p>
      <ExploerBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default page;
