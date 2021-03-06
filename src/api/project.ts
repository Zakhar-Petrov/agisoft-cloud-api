/* tslint:disable */
/* eslint-disable */

import globalAxios, {AxiosInstance, AxiosPromise} from 'axios';
import {CreatedProject, NewProject, Project, ProjectsPage, SharedProjectsPage} from "../model/project";
import {BASE_PATH, BaseAPI, RequestArgs, RequiredError} from './base';
import {Configuration} from './configuration';

export type ProjectsSort =
    '+creation_date'
    | '+name'
    | '+modified_date'
    | '+size'
    | '-creation_date'
    | '-name'
    | '-modified_date'
    | '-size'

/**
 * ProjectApi - axios parameter creator
 * @export
 */
export const ProjectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Request to create a project. It may take a few seconds before the project become available
         * @summary Create a project
         * @param {NewProject} newProject New user object that needs to be added
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProject: async (newProject: NewProject, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'newProject' is not null or undefined
            if (newProject === null || newProject === undefined) {
                throw new RequiredError('newProject', 'Required parameter newProject was null or undefined when calling createProject.');
            }
            const localVarPath = `/projects`;
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
            const nonString = typeof newProject !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data = needsSerialization
                ? JSON.stringify(newProject !== undefined ? newProject : {})
                : (newProject || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Request to delete project with ID = {projectId}.
         * @summary Delete a project
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProjectById: async (projectUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling deleteProjectById.');
            }
            const localVarPath = `/projects/{projectUid}`
                .replace(`{${"projectUid"}}`, encodeURIComponent(String(projectUid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'DELETE', ...baseOptions, ...options};
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
         * Request to get information about the project with ID = {projectId}.
         * @summary Get information about a project
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectById: async (projectUid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectUid' is not null or undefined
            if (projectUid === null || projectUid === undefined) {
                throw new RequiredError('projectUid', 'Required parameter projectUid was null or undefined when calling getProjectById.');
            }
            const localVarPath = `/projects/{projectUid}`
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
         * Request to get the list of the projects starting from specified page, number set as the specified limit parameter.
         * @summary Get the list of the projects
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {'+creation_date' | '+name' | '+modified_date' | '+size' | '-creation_date' | '-name' | '-modified_date' | '-size'} [sort] Order of projects: \&quot;+\&quot; - ascending, \&quot;-\&quot; - descending
         * @param {string} [pattern] String to filter projects by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjects: async (limit?: number, page?: number, sort?: ProjectsSort, pattern?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/projects`;
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

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (pattern !== undefined) {
                localVarQueryParameter['pattern'] = pattern;
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
         * Request to get the list of shared "with me" projects starting from specified page, number set as the specified limit parameter.
         * @summary Get the list of the projects
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {'+name' | '-name'} [sort] Order of projects: \&quot;+\&quot; - ascending, \&quot;-\&quot; - descending
         * @param {string} [pattern] String to filter projects by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSharedWithMeProjects: async (limit?: number, page?: number, sort?: ProjectsSort, pattern?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/projects/shared-with-me`;
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

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (pattern !== undefined) {
                localVarQueryParameter['pattern'] = pattern;
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
 * ProjectApi - functional programming interface
 * @export
 */
export const ProjectApiFp = function (configuration?: Configuration) {
    return {
        /**
         * Request to create a project. It may take a few seconds before the project become available
         * @summary Create a project
         * @param {NewProject} newProject New user object that needs to be added
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProject(newProject: NewProject, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreatedProject>> {
            const localVarAxiosArgs = await ProjectApiAxiosParamCreator(configuration).createProject(newProject, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Request to delete project with ID = {projectId}.
         * @summary Delete a project
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProjectById(projectUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ProjectApiAxiosParamCreator(configuration).deleteProjectById(projectUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Request to get information about the project with ID = {projectId}.
         * @summary Get information about a project
         * @param {string} projectUid UUID of project
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectById(projectUid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await ProjectApiAxiosParamCreator(configuration).getProjectById(projectUid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Request to get the list of the projects starting from specified page, number set as the specified limit parameter.
         * @summary Get the list of the projects
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {'+creation_date' | '+name' | '+modified_date' | '+size' | '-creation_date' | '-name' | '-modified_date' | '-size'} [sort] Order of projects: \&quot;+\&quot; - ascending, \&quot;-\&quot; - descending
         * @param {string} [pattern] String to filter projects by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjects(limit?: number, page?: number, sort?: ProjectsSort, pattern?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectsPage>> {
            const localVarAxiosArgs = await ProjectApiAxiosParamCreator(configuration).getProjects(limit, page, sort, pattern, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {
                    ...localVarAxiosArgs.options,
                    url: (configuration?.basePath || basePath) + localVarAxiosArgs.url
                };
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Request to get the list of shared "with me" projects starting from specified page, number set as the specified limit parameter.
         * @summary Get the list of the projects
         * @param {number} [limit] Maximum number of the items to be returned
         * @param {number} [page] Page number to be returned
         * @param {'+name' | '-name'} [sort] Order of projects: \&quot;+\&quot; - ascending, \&quot;-\&quot; - descending
         * @param {string} [pattern] String to filter projects by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSharedWithMeProjects(limit?: number, page?: number, sort?: ProjectsSort, pattern?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SharedProjectsPage>> {
            const localVarAxiosArgs = await ProjectApiAxiosParamCreator(configuration).getSharedWithMeProjects(limit, page, sort, pattern, options);
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
 * ProjectApi - object-oriented interface
 * @export
 * @class ProjectApi
 * @extends {BaseAPI}
 */
export class ProjectApi extends BaseAPI {
    /**
     * Request to create a project. It may take a few seconds before the project become available
     * @summary Create a project
     * @param {NewProject} newProject New user object that needs to be added
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public createProject(newProject: NewProject, options?: any) {
        return ProjectApiFp(this.configuration).createProject(newProject, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Request to delete project with ID = {projectId}.
     * @summary Delete a project
     * @param {string} projectUid UUID of project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public deleteProjectById(projectUid: string, options?: any) {
        return ProjectApiFp(this.configuration).deleteProjectById(projectUid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Request to get information about the project with ID = {projectId}.
     * @summary Get information about a project
     * @param {string} projectUid UUID of project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public getProjectById(projectUid: string, options?: any) {
        return ProjectApiFp(this.configuration).getProjectById(projectUid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Request to get the list of the projects starting from specified page, number set as the specified limit parameter.
     * @summary Get the list of the projects
     * @param {number} [limit] Maximum number of the items to be returned
     * @param {number} [page] Page number to be returned
     * @param {'+creation_date' | '+name' | '+modified_date' | '+size' | '-creation_date' | '-name' | '-modified_date' | '-size'} [sort] Order of projects: \&quot;+\&quot; - ascending, \&quot;-\&quot; - descending
     * @param {string} [pattern] String to filter projects by name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public getProjects(limit?: number, page?: number, sort?: ProjectsSort, pattern?: string, options?: any) {
        return ProjectApiFp(this.configuration).getProjects(limit, page, sort, pattern, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Request to get the list of shared "with me" projects starting from specified page, number set as the specified limit parameter.
     * @summary Get the list of the projects
     * @param {number} [limit] Maximum number of the items to be returned
     * @param {number} [page] Page number to be returned
     * @param {'+name' | '-name'} [sort] Order of projects: \&quot;+\&quot; - ascending, \&quot;-\&quot; - descending
     * @param {string} [pattern] String to filter projects by name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public getSharedWithMeProjects(limit?: number, page?: number, sort?: ProjectsSort, pattern?: string, options?: any) {
        return ProjectApiFp(this.configuration).getSharedWithMeProjects(limit, page, sort, pattern, options).then((request) => request(this.axios, this.basePath));
    }
}
