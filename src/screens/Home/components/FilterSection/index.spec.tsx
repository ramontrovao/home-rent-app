import { DEFAULT_THEME } from '@styles/theme';
import { fireEvent, render, screen } from '@utils/test-utils';
import { ThemeProvider } from 'styled-components/native';
import { FilterSection } from '.';

const EXPECTED_SEARCH_QUERY = 'Beach';

describe('Component - <FilterSection />', () => {
  const makeSut = () =>
    render(
      <ThemeProvider theme={DEFAULT_THEME}>
        <FilterSection />
      </ThemeProvider>,
    );

  it('should render component correctly', () => {
    makeSut();
    const inputComponent = screen.getByTestId('filter_text_input');
    const buttonComponent = screen.getByTestId('filter_button');

    expect(inputComponent).toBeTruthy();
    expect(buttonComponent).toBeTruthy();
  });

  it('should change filter input text correctly', () => {
    makeSut();
    const inputComponent = screen.getByTestId('filter_text_input');

    fireEvent.changeText(inputComponent, EXPECTED_SEARCH_QUERY);

    expect(inputComponent.props.value).toBe(EXPECTED_SEARCH_QUERY);
  });
});
