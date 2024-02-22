import { render, screen } from "@/utils/test-utils";
import { HOMES_MOCK } from "@/constants/mocks";
import { BestForYouSection } from ".";

const HOME_MOCK = HOMES_MOCK[0];

describe("Component - <BestForYouSection />", () => {
  const makeSut = () => render(<BestForYouSection homes={HOMES_MOCK} />);

  it("should render component correctly", () => {
    makeSut();
    const bestForYouSectionComponent = screen.getByTestId(
      "best-for-you-section"
    );

    expect(bestForYouSectionComponent).toBeTruthy();
  });
});
