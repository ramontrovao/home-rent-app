import { HOMES_MOCK } from '@constants/mocks';
import { render, screen } from '@utils/test-utils';
import { HomeListSection } from '.';

describe('Component - <HomeListSection />', () => {
  const makeSut = () => render(<HomeListSection homes={HOMES_MOCK} />);

  it('should render component correctly', () => {
    makeSut();
    const homeListSectionComponent = screen.getByTestId('home-list-section');

    expect(homeListSectionComponent).toBeTruthy();
  });
});
