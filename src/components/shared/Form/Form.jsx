import { useState } from 'react';
import styles from './Form.module.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

export default function Form() {
  const [formState, setFormState] = useState({
    startDate: new Date(),
    endDate: null,
    name: '',
    email: '',
    comment: '',
  });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const toggleDatePicker = () => {
    setIsDatePickerOpen(prevState => !prevState);
  };

  const formatDate = (startDate, endDate) => {
    if (!endDate) return '';
    return `${format(startDate, 'MM.dd.yyyy')} - ${format(
      endDate,
      'MM.dd.yyyy'
    )}`;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const handleDateChange = item => {
    setFormState(prevState => ({
      ...prevState,
      startDate: item.selection.startDate,
      endDate: item.selection.endDate,
    }));
  };

  const handleSendForm = e => {
    e.preventDefault();
    toast.success(`Your data has been sent successfully!`);

    setFormState({
      startDate: new Date(),
      endDate: null,
      name: '',
      email: '',
      comment: '',
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSendForm}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>
      <input
        type="text"
        name="name"
        required
        className={styles.input}
        placeholder="Name*"
        onChange={handleChange}
        value={formState.name}
      />
      <input
        type="email"
        name="email"
        required
        className={styles.input}
        placeholder="Email*"
        onChange={handleChange}
        value={formState.email}
      />
      <input
        type="text"
        onClick={toggleDatePicker}
        className={styles.input}
        placeholder="Booking date*"
        value={
          formState.endDate
            ? formatDate(formState.startDate, formState.endDate)
            : ''
        }
        readOnly
      />
      {isDatePickerOpen && (
        <div className={styles.dataPickew}>
          <DateRangePicker
            onChange={handleDateChange}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            ranges={[
              {
                startDate: formState.startDate,
                endDate: formState.endDate,
                key: 'selection',
              },
            ]}
            className={styles.dataPick}
          />
        </div>
      )}
      <textarea
        name="comment"
        placeholder="Comment"
        className={styles.commentInput}
        onChange={handleChange}
        value={formState.comment}
      />
      <button className={styles.sendBtn} type="submit">
        Send
      </button>
    </form>
  );
}
