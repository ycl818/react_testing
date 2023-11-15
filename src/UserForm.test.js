import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and button", () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing
  // wbat we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submmited", () => {
  const mock = jest.fn();
  // Try to render my component
  render(<UserForm onUserAdd={mock} />);
  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // Simulate typing in a name
  user.click(nameInput);
  user.keyboard("jane");
  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard("jane@gmail.com");
  // Find the button
  const button = screen.getByRole("button");
  // simulate clicing the button
  user.click(button);

  // Assertion to make sure "onUserAdd" gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@gmail.com" });
});
