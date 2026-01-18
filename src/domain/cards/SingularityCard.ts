// src/domain/cards/SingularityCard.ts
export type CardStatus = "active" | "next" | "deferred";

export const CARD_STATUSES: CardStatus[] = [
  "active",
  "next",
  "deferred",
];

export type SingularityCard = {
  id: string;
  title: string;
  status: CardStatus;
  ownerId: string;
  createdAt: any;
  updatedAt?: any;
};

