import { render, screen } from "@/utils/test-utils";
import { OwnerSection } from ".";
import { HOMES_MOCK } from "@/constants/mocks";

const OWNER_MOCK = HOMES_MOCK[0].owner;
const makeSut = () => render(<OwnerSection owner={OWNER_MOCK} />);

describe("Component - <OwnerSection />", () => {
  it("should render owner name", () => {
    makeSut();
    const ownerNameText = screen.getByText(OWNER_MOCK.name);

    expect(ownerNameText).toBeTruthy();
  });

  it("should render owner image", () => {
    makeSut();
    const ownerImage = screen.getByTestId("owner-image");

    expect(ownerImage.props.source.uri).toBe(OWNER_MOCK.photoUri);
  });
});
