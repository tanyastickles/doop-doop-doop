import {shallow} from "enzyme";
import Results from "../components/Results";

test('component exists and renders appropriate children', () => {
    const wrapper = shallow(<Results />);
    wrapper.exists();
});