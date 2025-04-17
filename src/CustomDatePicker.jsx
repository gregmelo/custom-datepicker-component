// src/CustomDatePicker.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Style par défaut
import './CustomDatePicker.scss'; // Style personnalisé
import { FaCalendarAlt } from 'react-icons/fa';

/**
 * A customizable date picker component with a calendar icon and range restrictions.
 * Supports birth date and start date types with predefined year ranges.
 * @component
 * @param {Object} props - The component props
 * @param {string} props.id - The unique ID for the date picker input
 * @param {string} props.label - The label to display above the date picker
 * @param {string} [props.value] - The selected date value (ISO string, e.g., 'YYYY-MM-DD')
 * @param {Function} props.onChange - Function to call when the date changes
 * @param {string} props.type - The type of date picker ('birth' or 'start')
 * @returns {JSX.Element} The date picker component
 * @example
 * ```jsx
 * <CustomDatePicker
 *   id="dateOfBirth"
 *   label="Date of Birth"
 *   value="1990-01-01"
 *   onChange={(e) => console.log(e.target.value)}
 *   type="birth"
 * />
 * ```
 */

const CustomDatePicker = ({ id, label, value, onChange, type }) => {
  const today = new Date();
  const currentYear = today.getFullYear();

  // Limites pour Date of Birth : 70 ans à 16 ans avant aujourd'hui
  const minBirthDate = new Date(currentYear - 70, 0, 1); // 1er janv 1955
  const maxBirthDate = new Date(currentYear - 16, 11, 31); // 31 déc 2009

  // Limites pour Start Date : 1971 (16 ans après 1955) à aujourd'hui
  const minStartDate = new Date(currentYear - 70 + 16, 0, 1); // 1er janv 1971
  const maxStartDate = today;

  return (
<div className="datepicker-group">
      <label htmlFor={id}>{label}</label>
      <div className="datepicker-wrapper">
        <ReactDatePicker
          id={id}
          selected={value ? new Date(value) : null}
          onChange={(date) => onChange({ target: { id, value: date ? date.toISOString().split('T')[0] : '' } })}
          dateFormat="yyyy-MM-dd"
          minDate={type === 'birth' ? minBirthDate : minStartDate}
          maxDate={type === 'birth' ? maxBirthDate : maxStartDate}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="Select a date"
          className="custom-datepicker"
          popperClassName="custom-datepicker-popper"
          calendarIcon={<FaCalendarAlt />} // Icône personnalisée (optionnel, ici pour référence)
        />
        <FaCalendarAlt className="calendar-icon" />
      </div>
    </div>
  );
};

CustomDatePicker.propTypes = {
  /** The unique ID for the date picker input */
  id: PropTypes.string.isRequired,
  /** The label to display above the date picker */
  label: PropTypes.string.isRequired,
  /** The selected date value (ISO string, e.g., 'YYYY-MM-DD') */
  value: PropTypes.string,
  /** Function to call when the date changes */
  onChange: PropTypes.func.isRequired,
  /** The type of date picker ('birth' or 'start') */
  type: PropTypes.oneOf(['birth', 'start']).isRequired
};

CustomDatePicker.defaultProps = {
  value: ''
};

export default CustomDatePicker;