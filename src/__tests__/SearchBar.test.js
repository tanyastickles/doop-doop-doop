import { shallow } from "enzyme";
import { FormControl, InputGroup } from "react-bootstrap";
import SearchBar from "../components/SearchBar";

test("component renders", () => {
  const wrapper = shallow(<SearchBar />);
  wrapper.exists();
  expect(wrapper.find(FormControl).length).toBe(1);
});

test("on change calls handler", () => {
  const handleChange = jest.fn();
  const wrapper = shallow(<SearchBar onChange={handleChange} />);
  
  wrapper.simulate('change');
  expect(handleChange).toBeCalled();
});
