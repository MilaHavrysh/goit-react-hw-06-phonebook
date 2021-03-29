import PropTypes from 'prop-types';
import * as actions from '../../redux/contact/contact-actions';
import { connect } from 'react-redux';

const Filter = ({ onSetFilter, filter }) => {
  return (
    <>
      <h2>find contacts by name</h2>
      <input
        type="text"
        name="filter"
        autoComplete="off"
        onChange={onSetFilter}
        value={filter}
      />
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterContact: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetFilter: e => dispatch(actions.onSetFilter(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
