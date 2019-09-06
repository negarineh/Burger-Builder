import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });
let wrapper;

describe('<NavigationItems/>', () => {
    beforeEach(() => {
        wrapper = shallow(<NavigationItems/>);
    });

    it('it should render two NavigationItems if not Auth', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('it should render two NavigationItem if not Auth', () => {
        wrapper.setProps({
            isAuthenticated: true,
        });
        expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
    });

    it('it should render 3 NavigationItem if Auth', () => {
        wrapper.setProps({
            isAuthenticated: true,
        });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })
});