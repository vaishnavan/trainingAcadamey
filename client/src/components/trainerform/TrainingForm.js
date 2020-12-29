/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-named-as-default-member
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './trainingform.css';


// const validate = values =>{
//     var errors = {};
//     if(!values.trainingName){
//         errors.trainingName="TrainingName is required"
//     }

//     return errors;
// }

function TrainingForm() {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    },500)
    return () => clearTimeout(timer)
  })

  const formik = useFormik({
    initialValues: {
      trainingName: '',
      institutionName: '',
      startDate: '',
      endDate: '',
      learnerCount: null,
      location: '',
      spoc: '',
      contactNumber: '',
      cost: null,
      status: '',
      skills: '',
    },
    validationSchema: yup.object({
      trainingName: yup.string()
        .required('TrainingName is required'),
      institutionName: yup.string()
        .required('InstitutionName is required'),
      startDate: yup.date()
        .required('StartDate is required'),
      endDate: yup.date()
        .required('EndDate is required'),
      learnerCount: yup.number()
        .required('LearnerCount is required')
        .min(1, 'Atleast one learner required'),
      location: yup.string()
        .required('Location is required'),
      spoc: yup.string()
        .required('SPOC is required'),
      contactNumber: yup.string()
        .required('ContactNumber is required')
        .min(10, 'Invalid ContactNumber'),
      cost: yup.number()
        .required('Estimated Learner Coat is required')
        .min(0, 'invalid cost'),
      status: yup.string()
        .required('status is required'),
      skills: yup.string()
        .required('Skills is required'),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });

  return (
    <div>
      {loading && 
      <Loader 
        className="loader"
        color="#002db3"
        type="Grid"
        width={50}
        height={50}
      />}
      {!loading && 
        <div className="training_form">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="row">
            <div className="col">
              <label>Training Name *</label>
              <input
                type="text" name="trainingName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.trainingName}
                className="form-control" placeholder="Training Name"
              />
              {formik.errors.trainingName && formik.touched.trainingName
                ? <div className="text-danger"> {formik.errors.trainingName} </div>
                : null}
            </div>
            <div className="col">
              <label>Institution Name *</label>
              <input
                type="text" name="institutionName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.institutionName}
                className="form-control" placeholder="Insititue Name"
              />
              {formik.errors.institutionName && formik.touched.institutionName
                ? <div className="text-danger"> {formik.errors.institutionName} </div>
                : null}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Start Date *</label>
              <input
                type="date" name="startDate" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.startDate}
                className="form-control"
              />
              {formik.errors.startDate && formik.touched.startDate
                ? <div className="text-danger"> {formik.errors.startDate} </div>
                : null}
            </div>
            <div className="col">
              <label>End Date *</label>
              <input
                type="date" name="endDate" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.endDate}
                className="form-control"
              />
              {formik.errors.endDate && formik.touched.endDate
                ? <div className="text-danger"> {formik.errors.endDate} </div>
                : null}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Learning Count *</label>
              <input
                type="number" name="learnerCount" className="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}
                value={formik.values.learnerCount}
              />
              {formik.errors.learnerCount && formik.touched.learnerCount
                ? <div className="text-danger"> {formik.errors.learnerCount} </div>
                : null}
            </div>
            <div className="col">
              <label>Location *</label>
              <input
                type="text" name="location" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.location}
                className="form-control" placeholder="eg Coimbatore"
              />
              {formik.errors.location && formik.touched.location
                ? <div className="text-danger"> {formik.errors.location} </div>
                : null}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>SPOC *</label>
              <input
                type="text" name="spoc" className="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}
                value={formik.values.spoc} placeholder="eg sakthi"
              />
              {formik.errors.spoc && formik.touched.spoc
                ? <div className="text-danger"> {formik.errors.spoc} </div>
                : null}
            </div>
            <div className="col">
              <label>contact Number *</label>
              <input
                type="text" name="contactNumber" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.contactNumber}
                className="form-control" placeholder="eg 9047609410"
              />
              {formik.errors.contactNumber && formik.touched.contactNumber
                ? <div className="text-danger"> {formik.errors.contactNumber} </div>
                : null}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label>Estimated cost per Learner *</label>
              <input
                type="number" name="cost" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cost}
                className="form-control" placeholder="0"
              />
              {formik.errors.cost && formik.touched.cost
                ? <div className="text-danger"> {formik.errors.cost} </div>
                : null}
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Status *</label>
                <select className="form-control" name="status" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.status}>
                  <option disabled selected>eg.Upcoming</option>
                  <option>Upcoming</option>
                  <option>Pending For Approval</option>
                  <option>Ongoing</option>
                  <option>Completed</option>
                </select>
              </div>
              {formik.errors.status && formik.touched.status
                ? <div className="text-danger"> {formik.errors.status} </div>
                : null}
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Skills *</label>
                <select className="form-control" name="skills" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.skills}>
                  <option disabled selected>eg.Java</option>
                  <option>Java</option>
                  <option>Datastructures</option>
                  <option>Algorithms</option>
                  <option>OOPS</option>
                  <option>Python</option>
                </select>
              </div>
              {formik.errors.skills && formik.touched.skills
                ? <div className="text-danger"> {formik.errors.skills} </div>
                : null}
            </div>
            <div className="submit_btn">
              <button className="btn btn-secondary">Cancel</button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>

        </form>
      </div>
    }
    </div>
  );
}

export default TrainingForm;
