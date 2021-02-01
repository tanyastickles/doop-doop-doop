import {shallow} from "enzyme";
import Results from "../pages/ResultsPage";

test('component exists and renders appropriate children', () => {
    const wrapper = shallow(<Results />);
    wrapper.exists();
});

/**
 * tests:
 * 
 */