module.exports = {
    GetHeadlinesByCountry: {
        operationId: "GetHeadlinesByCountry",
        description: "Get the headlines filtered by country and category.",
        protocol: "http",
        host: "localhost:8080",
        basePath: "/api",
        path: "/news/headlines",
        uri: "http://localhost:8080/api/news/headlines",
        method: "get",
        parameters: {
            query: [
                {
                    "in": "query",
                    name: "country",
                    type: "string"
                },
                {
                    "in": "query",
                    name: "category",
                    type: "string"
                }
            ],
            header: [
                {
                    "in": "header",
                    name: "x-request-id",
                    type: "string"
                },
                {
                    "in": "header",
                    name: "x-b3-traceid",
                    type: "string"
                },
                {
                    "in": "header",
                    name: "x-b3-spanid",
                    type: "string"
                },
                {
                    "in": "header",
                    name: "x-b3-parentspanid",
                    type: "string"
                },
                {
                    "in": "header",
                    name: "x-b3-sampled",
                    type: "string"
                },
                {
                    "in": "header",
                    name: "x-b3-flags",
                    type: "string"
                },
                {
                    "in": "header",
                    name: "x-ot-span-context",
                    type: "string"
                }
            ],
            path: [],
            formData: [],
            body: []
        },
        responses: {
            "200": {
                description: "Success."
            },
            "400": {
                description: "Bad Request"
            },
            "401": {
                description: "Authorization Required"
            },
            "500": {
                description: "Server Error"
            }
        },
        outputContentType: [
            "application/json"
        ],
        securityDefinitions: {
            basicAuth: {
                type: "basic",
                description: "Require authorized access to API"
            }
        }
    }
}