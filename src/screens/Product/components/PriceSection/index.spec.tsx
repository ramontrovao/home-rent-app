import { render, screen } from '@utils/test-utils';
import { PriceSection } from '.';

const makeSut = () => render(<PriceSection price={50} />);

describe('Component - <PriceSection />', () => {
  it('should render price', () => {
    makeSut();
    const priceText = screen.getByText('$ 50 / Year');

    expect(priceText).toBeTruthy();
  });
});
