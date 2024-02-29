import { render, screen } from '@utils/test-utils';
import { Header } from '.';

describe('Component - <Header />', () => {
  const makeSut = () => render(<Header />);

  it('should render the component correctly', () => {
    makeSut();
    const locationComponent = screen.getByTestId('location_title');
    const locationContentComponent = screen.getByTestId('location_content');

    expect(locationComponent).toBeTruthy();
    expect(locationContentComponent).toBeTruthy();
  });
});
