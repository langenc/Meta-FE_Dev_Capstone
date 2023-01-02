import { initializeTimes, updateTimes } from './Reservations';

test('initializeTimes returns the correct initial times', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const actualTimes = initializeTimes();
  expect(actualTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same value that is provided in the state', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const actualTimes = updateTimes('2022-01-01', { availableTimes: expectedTimes });
  expect(actualTimes).toEqual(expectedTimes);
});
