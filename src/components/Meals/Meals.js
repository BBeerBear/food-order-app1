import { Fragment } from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
  return (
    <>
      <MealsSummary />
      {/* menu */}
      <AvailableMeals />
    </>
  );
};
export default Meals;
