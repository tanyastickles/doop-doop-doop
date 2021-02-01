import {shallow} from "enzyme";
import PickMoviePage from "../pages/PickMoviePage";
import SearchBar from "../components/SearchBar";

test('component exists and renders appropriate children', () => {
    const wrapper = shallow(<PickMoviePage />);
    wrapper.exists();
    expect(wrapper.find(SearchBar).length).toBe(1);
});


/**
 * tests:
 * 
 * happy paths:
 * when user types in the search bar, will call API to autocomplete options
 * user can only select option from the drop down (can only submit valid movie)
 * dropdown will display loading spinner while api is fetching results
 * if user selects valid movie, calls on submit handler
 * 
 * 
 * unhappy paths:
 * if movie doesn't exist in api, display error message
 * if there is an issue connecting to the api, display another error message
 */