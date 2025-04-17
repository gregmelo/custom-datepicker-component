# @gregmelo/custom-datepicker-component

A customizable React date picker component with a calendar icon, range restrictions, and dropdowns for month and year selection.

## Installation

Install the package via npm:

```bash
npm install @gregmelo/custom-datepicker-component
```
## Dependencies

This component requires the following peer dependencies:

    react: ^17.0.0 || ^18.0.0
    react-dom: ^17.0.0 || ^18.0.0

It also depends on:

    react-datepicker: ^4.0.0
    react-icons: ^5.0.0

## Usage

Import and use the CustomDatePicker component in your React application:

```bash
import React, { useState } from 'react';
import { CustomDatePicker } from '@gregmelo/custom-datepicker-component';

const App = () => {
  const [date, setDate] = useState('');

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <CustomDatePicker
      id="dateOfBirth"
      label="Date of Birth"
      value={date}
      onChange={handleChange}
      type="birth"
    />
  );
};

export default App;
```

## Props

Prop	Type	Required	Default	Description
id	string	Yes	-	The unique ID for the date picker input
label	string	Yes	-	The label to display above the date picker
value	string	''	The selected date value (ISO string, e.g., 'YYYY-MM-DD')
onChange	function	Yes	-	Function to call when the date changes
type	string	Yes	-	The type of date picker ('birth' or 'start')
Type Values

    birth: Restricts dates to 70 to 16 years ago (e.g., 1955 to 2009 for 2025).
    start: Restricts dates to 1971 to today.

## Styling

The date picker uses SCSS for styling, with a calendar icon on the right and a custom dropdown for months and years. Key classes include:

    .datepicker-group
    .datepicker-wrapper
    .custom-datepicker
    .calendar-icon
    .react-datepicker__header
    .react-datepicker__month-dropdown
    .react-datepicker__year-dropdown

To customize styles, override these classes in your project.

## License

MIT

## Repository

[GitHub Repository](https://github.com/gregmelo/custom-datepicker-component)

## Issues

Report issues or contribute at [GitHub Issues](https://github.com/gregmelo/custom-datepicker-component/issues)