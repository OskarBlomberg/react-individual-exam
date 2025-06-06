import "./ticketsPage.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Keyboard } from "swiper/modules";
import Ticket from "../../components/Ticket/Ticket";
import useBoughtTicketStore from "../../hooks/boughtTicketsStore";
import Navbar from "../../components/Navbar/Navbar";

export default function TicketsPage() {
  const boughtTickets = useBoughtTicketStore((state) => state.boughtTickets);

  const allTickets = Object.values(boughtTickets).flatMap(
    (event) => event.tickets
  );

  const renderTickets = allTickets.map((ticket) => (
    <SwiperSlide key={ticket.ticketCode}>
      <Ticket ticketInfo={ticket} />
    </SwiperSlide>
  ));

  return (
    <>
      <main className="main tickets-page">
        <h1 className="tickets-page__h1">Dina biljetter</h1>
        {allTickets.length > 0 ? (
          <Swiper
            tabIndex={0}
            effect={"cards"}
            grabCursor={true}
            keyboard={{ enabled: true }}
            modules={[Keyboard, EffectCards]}
            className="mySwiper"
          >
            {renderTickets}
          </Swiper>
        ) : (
          <p>Du har inga aktuella biljetter än.</p>
        )}
      </main>
      <Navbar />
    </>
  );
}
