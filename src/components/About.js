import { Button } from "reactstrap";
import Base from "./Base";

const About = () => {
     return  (
        <Base>
        <h1>This is my about component</h1>
        <Button color="success">Click here please</Button>
        <h1>This is the last line of about component</h1>
        <Button color="warning">Click here for last button</Button>
        </Base>
     );
};

export default About;