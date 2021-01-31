import {shallow} from "enzyme";
import Game from "../components/Game";

test('component exists and renders appropriate children', () => {
    const wrapper = shallow(<Game />);
    wrapper.exists();
});

/**
 * user can only select up to max number of options (default is 3)
 * user can only submit answers if they select the appropriate number of options 
 * on submit, calls handler
 * renders header and options components 
 */