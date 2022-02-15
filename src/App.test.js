import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';

// configuring enzyme
Enzyme.configure({ adapter : new EnzymeAdapter() });

/**
 * 
 * @returns Factory function to create a shallow Wrapper for the App component
 */
const setup =()=> shallow(<App/>); 

const findAttributeByName = (wrapper, attValue, attName) => wrapper.find(`[${attName}='${attValue}']`);

test('renders without error',()=>{
  const wrapper = setup();
  //const appComponent = wrapper.find("[data-test='component-app']");
  const appComponent = findAttributeByName(wrapper, "component-app", "data-test");
  expect(appComponent.length).toBe(1);
});

test('renders increment button',()=>{
  const wrapper = setup();
  const button = findAttributeByName(wrapper,"increment-button","data-test");
  expect(button.length).toBe(1);
});


test('renders counter display',()=>{
  const wrapper = setup();
  const counterDisplay = findAttributeByName(wrapper,"counter-display","data-test");
  expect(counterDisplay.length).toBe(1);
});

test('counter display start at 0',()=>{
  const wrapper = setup();
  const counterDisplay = findAttributeByName(wrapper,"count","data-test");
  expect(counterDisplay.text()).toBe("0");//text() always return string
});

test('clicking button increments counter display',()=>{
  const wrapper= setup();
//order is very imp -->
  //find the button
  const button = findAttributeByName(wrapper,"increment-button","data-test");

  //click the button
  button.simulate('click');

  //find the display and test that number has been incremented
  const count = findAttributeByName(wrapper,"count","data-test").text();
  expect(count).toBe("1");
});

test('clicking button decrements counter display',()=>{
  const wrapper= setup();
//order is very imp -->
  //find the button
  const button = findAttributeByName(wrapper,"decrement-button","data-test");
  
  //click the button
  button.simulate('click');

  // console.log(wrapper.html())
  //find the display and test that number has been incremented
  const errorMessage = findAttributeByName(wrapper,"error-message","data-test");
  const errorHasHiddenClass = errorMessage.hasClass("hidden");

  expect(errorHasHiddenClass).toBe(false);
});

test('clicking button decrements counter display and then increment button',()=>{
  const wrapper= setup();
//order is very imp -->
  //find the button
  const decButton = findAttributeByName(wrapper,"decrement-button","data-test");
  
  //click the button
  decButton.simulate('click');

  console.log(wrapper.html())
  //find the button
  const incButton = findAttributeByName(wrapper,"increment-button","data-test");
  
  //click the button
  incButton.simulate('click');
  console.log(wrapper.html())
  //find the display and test that number has been incremented
  const errorMessage = findAttributeByName(wrapper,"error-message","data-test");
  const errorHasHiddenClass = errorMessage.hasClass("hidden");

  expect(errorHasHiddenClass).toBe(true);
});