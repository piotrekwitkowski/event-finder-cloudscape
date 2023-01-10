import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { getTestEvent } from '../../test/mocks';
import { isAny, isGoing, isConsidering, matchesText, getMatchesStatus, dateCellFormatter, nameCellFormatter, nameSortingComparator, } from './content-table-utils';

describe("isAny", () => {
  it("should return true when given OptionDefinition with value ANY", () => {
    expect(isAny({ value: "ANY" })).toBe(true);
  });

  it("should return false when given OptionDefinition with value other than ANY", () => {
    expect(isAny({ value: "GOING" })).toBe(false);
  });
});

describe("isGoing", () => {
  it("should return true when given OptionDefinition with value GOING", () => {
    expect(isGoing({ value: "GOING" })).toBe(true);
  });

  it("should return false when given OptionDefinition with value other than GOING", () => {
    expect(isGoing({ value: "CONSIDERING" })).toBe(false);
  });
});

describe("isConsidering", () => {
  it("should return true when given OptionDefinition with value CONSIDERING", () => {
    expect(isConsidering({ value: "CONSIDERING" })).toBe(true);
  });

  it("should return false when given OptionDefinition with value other than CONSIDERING", () => {
    expect(isConsidering({ value: "GOING" })).toBe(false);
  });
});


describe("matchesText", () => {
  const testEvent = getTestEvent({ name: "Test Event", location: "London" });
  it("should return true when given text is found in event name or event location", () => {
    expect(matchesText(testEvent, "Test Event")).toBe(true);
    expect(matchesText(testEvent, "London")).toBe(true);
  });

  it("should return false when given text is not found in event name or event location", () => {
    expect(matchesText(testEvent, "not found")).toBe(false);
  });
});

describe("getMatchesStatus", () => {
  const goingEventIds = [1, 2, 3];
  const consideringEventIds = [4, 5, 6];
  const matchesStatus = getMatchesStatus(goingEventIds, consideringEventIds);
  const testEvent1 = getTestEvent({ id: 1 });
  const testEvent4 = getTestEvent({ id: 4 });

  it("should return true when the status is ANY", () => {
    expect(matchesStatus(testEvent1, { value: "ANY" })).toBe(true);
  });

  it("should return true when the status is GOING and the event id is in goingEventIds", () => {
    expect(matchesStatus(testEvent1, { value: "GOING" })).toBe(true);
  });

  it("should return false when the status is GOING and the event id is not in goingEventIds", () => {
    expect(matchesStatus(testEvent4, { value: "GOING" })).toBe(false);
  });

  it("should return true when the status is CONSIDERING and the event id is in consideringEventIds", () => {
    expect(matchesStatus(testEvent4, { value: "CONSIDERING" })).toBe(true);
  });

  it("should return false when the status is CONSIDERING and the event id is not in consideringEventIds", () => {
    expect(matchesStatus(testEvent1, { value: "CONSIDERING" })).toBe(false);
  });
});

describe('dateCellFormatter', () => {
  it('should format date correctly when startDate and endDate are the same', () => {
    const testEvent = getTestEvent({ startDate: '2022-01-01', endDate: '2022-01-01' });
    const expectedOutput = new Date(testEvent.startDate).toLocaleDateString();
    expect(dateCellFormatter(testEvent)).toBe(expectedOutput);
  });

  test('should format date range correctly when startDate and endDate are different', () => {
    const testEvent = getTestEvent({ startDate: '2022-01-01', endDate: '2022-01-03' });
    const startDateFormatted = new Date(testEvent.startDate).toLocaleDateString();
    const endDateFormatted = new Date(testEvent.endDate).toLocaleDateString();
    const expectedOutput = `${startDateFormatted} - ${endDateFormatted}`;

    expect(dateCellFormatter(testEvent)).toBe(expectedOutput);
  });
});

describe('nameCellFormatter', () => {
  test('should return a Link component with the correct pathname and text', () => {
    const testEvent = getTestEvent({ id: 1, name: 'Test event' });
    const link = nameCellFormatter(testEvent);
    render(<BrowserRouter>{link}</BrowserRouter>);

    const linkRendered = screen.getByRole('link');
    expect((linkRendered as HTMLAnchorElement).pathname).toBe('/events/1');

    // link content is rendered in bold and because of that it is contained
    // inside another element, so we first need to get that element too
    const linkContentRendered = screen.getByText('Test event');
    expect(linkContentRendered).toBeVisible();
    expect(linkContentRendered).toHaveTextContent('Test event');
  });
});

describe('nameSortingComparator', () => {
  const appleEvent = getTestEvent({ name: 'Apple' });
  const bananaEvent = getTestEvent({ name: 'Banana' });
  test('should return -1 when x.name is alphabetically before y.name', () => {
    expect(nameSortingComparator(appleEvent, bananaEvent)).toBe(-1);
  });

  test('should return 1 when x.name is alphabetically after y.name', () => {
    expect(nameSortingComparator(bananaEvent, appleEvent)).toBe(1);
  });

  test('should return 0 when x.name is the same as y.name', () => {
    expect(nameSortingComparator(appleEvent, appleEvent)).toBe(0);
  });
});
