import Table from "react-bootstrap/Table";
import { AddressViewModel } from "../viewModels/addressViewModel";
import { UserViewModel } from "../viewModels/userViewModel";

type UsersListProps = {
  users: UserViewModel[];
};

const UsersList = ({ users }: UsersListProps) => {
  const getAddressDigest = (address: AddressViewModel): string => {
    return `${address.street} ${address.streetNumber}, ${address.postalCode} ${address.city}, ${address.country}`;
  };
  return (
    <div>
      <Table
        striped
        bordered
        hover
        className="center"
        style={{
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Login</th>
            <th>Is active?</th>
            <th>Loyalty points</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.login}</td>
                <td>{user.isActive === true ? "Yes" : "No"}</td>
                <td>{user.loyaltyPoints}</td>
                <td>{!!user.address ? getAddressDigest(user.address) : "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
