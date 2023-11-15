import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  // Render the component
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);

  // Find all the rows in the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // Assertion: correct number of row in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each other", () => {});
