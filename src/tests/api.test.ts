
jest.autoMockOff();
//---IMPORT STARTS--//

import axios from "../__mocks__/axios/axios.lib";
jest.mock('axios', () => ({
    __esModule: true,
    default: axios,
}));
import { TestScenarios } from "./dataset/api.dataset";
import { getToDoList,postToDoList, deleteToDoList } from '../api';

//---IMPORT ENDS--//


const _getToDoList = (scenario:string) => {
    describe("getToDoList method test", () => {
        let { inputData, shouldFail, expectedResponseBody } = TestScenarios[scenario];
        beforeEach(() => {
            axios.get.mockRestore();
        });

        it(scenario, async () => {
            if (shouldFail) {
                const errorMessage = 'Internal Server Error';
                axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
                expect(getToDoList()).rejects.toThrowError(errorMessage);
            } else {
                axios.get.mockImplementationOnce(() => Promise.resolve(expectedResponseBody));
                expect(getToDoList()).toMatchObject({});
                expect(axios.get).toHaveBeenCalledTimes(1);
                expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/todos/1`);
            }
        });
    })
}

const _postToDoList = (scenario:string) => {
    describe("postToDoList method test", () => {
        let { inputData, shouldFail, expectedResponseBody } = TestScenarios[scenario];
        beforeEach(() => {
            axios.post.mockRestore();
        });

        it(scenario, async () => {
            if (shouldFail) {
                const errorMessage = 'Network Error';
                axios.post.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
                expect(postToDoList(inputData)).rejects.toThrowError(errorMessage);
            } else {
                axios.post.mockImplementationOnce(() => Promise.resolve(expectedResponseBody));
                expect(postToDoList(inputData)).toMatchObject({});
                expect(axios.post).toHaveBeenCalledTimes(1);
            }
        });
    })
}

const _deleteToDoList = (scenario:string) => {
    describe("postToDoList method test", () => {
        let { inputData, shouldFail, expectedResponseBody } = TestScenarios[scenario];
        beforeEach(() => {
            axios.delete.mockRestore();
        });

        it(scenario, async () => {
            if (shouldFail) {
                const errorMessage = 'Network Error';
                axios.delete.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
                expect(deleteToDoList()).rejects.toThrowError(errorMessage);
            } else {
                axios.delete.mockImplementationOnce(() => Promise.resolve(expectedResponseBody));
                expect(deleteToDoList()).toMatchObject({});
                expect(axios.delete).toHaveBeenCalledTimes(1);
            }
        });
    })
}



describe("Api test suite", () => {
    _getToDoList("Successfull get todos from third party services");
    _getToDoList("Failure in get todos from third party services");
    _postToDoList("Successfull post todos to third party services");
    _postToDoList("Failure in post todos to third party services");
    _deleteToDoList("Successfull delete todos to third party services");
    _deleteToDoList("Failure in delete todos to third party services");
})