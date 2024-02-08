import { render, screen } from "@/utils/test-utils";
import { HOMES_MOCK } from "@/constants/mocks";
import { BestForYouSection } from "./BestForYouSection";

const HOME_MOCK = HOMES_MOCK[0]

// TODO: Encapsulate the card component and move most of unit tests
describe("Component - <BestForYouSection />", () => {
  const makeSut = () => render(<BestForYouSection homes={HOMES_MOCK} />);

  it("should render component correctly", () => {
    makeSut();
    const bestForYouSectionComponent = screen.getByTestId("best-for-you-section");

    expect(bestForYouSectionComponent).toBeTruthy();
  });

  it("should render correct name of home", () => {
    makeSut()
    const nameOfHomeText = screen.getByText(HOME_MOCK.name)

    expect(nameOfHomeText).toBeTruthy()
  })

  it.skip("should render correct price of home", () => {
    makeSut()
    const priceOfHomeText = screen.getByText(`$ ${HOME_MOCK.price} / Year`)

    expect(priceOfHomeText).toBeTruthy()
  })

  it.skip("should render correct number of bedrooms", () => {
    makeSut()
    const bedroomsQuantityText = screen.getByText(`${HOME_MOCK.bedroomsQuantity} Bedroom`)

    expect(bedroomsQuantityText).toBeTruthy()
  })

  it.skip("should render correct number of bathrooms", () => {
    makeSut()
    const bathroomsQuantityText = screen.getByText(`${HOME_MOCK.bathromsQuantity} Bathroom`)

    expect(bathroomsQuantityText).toBeTruthy()
  })
});