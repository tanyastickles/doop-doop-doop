import App from '../App';
import {shallow} from "enzyme";
import PickMoviePage from '../pages/PickMoviePage';

test('initially renders pick movie page', () => {
  const wrapper = shallow(<App />);
  wrapper.exists();
  expect(wrapper.find(PickMoviePage).length).toBe(1);
});
