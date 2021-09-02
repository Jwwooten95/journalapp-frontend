import React from 'react';
import axios from 'axios'
import { Enzyme, EnzymeAdapter, shallow} from 'enzyme';
import Entry from './Entry';
import Adapter from "enzyme-adapter-react-16";

jest.mock('axios');

describe('Entry', () => {

    describe("Title input", () => {
        it("Should capture title correctly onChange", () => {
            const entryWrapper = shallow(<Entry />);
            const title = 'My First Post';
            const titleInput = entryWrapper.find('input')
            titleInput.simulate('change', { target: { value: title }});
            expect(entryWrapper.state().title).toEqual(title);
        });
    });

    describe("Body input", () => {
        it("Should capture title correctly onChange", () => {
            const entryWrapper = shallow(<Entry />);
            const body = 'cheese';
            const bodyInput = entryWrapper.find('textarea')
            bodyInput.simulate('change', { target: { value: body }});
            expect(entryWrapper.state().body).toEqual(body);
        });
    });

    it("posts an entry", () => {
        const entryWrapper = shallow(<Entry />);

        const mockData = {
            title: "My First Post",
            body: "cheese",
            creationDate: null,
            editDate: null
        }

        const postSpy = jest.spyOn(axios, 'post');

        const title = mockData.title;
        const titleInput = entryWrapper.find('input')
        titleInput.simulate('change', { target: { value: title }});
        const body = mockData.body;
        const bodyInput = entryWrapper.find('textarea')
        bodyInput.simulate('change', { target: { value: body }});

        const form = entryWrapper.find('form');
        form.simulate('submit');
        expect(postSpy).toBeCalled();
        const postPromise = postSpy.mock.results.pop().value;
        return postPromise.then((postResponse) => {
            const entryWrapperState = entryWrapper.state();
            expect(entryWrapperState.title.text).toEqual(postResponse.data.title.text);
            expect(entryWrapperState.body.text).toEqual(postResponse.data.body.text);
            expect(entryWrapperState.body.creationDate).toEqual(postResponse.data.body.creationDate);
        })
    })
});