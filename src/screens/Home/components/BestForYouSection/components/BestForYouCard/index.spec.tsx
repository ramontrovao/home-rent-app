import { HOMES_MOCK } from '@constants/mocks';
import { render, screen } from '@utils/test-utils';
import { BestForYouCard } from '.';

const HOME_MOCK = HOMES_MOCK[0];
const makeSut = () =>
  render(<BestForYouCard hasPadding={false} home={HOME_MOCK} />);

describe('Component - <BestForYouCard />', () => {
  it('should render correct name of home', () => {
    makeSut();
    const nameOfHomeText = screen.getByText(HOME_MOCK.name);

    expect(nameOfHomeText).toBeTruthy();
  });

  it('should render correct price of home', () => {
    makeSut();
    const priceOfHomeText = screen.getByText(`$ ${HOME_MOCK.price} / Year`);

    expect(priceOfHomeText).toBeTruthy();
  });

  it('should render correct number of bedrooms', () => {
    makeSut();
    const bedroomsQuantityText = screen.getByText(
      `${HOME_MOCK.bedroomsQuantity} Bedroom`,
    );

    expect(bedroomsQuantityText).toBeTruthy();
  });

  it('should render correct number of bathrooms', () => {
    makeSut();
    const bathroomsQuantityText = screen.getByText(
      `${HOME_MOCK.bathromsQuantity} Bathroom`,
    );

    expect(bathroomsQuantityText).toBeTruthy();
  });
});
