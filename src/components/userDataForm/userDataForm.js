import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  translates,
  initialValues,
  validationSchema,
  genderOptions,
} from '../../constants/constants';
import Confirm from '../../components/confirm/confirm';
import useStyles from './userDataFormStyle';
import Button from '../../components/ui/Button/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function ApplicationForm() {
  const [formValues, setFormValues] = useState(null);
  const classes = useStyles();
  const [step, setStep] = useState('application');

  const onSubmit = (values, submitProps) => {
    console.log(values);
    setStep('confirm');
    setFormValues(values);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };

  const multiStep = () => {
    switch (step) {
      case 'application':
        return (
          <div className={classes.applicationWrapper}>
            <h1>Анкета</h1>
            <p className="applicationTitle">
              Цена на выбранную недвижимость может меняться, у вас есть 30 минут
              для заполнения анкеты и отправки заявки в банк
            </p>
            <Formik
              initialValues={formValues || initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <div>
                      <h2>Основные данные</h2>
                      <div className={classes.formWrapper}>
                        {Object.keys(initialValues.mainData).map(
                          (item, idx) => {
                            if (item === 'gender') {
                              return (
                                <div className={classes.formControl} key={idx}>
                                  <label
                                    className={classes.labelStyle}
                                    htmlFor={item}
                                  >
                                    {translates[item]}
                                  </label>
                                  <Field
                                    as="select"
                                    id={item}
                                    name={`mainData.${item}`}
                                    render={({ field }) => (
                                      <Select
                                        className={classes.selectStyle}
                                        variant="outlined"
                                        {...field}
                                      >
                                        {genderOptions.map((option, idx) => {
                                          return (
                                            <MenuItem
                                              key={idx}
                                              value={option.value}
                                            >
                                              {option.value}
                                            </MenuItem>
                                          );
                                        })}
                                      </Select>
                                    )}
                                  />

                                  <ErrorMessage name={`mainData.${item}`}>
                                    {(error) => (
                                      <div className={classes.inoutError}>
                                        {error}
                                      </div>
                                    )}
                                  </ErrorMessage>
                                </div>
                              );
                            }
                            return (
                              <div className={classes.formControl} key={idx}>
                                <label
                                  className={classes.labelStyle}
                                  htmlFor={item}
                                >
                                  {translates[item]}
                                </label>
                                <Field
                                  id={item}
                                  name={`mainData.${item}`}
                                  render={({ field }) => (
                                    <TextField variant="outlined" {...field} />
                                  )}
                                  className="formInput"
                                />
                                <ErrorMessage name={`mainData.${item}`}>
                                  {(error) => (
                                    <div className={classes.inoutError}>
                                      {error}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h2>Данные документа</h2>
                      <div className={classes.formWrapper}>
                        {Object.keys(initialValues.documentData).map(
                          (item, idx) => {
                            return (
                              <div className={classes.formControl} key={idx}>
                                <label
                                  className={classes.labelStyle}
                                  htmlFor={item}
                                >
                                  {translates[item]}
                                </label>
                                <Field
                                  id={item}
                                  name={`documentData.${item}`}
                                  className="formInput"
                                  render={({ field }) => (
                                    <TextField variant="outlined" {...field} />
                                  )}
                                />
                                <ErrorMessage name={`documentData.${item}`}>
                                  {(error) => (
                                    <div className="error">{error}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h2>Контактная информация</h2>
                      <div className={classes.formWrapper}>
                        {Object.keys(initialValues.contactInformation).map(
                          (item, idx) => {
                            return (
                              <div className={classes.formControl} key={idx}>
                                <label
                                  className={classes.labelStyle}
                                  htmlFor={item}
                                >
                                  {translates[item]}
                                </label>
                                <Field
                                  id={item}
                                  name={`contactInformation.${item}`}
                                  className="formInput"
                                  render={({ field }) => (
                                    <TextField variant="outlined" {...field} />
                                  )}
                                />
                                <ErrorMessage
                                  name={`contactInformation.${item}`}
                                >
                                  {(error) => (
                                    <div className="error">{error}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h2>Место рождения</h2>
                      <div className={classes.formWrapper}>
                        {Object.keys(initialValues.placeOfbirth).map(
                          (item, idx) => {
                            return (
                              <div className={classes.formControl} key={idx}>
                                <label
                                  className={classes.labelStyle}
                                  htmlFor={item}
                                >
                                  {translates[item]}
                                </label>
                                <Field
                                  id={item}
                                  name={`placeOfbirth.${item}`}
                                  className="formInput"
                                  render={({ field }) => (
                                    <TextField variant="outlined" {...field} />
                                  )}
                                />
                                <ErrorMessage name={item}>
                                  {(error) => (
                                    <div className="error">{error}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h2>Фактический адрес проживания</h2>
                      <div className={classes.formWrapper}>
                        {Object.keys(initialValues.currentAddress).map(
                          (item, idx) => {
                            return (
                              <div className={classes.formControl} key={idx}>
                                <label
                                  className={classes.labelStyle}
                                  htmlFor={item}
                                >
                                  {translates[item]}
                                </label>
                                <Field
                                  id={item}
                                  name={`currentAddress.${item}`}
                                  className="formInput"
                                  render={({ field }) => (
                                    <TextField variant="outlined" {...field} />
                                  )}
                                />
                                <ErrorMessage name={item}>
                                  {(error) => (
                                    <div className="error">{error}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className={classes.applicationFormWrapper}>
                      <button>Скачать оферту</button>
                      <Button
                        type="submit"
                        disabled={!formik.isValid}
                        // className="nextButton"
                      >
                        Продолжить
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        );
      case 'confirm':
        return <Confirm userData={formValues} />;
      default:
        break;
    }
  };
  return <>{multiStep()}</>;
}

export default ApplicationForm;
