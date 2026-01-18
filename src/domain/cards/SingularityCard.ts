// src/domain/cards/SingularityCard.ts
export type SingularityCard = {
  id: string;
  title: string;
  body?: string;
  status: "active" | "parked" | "archived";
  domain?: string; // domain id
  createdAt: any;
  updatedAt?: any;
  ownerId: string;
};
