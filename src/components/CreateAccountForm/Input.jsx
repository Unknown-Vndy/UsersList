import classNames from 'classnames';
import { ErrorMessage, Field } from 'formik';

function Input (props) {
  const { name, classes, ...restProps } = props;
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        const inputClassNames = classNames({
          [classes.valid]: !errors[name] && touched[name],
          [classes.invalid]: errors[name] && touched[name],
        });
        return (
          <>
            <label>
              <input {...field} {...restProps} className={inputClassNames} />
              <ErrorMessage name={field.name} component='span' />
            </label>
          </>
        );
      }}
    </Field>
  );
}

export default Input;
