import React, { useState, useEffect } from "react";
import DataGrid from "../components/DataGrid";

import "./Form.scss";
const Form = () => {
  const intialValues = { gre: "", gpa: "", country: "", course: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [courseList, setCourseList] = useState("");

  const submit = () => {
    console.log(formValues.gre);
    let gre = formValues.gre;
    let gpa = formValues.gpa;
    let country = formValues.country;
    let course = formValues.course;
    if (course) {
      course = course.toLocaleLowerCase();
    }
    const URL = `http://127.0.0.1:9000/getSearchList?gpa=${gpa}&gre_score=${gre}&country=${country}&course=${course}`;
    fetch(URL)
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        setCourseList(response);
      });
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};

    if (!values.gpa) {
      errors.gpa = "GPA is a mandatory field";
    }
    if (!values.gre) {
      errors.gre = "GRE is a mandatory field";
    }
    if (!values.country) {
      errors.country = "Country is a mandatory field";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} noValidate>
        <div className="search-container">
          <div className="form-row">
            <input
              type="number"
              name="gpa"
              id="gpa"
              value={formValues.gpa}
              onChange={handleChange}
              className={formErrors.gpa && "input-error"}
              placeholder="GPA*"
            />
            {formErrors.gpa && <span className="error">{formErrors.gpa}</span>}
          </div>
          <div className="form-row">
            <input
              type="number"
              name="gre"
              id="gre"
              value={formValues.gre}
              onChange={handleChange}
              className={formErrors.gre && "input-error"}
              placeholder="GRE*"
            />
            {formErrors.gre && <span className="error">{formErrors.gre}</span>}
          </div>
          <div className="form-row">
            <select id="lang" name="country" onChange={handleChange}>
              <option defaultValue="" className="disabled">
                Select Country
              </option>
              <option value="Canada">Canada</option>
              <option value="United States">United States</option>
            </select>
            {formErrors.country && (
              <span className="error">{formErrors.country}</span>
            )}
          </div>

          <div className="form-row">
            <input
              type="text"
              name="course"
              id="course"
              value={formValues.course}
              onChange={handleChange}
              className={formErrors.course && "input-error"}
              placeholder="Course"
            />
          </div>
        </div>
        <div className="search-button-container">
          <button type="submit">Search</button>
        </div>
      </form>
      <div className="search-result">
        {courseList && courseList.length > 0 ? (
          <DataGrid courseList={courseList} />
        ) : (
          isSubmitting && (
            <span className="error-msg">No universities found</span>
          )
        )}
      </div>
    </div>
  );
};

export default Form;
