import { render, screen } from "@/utils/test-utils";
import { MapSection } from ".";
import { HOMES_MOCK } from "@/constants/mocks";

const LOCATION_MOCK = HOMES_MOCK[0].location;
const makeSut = () => render(<MapSection location={LOCATION_MOCK} />);

describe("Component - <MapSection />", () => {
  it("should render map", () => {
    makeSut();
    const mapView = screen.getByTestId("map-container");

    expect(mapView).toBeTruthy();
  });
});
