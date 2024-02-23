import { render, screen } from '@/utils/test-utils';
import { HomeTypeSection } from '.';
import { HOME_TYPES_MOCK } from '@/constants/mocks';
describe('Component - <HomeTypeSection />', () => {
  const makeSut = () => render(<HomeTypeSection homeTypes={HOME_TYPES_MOCK} />);

  it('should render component correctly', () => {
    makeSut();
    const homeTypeSectionComponent = screen.getByTestId('home_type_section');

    expect(homeTypeSectionComponent).toBeTruthy();
  });
});
