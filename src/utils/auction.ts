// utils/auction.ts
export const auctionStatusMap = {
  ACTIVE: { color: "bg-primary text-primary-foreground", text: "Active" },
  ENDED: { color: "bg-muted text-muted-foreground", text: "Ended" },
  CANCELLED: { color: "bg-destructive text-destructive-foreground", text: "Cancelled" },
};

export const getStatusInfo = (status: string) => auctionStatusMap[status] || auctionStatusMap.ACTIVE;
