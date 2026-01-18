// src/domain/cards/CardEvent.ts
export type CardEvent = {
  type: "CREATED" | "PARKED" | "UPDATED";
  at: any;
  by: string;
  meta?: Record<string, any>;
};
