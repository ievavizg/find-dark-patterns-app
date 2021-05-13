import * as React from "react";
import emailjs from "emailjs-com";
import { ApiKeys } from "../../apiKeys";
import { Wrapper, StyledTextField, StyledInput } from "./RegisterPattern.styled";
import { Heading } from "../DarkPatterns/DarkPatterns.styled";
import { useLanguage } from "../../context";

type FormType = {
  websiteUrl: string;
  information: string;
  type?: string;
  avoidance?: string;
  email?: string;
};

const RegisterPattern = (): React.ReactElement => {
  const [formValues, setFormValues] = React.useState<FormType>({
    websiteUrl: "",
    information: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    emailjs
      .send("service_qd54g3l", ApiKeys.TEMPLATE_ID, formValues, ApiKeys.USER_ID)
      .then(
        function (response) {
          
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
  };

  const {
      buttons: {
          submit
      },
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
        <form autoComplete="off" onSubmit={handleSubmit} style={{textAlign: 'center'}}>
          <StyledTextField
            label={urlLabel}
            helperText={urlHelperText}
            required
            onChange={(e) =>
              setFormValues({ ...formValues, websiteUrl: e.target.value })
            }
            style={{margin: '0.5rem'}}
          />
          <div>
            <StyledTextField
              label={descLabel}
              helperText={descHelperText}
              required
              multiline
              onChange={(e) =>
                setFormValues({ ...formValues, information: e.target.value })
              }
              style={{margin: '0.5rem'}}
            />
          </div>
          <div>
            <StyledTextField
              label={typeLabel}
              helperText={typeHelperText}
              onChange={(e) =>
                setFormValues({ ...formValues, type: e.target.value })
              }
              style={{margin: '0.5rem'}}
            />
          </div>
          <div>
            <StyledTextField
              label={avoidanceLabel}
              helperText={avoidanceHelperText}
              onChange={(e) =>
                setFormValues({ ...formValues, avoidance: e.target.value })
              }
              style={{margin: '0.5rem'}}
            />
          </div>
          <div>
            <StyledTextField
              label={emailLabel}
              helperText={emailHelperText}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              style={{margin: '0.5rem'}}
            />
          </div>
          <StyledInput type="submit" value={submit}/>
        </form>
      </Wrapper>
    </React.Fragment>
  );
};

export default RegisterPattern;
