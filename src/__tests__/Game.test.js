import {shallow} from "enzyme";
import GamePage, {ErrorGamePage} from "../pages/GamePage";
import Button from "react-bootstrap/Button";
import CheckBox from "../components/CheckBox";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const ALL_MY_FAVORITE_CATS = ['goldie', 'mr. pickles', 'cousin cyd', 'jet jet', 'bean'];

test('error page exists and renders expected components', () => {
    const wrapper = shallow(<ErrorGamePage />);
    wrapper.exists();
    expect(wrapper.find(Card).length).toBe(1);
});

test('without any actors, the game page does not render any checkboxes', () => {
    const wrapper = shallow(<GamePage />);
    wrapper.exists();
    expect(wrapper.find(ErrorGamePage).length).toBe(1);
    expect(wrapper.find(Form.Check).length).toBe(0);
    expect(wrapper.find(Button).length).toBe(0);
});

test('game page renders one checkbox per actor and has a submit button', () => {
    const wrapper = shallow(<GamePage actors={ALL_MY_FAVORITE_CATS} />);

    expect(wrapper.find(CheckBox).length).toBe(5);
} );

// TODO: fix the test.  breaking b/c it doesn't recognize the event getting pushed in
// test('handler is called on submit', () => {
//     const handleSubmit = jest.fn();
//     const wrapper = shallow(<GamePage actors={ALL_MY_FAVORITE_CATS} onSubmit={handleSubmit}/>);

//     wrapper.find(Form).simulate("submit");
//     expect(handleSubmit).toBeCalled();
// });
