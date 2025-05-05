import { create } from "zustand";

const useTicketStore = create((set, get) => ({
  tickets: {},

  incrementTicket: (id) =>
    set((state) => ({
      tickets: { ...state.tickets, [id]: (state.tickets[id] || 0) + 1 },
    })),
  decrementTicket: (id) =>
    set((state) => {
      const current = state.tickets[id] || 0;
      const updated = { ...state.tickets };
      current <= 1 ? delete updated[id] : (updated[id] = current - 1);

      return { tickets: updated };
    }),
}));

export default useTicketStore;
