import propTypes from 'prop-types';
import { Button } from './FeedbackOption.styled';

export function FeedbackOption({ options, addFeedback }) {
  return (
    <div>
      {options.map(options => (
        <Button key={options} name={options} onClick={addFeedback}>
          {options}
        </Button>
      ))}
    </div>
  );
}

FeedbackOption.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  addFeedback: propTypes.func.isRequired,
};
