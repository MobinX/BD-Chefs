const appBaseUrl = 'https://bdchefs.com';
const noInternetMessage = 'connection_to_api_server_failed';

class AppClient {
    constructor() {
        this.token = null;
        this.mainHeaders = {};
    }

    updateHeader(token, zoneIDs, languageCode, latitude, longitude, setHeader = true) {
        const header = {
            'Content-Type': 'application/json; charset=UTF-8',
            'zoneId': zoneIDs ? JSON.stringify(zoneIDs) : '',
            'localizationKey': languageCode || languageCode,
            'latitude': latitude ? JSON.stringify(latitude) : '',
            'longitude': longitude ? JSON.stringify(longitude) : '',
            'Authorization': `Bearer ${token}`
        };
        if (setHeader) {
            this.mainHeaders = header;
        }
        return header;
    }

    async getData(uri, query, headers) {
        try {
            if (kDebugMode) {
                console.log(`====> API Call: ${uri}\nHeader: ${JSON.stringify(this.mainHeaders)}`);
            }
            const response = await fetch(appBaseUrl + uri, {
                method: 'GET',
                headers: headers || this.mainHeaders,
            });
            return this.handleResponse(response, uri);
        } catch (e) {
            if (kDebugMode) {
                console.log(`----------------${e.toString()}`);
            }
            return { statusCode: 1, statusText: noInternetMessage };
        }
    }

    async postData(uri, body, headers) {
        try {
            if (kDebugMode) {
                console.log(`====> API Call: ${uri}\nHeader: ${JSON.stringify(this.mainHeaders)}`);
                console.log(`====> API Body: ${JSON.stringify(body)}`);
            }
            const response = await fetch(appBaseUrl + uri, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: headers || this.mainHeaders,
            });
            return this.handleResponse(response, uri);
        } catch (e) {
            return { statusCode: 1, statusText: noInternetMessage };
        }
    }

    async postMultipartData(uri, body, multipartBody, headers) {
        try {
            if (kDebugMode) {
                console.log(`====> API Call: ${uri}\nHeader: ${JSON.stringify(this.mainHeaders)}`);
                console.log(`====> API Body: ${JSON.stringify(body)} with ${multipartBody.length} files`);
            }
            const formData = new FormData();
            for (const multipart of multipartBody) {
                if (multipart.file) {
                    formData.append(multipart.key, multipart.file, `${Date.now()}.png`);
                }
            }
            for (const [key, value] of Object.entries(body)) {
                formData.append(key, value);
            }
            const response = await fetch(appBaseUrl + uri, {
                method: 'POST',
                body: formData,
                headers: headers || this.mainHeaders,
            });
            return this.handleResponse(response, uri);
        } catch (e) {
            return { statusCode: 1, statusText: noInternetMessage };
        }
    }

    async putData(uri, body, headers) {
        try {
            if (kDebugMode) {
                console.log(`====> API Call: ${uri}\nHeader: ${JSON.stringify(this.mainHeaders)}`);
                console.log(`====> API Body: ${JSON.stringify(body)}`);
            }
            const response = await fetch(appBaseUrl + uri, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: headers || this.mainHeaders,
            });
            return this.handleResponse(response, uri);
        } catch (e) {
            return { statusCode: 1, statusText: noInternetMessage };
        }
    }

    async deleteData(uri, headers) {
        try {
            if (kDebugMode) {
                console.log(`====> API Call: ${uri}\nHeader: ${JSON.stringify(this.mainHeaders)}`);
            }
            const response = await fetch(appBaseUrl + uri, {
                method: 'DELETE',
                headers: headers || this.mainHeaders,
            });
            return this.handleResponse(response, uri);
        } catch (e) {
            return { statusCode: 1, statusText: noInternetMessage };
        }
    }

    handleResponse(response, uri) {
        let body;
        try {
            body = JSON.parse(response.body);
        } catch (_) {}
        let response0 = {
            body: body || response.body,
            bodyString: response.body.toString(),
            request: {
                headers: response.request.headers,
                method: response.request.method,
                url: response.request.url,
            },
            headers: response.headers,
            statusCode: response.statusCode,
            statusText: response.reasonPhrase,
        };
        if (response0.statusCode !== 200 && response0.body && typeof response0.body !== 'string') {
            if (response0.body.toString().startsWith('{errors: [{code:')) {
                const errorResponse = JSON.parse(response0.body);
                response0 = {
                    statusCode: response0.statusCode,
                    body: response0.body,
                    statusText: errorResponse.errors[0].message,
                };
            } else if (response0.body.toString().startsWith('{message')) {
                response0 = {
                    statusCode: response0.statusCode,
                    body: response0.body,
                    statusText: response0.body.message,
                };
            }
        } else if (response0.statusCode !== 200 && response0.body === null) {
            response0 = { statusCode: 0, statusText: noInternetMessage };
        }
        if (kDebugMode) {
            console.log(`====> API Response: [${response0.statusCode}] ${uri}\n${JSON.stringify(response0.body)}`);
        }
        return response0;
    }
}

// export the class
export default AppClient;
