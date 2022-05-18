import globalAxios, {AxiosInstance, AxiosPromise} from "axios";
import {
    DeleteActionList,
    DeleteActionPage,
    FilesPage,
    S3,
    SessionCredentialsInfo,
    SessionInfo,
    SessionUidInfo,
    UpdateActionList,
    UpdateActionPage
} from "../model/files";
import {BASE_PATH, BaseAPI, RequestArgs, RequiredError} from "./base";
import {Configuration} from './configuration';

/**
 * ActionApi - axios parameter creator
 * @export
 */
export const ActionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Add files to delete within a session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {DeleteActionList} deleteActionList List of files to delete within session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFilesToDelete: async (projectUid: string, sessionUid: string, deleteActionList: DeleteActionList, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling addFilesToDelete.');
            }
            // verify required parameter 'sessionUid' is not null or undefined
            if (sessionUid === null || sessionUid === undefined) {
                throw new RequiredError('sessionUid', 'Required parameter sessionUid was null or undefined when calling addFilesToDelete.');
            }
            // verify required parameter 'deleteActionList' is not null or undefined
            if (deleteActionList === null || deleteActionList === undefined) {
                throw new RequiredError('deleteActionList', 'Required parameter deleteActionList was null or undefined when calling addFilesToDelete.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/{sessionUid}/delete-actions`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)))
                .replace(`{${"sessionUid"}}`, encodeURIComponent(String(sessionUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof deleteActionList !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data = needsSerialization
                ? JSON.stringify(deleteActionList !== undefined ? deleteActionList : {})
                : (deleteActionList || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Add files to delete within last session
         * @param {string} projectUid UUID of project
         * @param {DeleteActionList} deleteActionList List of files to delete within session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFilesToDeleteWithinLastSession: async (projectUid: string, deleteActionList: DeleteActionList, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling addFilesToDeleteWithinLastSession.');
            }
            // verify required parameter 'deleteActionList' is not null or undefined
            if (deleteActionList === null || deleteActionList === undefined) {
                throw new RequiredError('deleteActionList', 'Required parameter deleteActionList was null or undefined when calling addFilesToDeleteWithinLastSession.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/last/delete-actions`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof deleteActionList !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data = needsSerialization
                ? JSON.stringify(deleteActionList !== undefined ? deleteActionList : {})
                : (deleteActionList || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Add files to update within a session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {UpdateActionList} updateActionList List of files to update within session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFilesToUpdate: async (projectUid: string, sessionUid: string, updateActionList: UpdateActionList, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling addFilesToUpdate.');
            }
            // verify required parameter 'sessionUid' is not null or undefined
            if (sessionUid === null || sessionUid === undefined) {
                throw new RequiredError('sessionUid', 'Required parameter sessionUid was null or undefined when calling addFilesToUpdate.');
            }
            // verify required parameter 'updateActionList' is not null or undefined
            if (updateActionList === null || updateActionList === undefined) {
                throw new RequiredError('updateActionList', 'Required parameter updateActionList was null or undefined when calling addFilesToUpdate.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/{sessionUid}/update-actions`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)))
                .replace(`{${"sessionUid"}}`, encodeURIComponent(String(sessionUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof updateActionList !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data = needsSerialization
                ? JSON.stringify(updateActionList !== undefined ? updateActionList : {})
                : (updateActionList || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Add files to update within last session
         * @param {string} projectUid UUID of project
         * @param {UpdateActionList} updateActionList List of files to update within last session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFilesToUpdateWithinLastSession: async (projectUid: string, updateActionList: UpdateActionList, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling addFilesToUpdateWithinLastSession.');
            }
            // verify required parameter 'updateActionList' is not null or undefined
            if (updateActionList === null || updateActionList === undefined) {
                throw new RequiredError('updateActionList', 'Required parameter updateActionList was null or undefined when calling addFilesToUpdateWithinLastSession.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/last/update-actions`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof updateActionList !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data = needsSerialization
                ? JSON.stringify(updateActionList !== undefined ? updateActionList : {})
                : (updateActionList || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get delete actions declared for a session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFilesToDelete: async (projectUid: string, sessionUid: string, limit?: number, page?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling getFilesToDelete.');
            }
            // verify required parameter 'sessionUid' is not null or undefined
            if (sessionUid === null || sessionUid === undefined) {
                throw new RequiredError('sessionUid', 'Required parameter sessionUid was null or undefined when calling getFilesToDelete.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/{sessionUid}/delete-actions`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)))
                .replace(`{${"sessionUid"}}`, encodeURIComponent(String(sessionUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["read"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get delete actions declared for last session
         * @param {string} projectUid UUID of project
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFilesToDeleteWithinLastSession: async (projectUid: string, limit?: number, page?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling getFilesToDeleteWithinLastSession.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/last/delete-actions`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["read"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get update actions declared for a session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFilesToUpdate: async (projectUid: string, sessionUid: string, limit?: number, page?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling getFilesToUpdate.');
            }
            // verify required parameter 'sessionUid' is not null or undefined
            if (sessionUid === null || sessionUid === undefined) {
                throw new RequiredError('sessionUid', 'Required parameter sessionUid was null or undefined when calling getFilesToUpdate.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/{sessionUid}/update-actions`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)))
                .replace(`{${"sessionUid"}}`, encodeURIComponent(String(sessionUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["read"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get update actions declared for last session
         * @param {string} projectUid UUID of project
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFilesToUpdateWithinLastSession: async (projectUid: string, limit?: number, page?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling getFilesToUpdateWithinLastSession.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/last/update-actions`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["read"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ActionApi - functional programming interface
 * @export
 */
export const ActionApiFp = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Add files to delete within a session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {DeleteActionList} deleteActionList List of files to delete within session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addFilesToDelete(projectUid: string, sessionUid: string, deleteActionList: DeleteActionList, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ActionApiAxiosParamCreator(configuration).addFilesToDelete(projectUid, sessionUid, deleteActionList, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Add files to delete within last session
         * @param {string} projectUid UUID of project
         * @param {DeleteActionList} deleteActionList List of files to delete within session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addFilesToDeleteWithinLastSession(projectUid: string, deleteActionList: DeleteActionList, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ActionApiAxiosParamCreator(configuration).addFilesToDeleteWithinLastSession(projectUid, deleteActionList, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Add files to update within a session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {UpdateActionList} updateActionList List of files to update within session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addFilesToUpdate(projectUid: string, sessionUid: string, updateActionList: UpdateActionList, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ActionApiAxiosParamCreator(configuration).addFilesToUpdate(projectUid, sessionUid, updateActionList, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Add files to update within last session
         * @param {string} projectUid UUID of project
         * @param {UpdateActionList} updateActionList List of files to update within last session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addFilesToUpdateWithinLastSession(projectUid: string, updateActionList: UpdateActionList, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ActionApiAxiosParamCreator(configuration).addFilesToUpdateWithinLastSession(projectUid, updateActionList, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Get delete actions declared for a session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFilesToDelete(projectUid: string, sessionUid: string, limit?: number, page?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteActionPage>> {
            const localVarAxiosArgs = await ActionApiAxiosParamCreator(configuration).getFilesToDelete(projectUid, sessionUid, limit, page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Get delete actions declared for last session
         * @param {string} projectUid UUID of project
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFilesToDeleteWithinLastSession(projectUid: string, limit?: number, page?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteActionPage>> {
            const localVarAxiosArgs = await ActionApiAxiosParamCreator(configuration).getFilesToDeleteWithinLastSession(projectUid, limit, page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Get update actions declared for a session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFilesToUpdate(projectUid: string, sessionUid: string, limit?: number, page?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateActionPage>> {
            const localVarAxiosArgs = await ActionApiAxiosParamCreator(configuration).getFilesToUpdate(projectUid, sessionUid, limit, page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Get update actions declared for last session
         * @param {string} projectUid UUID of project
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFilesToUpdateWithinLastSession(projectUid: string, limit?: number, page?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateActionPage>> {
            const localVarAxiosArgs = await ActionApiAxiosParamCreator(configuration).getFilesToUpdateWithinLastSession(projectUid, limit, page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ActionApi - object-oriented interface
 * @export
 * @class ActionApi
 * @extends {BaseAPI}
 */
export class ActionApi extends BaseAPI {
    /**
     *
     * @summary Add files to delete within a session
     * @param {string} projectUid UUID of project
     * @param {string} sessionUid UUID of upload session
     * @param {DeleteActionList} deleteActionList List of files to delete within session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionApi
     */
    public addFilesToDelete(projectUid: string, sessionUid: string, deleteActionList: DeleteActionList, options?: any) {
        return ActionApiFp(this.configuration).addFilesToDelete(projectUid, sessionUid, deleteActionList, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Add files to delete within last session
     * @param {string} projectUid UUID of project
     * @param {DeleteActionList} deleteActionList List of files to delete within session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionApi
     */
    public addFilesToDeleteWithinLastSession(projectUid: string, deleteActionList: DeleteActionList, options?: any) {
        return ActionApiFp(this.configuration).addFilesToDeleteWithinLastSession(projectUid, deleteActionList, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Add files to update within a session
     * @param {string} projectUid UUID of project
     * @param {string} sessionUid UUID of upload session
     * @param {UpdateActionList} updateActionList List of files to update within session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionApi
     */
    public addFilesToUpdate(projectUid: string, sessionUid: string, updateActionList: UpdateActionList, options?: any) {
        return ActionApiFp(this.configuration).addFilesToUpdate(projectUid, sessionUid, updateActionList, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Add files to update within last session
     * @param {string} projectUid UUID of project
     * @param {UpdateActionList} updateActionList List of files to update within last session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionApi
     */
    public addFilesToUpdateWithinLastSession(projectUid: string, updateActionList: UpdateActionList, options?: any) {
        return ActionApiFp(this.configuration).addFilesToUpdateWithinLastSession(projectUid, updateActionList, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get delete actions declared for a session
     * @param {string} projectUid UUID of project
     * @param {string} sessionUid UUID of upload session
     * @param {number} [limit] Maximum number of the items to be returned
     * @param {number} [page] Page number to be returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionApi
     */
    public getFilesToDelete(projectUid: string, sessionUid: string, limit?: number, page?: number, options?: any) {
        return ActionApiFp(this.configuration).getFilesToDelete(projectUid, sessionUid, limit, page, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get delete actions declared for last session
     * @param {string} projectUid UUID of project
     * @param {number} [limit] Maximum number of the items to be returned
     * @param {number} [page] Page number to be returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionApi
     */
    public getFilesToDeleteWithinLastSession(projectUid: string, limit?: number, page?: number, options?: any) {
        return ActionApiFp(this.configuration).getFilesToDeleteWithinLastSession(projectUid, limit, page, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get update actions declared for a session
     * @param {string} projectUid UUID of project
     * @param {string} sessionUid UUID of upload session
     * @param {number} [limit] Maximum number of the items to be returned
     * @param {number} [page] Page number to be returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionApi
     */
    public getFilesToUpdate(projectUid: string, sessionUid: string, limit?: number, page?: number, options?: any) {
        return ActionApiFp(this.configuration).getFilesToUpdate(projectUid, sessionUid, limit, page, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get update actions declared for last session
     * @param {string} projectUid UUID of project
     * @param {number} [limit] Maximum number of the items to be returned
     * @param {number} [page] Page number to be returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionApi
     */
    public getFilesToUpdateWithinLastSession(projectUid: string, limit?: number, page?: number, options?: any) {
        return ActionApiFp(this.configuration).getFilesToUpdateWithinLastSession(projectUid, limit, page, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * DownloadApi - axios parameter creator
 * @export
 */
export const DownloadApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary create download credentials
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDownloadCredentials: async (projectUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling createDownloadCredentials.');
            }
            const localVarPath = `/projects/{projectUid}/files/download/credentials`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DownloadApi - functional programming interface
 * @export
 */
export const DownloadApiFp = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary create download credentials
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDownloadCredentials(projectUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<S3>> {
            const localVarAxiosArgs = await DownloadApiAxiosParamCreator(configuration).createDownloadCredentials(projectUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DownloadApi - object-oriented interface
 * @export
 * @class DownloadApi
 * @extends {BaseAPI}
 */
export class DownloadApi extends BaseAPI {
    /**
     *
     * @summary create download credentials
     * @param {string} projectUid UUID of project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DownloadApi
     */
    public createDownloadCredentials(projectUid: string, options?: any) {
        return DownloadApiFp(this.configuration).createDownloadCredentials(projectUid, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * MetashapeFilesApi - axios parameter creator
 * @export
 */
export const MetashapeFilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @param {string} projectUid UUID of project
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {string} [prefix]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFiles: async (projectUid: string, limit?: number, page?: number, prefix?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling getFiles.');
            }
            const localVarPath = `/projects/{projectUid}/files`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["read"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (prefix !== undefined) {
                localVarQueryParameter['prefix'] = prefix;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetashapeFilesApi - functional programming interface
 * @export
 */
export const MetashapeFilesApiFp = function (configuration?: Configuration) {
    return {
        /**
         *
         * @param {string} projectUid UUID of project
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {string} [prefix]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFiles(projectUid: string, limit?: number, page?: number, prefix?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FilesPage>> {
            const localVarAxiosArgs = await MetashapeFilesApiAxiosParamCreator(configuration).getFiles(projectUid, limit, page, prefix, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MetashapeFilesApi - object-oriented interface
 * @export
 * @class MetashapeFilesApi
 * @extends {BaseAPI}
 */
export class MetashapeFilesApi extends BaseAPI {
    /**
     *
     * @param {string} projectUid UUID of project
     * @param {number} [limit] Maximum number of the items to be returned
     * @param {number} [page] Page number to be returned
     * @param {string} [prefix]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetashapeFilesApi
     */
    public getFiles(projectUid: string, limit?: number, page?: number, prefix?: string, options?: any) {
        return MetashapeFilesApiFp(this.configuration).getFiles(projectUid, limit, page, prefix, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SessionApi - axios parameter creator
 * @export
 */
export const SessionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Abort last session
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        abortLastSession: async (projectUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling abortLastSession.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/last/abort`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Abort session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        abortSession: async (projectUid: string, sessionUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling abortSession.');
            }
            // verify required parameter 'sessionUid' is not null or undefined
            if (sessionUid === null || sessionUid === undefined) {
                throw new RequiredError('sessionUid', 'Required parameter sessionUid was null or undefined when calling abortSession.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/{sessionUid}/abort`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)))
                .replace(`{${"sessionUid"}}`, encodeURIComponent(String(sessionUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Renew session credentials
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCredentials: async (projectUid: string, sessionUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling createCredentials.');
            }
            // verify required parameter 'sessionUid' is not null or undefined
            if (sessionUid === null || sessionUid === undefined) {
                throw new RequiredError('sessionUid', 'Required parameter sessionUid was null or undefined when calling createCredentials.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/{sessionUid}/renew`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)))
                .replace(`{${"sessionUid"}}`, encodeURIComponent(String(sessionUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Renew last session credentials
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLastSessionCredentials: async (projectUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling createLastSessionCredentials.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/last/renew`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Create new session
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSession: async (projectUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling createSession.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get info about last session
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLastSessionInfo: async (projectUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling getLastSessionInfo.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/last`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["read"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get info about session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSessionInfo: async (projectUid: string, sessionUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling getSessionInfo.');
            }
            // verify required parameter 'sessionUid' is not null or undefined
            if (sessionUid === null || sessionUid === undefined) {
                throw new RequiredError('sessionUid', 'Required parameter sessionUid was null or undefined when calling getSessionInfo.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/{sessionUid}`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)))
                .replace(`{${"sessionUid"}}`, encodeURIComponent(String(sessionUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["read"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Start last created session
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startLastCreatedSession: async (projectUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling startLastCreatedSession.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/last/start`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Start session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startSession: async (projectUid: string, sessionUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling startSession.');
            }
            // verify required parameter 'sessionUid' is not null or undefined
            if (sessionUid === null || sessionUid === undefined) {
                throw new RequiredError('sessionUid', 'Required parameter sessionUid was null or undefined when calling startSession.');
            }
            const localVarPath = `/projects/{projectUid}/files/uploads/{sessionUid}/start`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)))
                .replace(`{${"sessionUid"}}`, encodeURIComponent(String(sessionUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["write"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SessionApi - functional programming interface
 * @export
 */
export const SessionApiFp = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Abort last session
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async abortLastSession(projectUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SessionApiAxiosParamCreator(configuration).abortLastSession(projectUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Abort session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async abortSession(projectUid: string, sessionUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SessionApiAxiosParamCreator(configuration).abortSession(projectUid, sessionUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Renew session credentials
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCredentials(projectUid: string, sessionUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionCredentialsInfo>> {
            const localVarAxiosArgs = await SessionApiAxiosParamCreator(configuration).createCredentials(projectUid, sessionUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Renew last session credentials
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLastSessionCredentials(projectUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionCredentialsInfo>> {
            const localVarAxiosArgs = await SessionApiAxiosParamCreator(configuration).createLastSessionCredentials(projectUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Create new session
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSession(projectUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionUidInfo>> {
            const localVarAxiosArgs = await SessionApiAxiosParamCreator(configuration).createSession(projectUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Get info about last session
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLastSessionInfo(projectUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionInfo>> {
            const localVarAxiosArgs = await SessionApiAxiosParamCreator(configuration).getLastSessionInfo(projectUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Get info about session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSessionInfo(projectUid: string, sessionUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionInfo>> {
            const localVarAxiosArgs = await SessionApiAxiosParamCreator(configuration).getSessionInfo(projectUid, sessionUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Start last created session
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startLastCreatedSession(projectUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionCredentialsInfo>> {
            const localVarAxiosArgs = await SessionApiAxiosParamCreator(configuration).startLastCreatedSession(projectUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *
         * @summary Start session
         * @param {string} projectUid UUID of project
         * @param {string} sessionUid UUID of upload session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startSession(projectUid: string, sessionUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionCredentialsInfo>> {
            const localVarAxiosArgs = await SessionApiAxiosParamCreator(configuration).startSession(projectUid, sessionUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SessionApi - object-oriented interface
 * @export
 * @class SessionApi
 * @extends {BaseAPI}
 */
export class SessionApi extends BaseAPI {
    /**
     *
     * @summary Abort last session
     * @param {string} projectUid UUID of project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApi
     */
    public abortLastSession(projectUid: string, options?: any) {
        return SessionApiFp(this.configuration).abortLastSession(projectUid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Abort session
     * @param {string} projectUid UUID of project
     * @param {string} sessionUid UUID of upload session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApi
     */
    public abortSession(projectUid: string, sessionUid: string, options?: any) {
        return SessionApiFp(this.configuration).abortSession(projectUid, sessionUid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Renew session credentials
     * @param {string} projectUid UUID of project
     * @param {string} sessionUid UUID of upload session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApi
     */
    public createCredentials(projectUid: string, sessionUid: string, options?: any) {
        return SessionApiFp(this.configuration).createCredentials(projectUid, sessionUid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Renew last session credentials
     * @param {string} projectUid UUID of project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApi
     */
    public createLastSessionCredentials(projectUid: string, options?: any) {
        return SessionApiFp(this.configuration).createLastSessionCredentials(projectUid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Create new session
     * @param {string} projectUid UUID of project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApi
     */
    public createSession(projectUid: string, options?: any) {
        return SessionApiFp(this.configuration).createSession(projectUid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get info about last session
     * @param {string} projectUid UUID of project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApi
     */
    public getLastSessionInfo(projectUid: string, options?: any) {
        return SessionApiFp(this.configuration).getLastSessionInfo(projectUid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get info about session
     * @param {string} projectUid UUID of project
     * @param {string} sessionUid UUID of upload session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApi
     */
    public getSessionInfo(projectUid: string, sessionUid: string, options?: any) {
        return SessionApiFp(this.configuration).getSessionInfo(projectUid, sessionUid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Start last created session
     * @param {string} projectUid UUID of project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApi
     */
    public startLastCreatedSession(projectUid: string, options?: any) {
        return SessionApiFp(this.configuration).startLastCreatedSession(projectUid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Start session
     * @param {string} projectUid UUID of project
     * @param {string} sessionUid UUID of upload session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApi
     */
    public startSession(projectUid: string, sessionUid: string, options?: any) {
        return SessionApiFp(this.configuration).startSession(projectUid, sessionUid, options).then((request) => request(this.axios, this.basePath));
    }
}
