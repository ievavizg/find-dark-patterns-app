import * as React from "react";
import emailjs from "emailjs-com";
import { ApiKeys } from "../../apiKeys";
import {
  Wrapper,
  StyledTextField,
  StyledInput,
} from "./RegisterPattern.styled";
import { Heading } from "../DarkPatterns/DarkPatterns.styled";
import { useLanguage } from "../../context";

type FormType = {
  websiteUrl: string;
  information: string;
  type: string;
  avoidance: string;
  email: string;
};

const RegisterPattern = (): React.ReactElement => {
  const [formValues, setFormValues] = React.useState<FormType>({
    websiteUrl: "",
    information: "",
    type: "",
    avoidance: "",
    email: ""
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    emailjs
      .send("service_qd54g3l", ApiKeys.TEMPLATE_ID, formValues, ApiKeys.USER_ID)
      .then(
        function (response) {
          alert("Pattern registered successfully");
          setFormValues({
            websiteUrl: "",
            information: "",
            type: "",
            avoidance: "",
            email: ""
          });
        },
        function (err) {
          alert("Sorry, but message sending failed. Please try again");
        }
      );
  };

  const {
    buttons: { submit },
    register: {
      heading,
      urlLabel,
      urlHelperText,
      descLabel,
      descHelperText,
      typeLabel,
      typeHelperText,
      avoidanceLabel,
      avoidanceHelperText,
      emailLabel,
      emailHelperText,
    },
  } = useLanguage().strings;
  return (
    <React.Fragment>
      <Heading>{heading}</Heading>
      <Wrapper>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          style={{ textAlign: "center" }}
        >
          <StyledTextField
            id="websiteUrl"
            name="websiteUrl"
            label={urlLabel}
            helperText={urlHelperText}
            required
            value={formValues.websiteUrl}
            onChange={(e) =>
              setFormValues({ ...formValues, websiteUrl: e.target.value })
            }
            style={{ margin: "0.5rem" }}
          />
          <div>
            <StyledTextField
              id="information"
              name="information"
              label={descLabel}
              helperText={descHelperText}
              required
              multiline
              value={formValues.information}
              onChange={(e) =>
                setFormValues({ ...formValues, information: e.target.value })
              }
              style={{ margin: "0.5rem" }}
            />
          </div>
          <div>
            <StyledTextField
              id="type"
              name="type"
              label={typeLabel}
              helperText={typeHelperText}
              value={formValues.type}
              onChange={(e) =>
                setFormValues({ ...formValues, type: e.target.value })
              }
              style={{ margin: "0.5rem" }}
            />
          </div>
          <div>
            <StyledTextField
              id="avoidance"
              name="avoidance"
              label={avoidanceLabel}
              helperText={avoidanceHelperText}
              value={formValues.avoidance}
              onChange={(e) =>
                setFormValues({ ...formValues, avoidance: e.target.value })
              }
              style={{ margin: "0.5rem" }}
            />
          </div>
          <div>
            <StyledTextField
              id="email"
              name="email"
              label={emailLabel}
              helperText={emailHelperText}
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              style={{ margin: "0.5rem" }}
            />
          </div>
          <StyledInput type="submit" value={submit} />
        </form>
      </Wrapper>
    </React.Fragment>
  );
};

export default RegisterPattern;
