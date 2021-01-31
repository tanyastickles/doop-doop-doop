import {shallow} from "enzyme";
import PickMovie from "../components/PickMovie";

test('component exists and renders appropriate children', () => {
    const wrapper = shallow(<PickMovie />);
    wrapper.exists();
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