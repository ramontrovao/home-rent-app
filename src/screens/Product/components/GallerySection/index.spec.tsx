import { render, screen } from "@/utils/test-utils";
import { GallerySection } from ".";
import { HOMES_MOCK } from "@/constants/mocks";

const HOME_MOCK = HOMES_MOCK[0];
const makeSut = () => render(<GallerySection home={HOME_MOCK} />);

describe("Component - <GallerySection>", () => {
  it("should render correct images in slider", () => {
    makeSut();
    const imagesUri = HOME_MOCK.imagesUri;

    imagesUri.map((imageUri, index) => {
      const imageComponent = screen.getByTestId(`gallery-image-${index}`);

      expect(imageComponent.props.source.uri).toBe(imageUri);
    });
  });
});
