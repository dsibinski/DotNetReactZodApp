import { Guid } from "../dataTypes/guid";

export interface AddressViewModel {
  id: Guid;
  country: string;
  city: string;
  street: string;
  streetNumber: number;
  postalCode: string | null;
}
