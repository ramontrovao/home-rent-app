import { render, screen } from "@/utils/test-utils";
import { HomeTypeSection } from "./HomeTypeSection";
import { HOME_TYPES_MOCK } from "@/constants/mocks";
describe("Component - <HomeTypeSection />", () => {
  const makeSut = () => render(<HomeTypeSection homeTypes={HOME_TYPES_MOCK} />);

  it("should render component correctly", () => {
    makeSut();
    const homeTypeSectionComponent = screen.getByTestId("home_type_section");

    expect(homeTypeSectionComponent).toBeTruthy();
  });

  it("should render correct home types", () => {
    makeSut()
    HOME_TYPES_MOCK.map(homeType => {
      const homeTypeText = screen.getByText(homeType.name)

      expect(homeTypeText).toBeTruthy()
    })
  })
});
