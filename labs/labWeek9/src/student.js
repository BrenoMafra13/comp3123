import React from 'react';
import PropTypes from 'prop-types';

class Student extends React.Component {
  static defaultProps = {
    lnm: 'NO last name',
    result: 'NO result',
    city: 'Toronto'
  };

  render() {
    const { sid, fnm, lnm, result, city } = this.props;

    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Student Component Information:</h2>
        <p><strong>Student ID:</strong> {sid}</p>
        <p><strong>First Name:</strong> {fnm}</p>
        <p><strong>Last Name:</strong> {lnm}</p>
        <p><strong>Result:</strong> {result}</p>
        <p><strong>City:</strong> {city}</p>
      </div>
    );
  }
}

Student.propTypes = {
  sid: PropTypes.number,
  fnm: PropTypes.string.isRequired,
  lnm: PropTypes.string,
  result: PropTypes.string,
  city: PropTypes.string
};

export default Student;
