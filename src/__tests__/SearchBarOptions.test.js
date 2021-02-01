import {shallow} from "enzyme";
import Dropdown from "react-bootstrap/Dropdown";
import SearchBarOptions, {Option} from "../components/SearchBarOptions";
import {FORMATTED_DATA} from "../mocks/search_movie_data";


test("component exists and renders no children by default", () => {
    const wrapper = shallow(<SearchBarOptions />);
    wrapper.exists();
    expect(wrapper.find(Option).length).toBe(0);
});

test("component renders a drop down element per movie", () => {
    const wrapper = shallow(<SearchBarOptions movies={FORMATTED_DATA} />)

    expect(wrapper.find(Option).length).toBe(2);
});

test("clicking on a child components calls the click handler", () => {
    const handleClick = jest.fn(id => {});
    const wrapper = shallow(<SearchBarOptions 
        movies={FORMATTED_DATA}
        onClick={handleClick}
    />);

    const firstOption = wrapper.find(Option).first();
    firstOption.simulate("click");

    expect(handleClick).toBeCalled();
});