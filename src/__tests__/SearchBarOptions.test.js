import {shallow} from "enzyme";
import Dropdown from "react-bootstrap/Dropdown";
import SearchBarOptions from "../components/SearchBarOptions";
import {FORMATTED_DATA} from "../mocks/search_movie_data";


test("component exists and renders no children by default", () => {
    const wrapper = shallow(<SearchBarOptions />);
    wrapper.exists();
    expect(wrapper.find(Dropdown).length).toBe(0);
});

test("component renders a drop down element per movie", () => {
    const wrapper = shallow(<SearchBarOptions movies={FORMATTED_DATA} />)

    expect(wrapper.find(Dropdown.Item).length).toBe(2);
});

test("clicking on a child components calls the click handler", () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<SearchBarOptions 
        movies={FORMATTED_DATA}
        onClick={handleClick}
    />);

    const firstOption = wrapper.find(Dropdown.Item).first();
    firstOption.simulate("click");

    expect(handleClick).toBeCalled();
});