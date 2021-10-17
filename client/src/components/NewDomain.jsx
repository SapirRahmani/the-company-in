import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewDomain } from "../redux/actions";

const NewDomain = () => {
  const serverUrl = "http://localhost:8000";

  const domainTextFiled = useInput("text", "");
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleClick = async (e) => {
    try {
      const domain = domainTextFiled.value;
      const serverRes = await axios.get(`${serverUrl}/`, {
        params: { domain },
      });
      console.log(serverRes);

      if (serverRes.status === 200 && serverRes.data.id) {
        dispatch(addNewDomain(serverRes.data));

        //reset filed and errors
        domainTextFiled.reset();
        setError("");
      } else if (serverRes.data.error) {
        // api error
        setError(serverRes.data.error.message);
      } else {
        //server error
        setError(serverRes.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TextField
        type="url"
        placeholder="enter your new domain"
        {...domainTextFiled}
        variant="outlined"
      />
      <Button variant="contained" onClick={handleClick}>
        Find
      </Button>
      <h2>{error.toString()}</h2>
    </>
  );
};

export default NewDomain;

// input Hook
const useInput = (type, initValue) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => setValue(initValue);

  return {
    type,
    onChange,
    value,
    reset,
  };
};
