import { Header } from "./Header";
import { render, screen } from "@testing-library/react-native";

describe("Component - <Header />", () => {
  const makeSut = () => render(<Header />);

  it("should render the component correctly", () => {
    makeSut();
    const locationComponent = screen.getByTestId("location_title");
    const locationContentComponent = screen.getByTestId("location_content");

    expect(locationComponent).toBeTruthy();
    expect(locationContentComponent).toBeTruthy();
  });
});
