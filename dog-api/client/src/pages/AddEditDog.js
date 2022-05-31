import React, { useState, useEffect} from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBValidation,
    MDBBtn,
    MDBInput,
  } from "mdb-react-ui-kit";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDog } from "../redux/features/dogSlice";



const initialState = {
    dogname: "",
    breeds: "",
    description: ""
  };

const AddEditDog = () => {
    const [dogData, setDogData] = useState(initialState);
    const {error, loading } = useSelector ((state) => ({...state.dog}));
    const {user} = useSelector ((state) => ({...state.dog}));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {dogname, breeds, description} = dogData;
    
    useEffect(() => {
        error && toast.error(error);
    }, [error])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dogname && breeds && description) {
            const updatedDogData = {...dogData, name: user?.result?.name};
            dispatch(addDog({updatedDogData, navigate}));
            handleClear();
        }
    };
    const onInputChange = (e) => {
        const {name, value} = e.target;
        setDogData({...dogData,[name]: value });
    }
    const handleClear = () => {
        setDogData({dogname: "", breeds: "", description: ""})
    };
    return (
        <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
          marginTop: "120px",
        }} className='container'
        >
            <MDBCard alignment="center">
        <h5>Add a Dog</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Dog name"
                type="text"
                value={dogname || ""}
                name="dogname"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please provide dog name"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Dog breeds"
                type="text"
                value={breeds || ""}
                name="breeds"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please provide dog breeds"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                placeholder="Enter Description"
                type="text"
                value={description}
                name="description"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                textarea
                rows={4}
                validation="Please provide description"
              />
            </div>

            <div className="d-flex justify-content-start">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setDogData({ ...dogData, imageFile: base64 })
                }
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }}>
                Submit
              </MDBBtn>
              <MDBBtn
                style={{ width: "100%" }}
                className="mt-2"
                color="danger"
                onClick={handleClear}
              >
                Clear
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
            
        </div>
        
    )
};

export default AddEditDog;

