import App from './App';
import {shallow} from "enzyme";

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  wrapper.exists();
});
