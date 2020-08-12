

export const TestScenarios = {
    "Successfull get todos from third party services":
    {
        inputData: '',
        shouldFail: false,
        expectedResponseBody: {
            data: { success: true }
        },
        expectedResponseStatus: 200
    },
    "Failure in get todos from third party services":
    {
        inputData: '',
        shouldFail: true,
        expectedResponseBody: {
            data: { success: false }
        },
        expectedResponseStatus: 400
    },
    "Successfull post todos to third party services":
    {
        inputData: [
            {
              "userId": 2,
              "id": 2,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }],
        shouldFail: false,
        expectedResponseBody: {
            data: { success: true }
        },
        expectedResponseStatus: 200
    },
    "Failure in post todos to third party services":
    {
        inputData: [
            {
              "userId": 2,
              "id": 2,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }],
        shouldFail: true,
        expectedResponseBody: {
            data: { success: false }
        },
        expectedResponseStatus: 400
    },
    "Successfull delete todos to third party services":
    {
        inputData: '',
        shouldFail: false,
        expectedResponseBody: {
            data: { success: true }
        },
        expectedResponseStatus: 200
    },
    "Failure in delete todos to third party services":
    {
        inputData: '',
        shouldFail: true,
        expectedResponseBody: {
            data: { success: false }
        },
        expectedResponseStatus: 400
    }
}