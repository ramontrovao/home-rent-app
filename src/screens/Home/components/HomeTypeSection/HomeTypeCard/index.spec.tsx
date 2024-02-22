import { render, screen } from "@/utils/test-utils";
import { HomeTypeCard } from ".";
import { HOME_TYPES_MOCK } from "@/constants/mocks";

const HOME_TYPE_MOCK = HOME_TYPES_MOCK[0];
const makeSut = () => render(<HomeTypeCard homeType={HOME_TYPE_MOCK.name} />);

describe("Component - <HomeTypeCard />", () => {
  it("should render correct home types", () => {
    makeSut();

    const homeTypeText = screen.getByText(HOME_TYPE_MOCK.name);

    expect(homeTypeText).toBeTruthy();
  });
});
