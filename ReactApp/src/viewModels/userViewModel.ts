import { Guid } from "../dataTypes/guid";
import { AddressViewModel } from "./addressViewModel";

export interface UserViewModel {
  id: Guid;
  name: string;
  lastName: string;
  login: string;
  isActive: boolean;
  loyaltyPoints: number;
  address: AddressViewModel | null;
}
