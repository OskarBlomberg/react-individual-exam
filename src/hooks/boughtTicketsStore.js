import { create } from "zustand";
import { customAlphabet } from "nanoid";
import getRandomNumber, {
  getRandomSection,
} from "../utilityFunctions/getRandom";

const useBoughtTicketStore = create((set) => ({
  boughtTickets: {},

  setBoughtTickets: (ticketsByEvent, listedEvents) =>
    set((state) => {
      const updated = { ...state.boughtTickets };
      const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789", 5);

      for (const eventId in ticketsByEvent) {
        // eftersom tickets keys är eventID
        const count = ticketsByEvent[eventId];
        const event = listedEvents.find((e) => e.id === eventId);
        const priorTickets = updated[eventId]?.tickets || [];

        const newTickets = [];

        let section;
        let startingSeat;

        // Kolla om det finns biljetter från tidigare köp och högsta platsnumret, annars slumpa nytt
        if (priorTickets.length > 0) {
          section = priorTickets[0].section;
          const maxSeat = Math.max(
            ...priorTickets.map((ticket) => ticket.seatNumber)
          );
          startingSeat = maxSeat + 1;
        } else {
          section = getRandomSection();
          startingSeat = getRandomNumber(200);
        }

        for (let i = 0; i < count; i++) {
          newTickets.push({
            ticketCode: nanoid(),
            section,
            seatNumber: startingSeat + i,
          });
        }

        updated[eventId] = {
          event,
          tickets: [...priorTickets, ...newTickets],
        };
      }

      return { boughtTickets: updated };
    }),
}));
