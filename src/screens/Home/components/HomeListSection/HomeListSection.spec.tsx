import { render, screen } from "@/utils/test-utils";
import { HomeListSection } from "./HomeListSection";
import { HOMES_MOCK } from "@/constants/mocks";


const HOME_MOCK = HOMES_MOCK[0]
// TODO: Encapsulate the card component and move most of unit tests
describe("Component - <HomeListSection />", () => {
  const makeSut = () => render(<HomeListSection homes={HOMES_MOCK} />);

  it("should render component correctly", () => {
    makeSut();
    const homeListSectionComponent = screen.getByTestId("home-list-section");

    expect(homeListSectionComponent).toBeTruthy();
  });

  it("should render correct name of home", () => {
    makeSut()
    const nameOfHomeText = screen.getByText(HOME_MOCK.name)

    expect(nameOfHomeText).toBeTruthy()
  })

  it("should render correct address of home", () => {
    makeSut()
    const { address } = HOME_MOCK
    const addressText = screen.getByText(`${address.country}, ${address.state} - ${address.city}`)

    expect(addressText).toBeTruthy()
  })

  it("should render correct image background", () => {
    makeSut()
    const homeImage = screen.getByTestId(`home-background-image-1`)

    expect(homeImage.props.source.uri).toBe(HOME_MOCK.imagesUri[0])
  })
});