import { z } from "zod";

export const AddressViewModelSchema = z.object({
  id: z.string().uuid(),
  country: z.string(),
  city: z.string(),
  street: z.string(),
  streetNumber: z.number(),
  postalCode: z.string().nullable(),
});

export type AddressViewModel = z.infer<typeof AddressViewModelSchema>;
