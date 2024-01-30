import { Header } from "./Header";
import { render, screen } from "@testing-library/react-native";

const LOCATION_TITLE = "Location";
const LOCATION_CONTENT = "Serra";

describe("Component - <Header />", () => {
  const makeSut = () => render(<Header />);

  beforeAll(() => makeSut());

  it("should render the component correctly", () => {
    const locationComponent = screen.getByText(LOCATION_TITLE);
    const locationContentComponent = screen.getByText(LOCATION_CONTENT);

    expect(locationComponent).toBeTruthy();
    expect(locationContentComponent).toBeTruthy();
  });
});
