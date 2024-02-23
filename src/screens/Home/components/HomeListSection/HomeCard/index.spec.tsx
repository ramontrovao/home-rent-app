import { render, screen } from '@/utils/test-utils';
import { HomeCard } from '.';
import { HOMES_MOCK } from '@/constants/mocks';

const HOME_MOCK = HOMES_MOCK[0];
const makeSut = () => render(<HomeCard home={HOME_MOCK} />);

describe('Component - <HomeListCard />', () => {
  it('should render correct name of home', () => {
    makeSut();
    const nameOfHomeText = screen.getByText(HOME_MOCK.name);

    expect(nameOfHomeText).toBeTruthy();
  });

  it('should render correct address of home', () => {
    makeSut();
    const { address } = HOME_MOCK;
    const addressText = screen.getByText(
      `${address.country}, ${address.state} - ${address.city}`,
    );

    expect(addressText).toBeTruthy();
  });

  it('should render correct image background', () => {
    makeSut();
    const homeImage = screen.getByTestId(`home-background-image`);

    expect(homeImage.props.source.uri).toBe(HOME_MOCK.imagesUri[0]);
  });
});
