import { render, screen } from "@/utils/test-utils";
import { DescriptionSection } from "./DescriptionSection";

const makeSut = () => render(<DescriptionSection description="Test" />)

describe("Component - <DescriptionSection />", () => {
  it("should render description", () => {
    makeSut()
    const descriptionText = screen.getByText("Test")

    expect(descriptionText).toBeTruthy()
  })
})