import { z } from "zod";
import { AddressViewModelSchema } from "./addressViewModel";

export const UserViewModelSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  lastName: z.string(),
  login: z.string(),
  isActive: z.boolean(),
  loyaltyPoints: z.number(),
  address: AddressViewModelSchema.nullable(),
});

export type UserViewModel = z.infer<typeof UserViewModelSchema>;
