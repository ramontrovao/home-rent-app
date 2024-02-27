import { HOMES_MOCK } from '@constants/mocks';
import { render, screen } from '@utils/test-utils';
import { PreviewCard } from '.';

const HOME_MOCK = HOMES_MOCK[0];
const makeSut = () =>
  render(
    <PreviewCard home={HOME_MOCK} selectedImage={HOME_MOCK.imagesUri[0]} />,
  );

describe('Component - <PreviewCard />', () => {
  it('should render correct background image', () => {
    makeSut();
    const backgroundImageComponent = screen.getByTestId(
      'preview-card-background-image',
    );

    expect(backgroundImageComponent.props.source.uri).toBe(
      HOME_MOCK.imagesUri[0],
    );
  });

  it('should render home title', () => {
    makeSut();
    const titleText = screen.getByText(HOME_MOCK.name);

    expect(titleText).toBeTruthy();
  });

  it('should render home address', () => {
    makeSut();
    const addressText = screen.getByText(
      `${HOME_MOCK.address.country}, ${HOME_MOCK.address.state} - ${HOME_MOCK.address.city}`,
    );

    expect(addressText).toBeTruthy();
  });

  it('should render number of bedrooms', () => {
    makeSut();
    const bedroomsQuantityText = screen.getByText(
      `${HOME_MOCK.bedroomsQuantity} Bedroom`,
    );

    expect(bedroomsQuantityText).toBeTruthy();
  });

  it('should render number of bathrooms', () => {
    makeSut();
    const bathroomsQuantityText = screen.getByText(
      `${HOME_MOCK.bathromsQuantity} Bathroom`,
    );

    expect(bathroomsQuantityText).toBeTruthy();
  });
});
