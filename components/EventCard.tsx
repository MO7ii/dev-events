import Image from "next/image";
import Link from "next/link";
interface props {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // e.g., "2025-11-07"
  time: string; // e.g., "09:00 AM"
}

function EventCard({ image, title, slug, location, date, time }: props) {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <div className="flex flex-row gap-2">
        <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
        <p className="location">{location}</p>
      </div>
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />
      <p className="title">{title}</p>

      <div className="datetime">
        <div>
          <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
          <p className="date">{date}</p>
        </div>
        <div>
          <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
          <p className="time">{time}</p>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
