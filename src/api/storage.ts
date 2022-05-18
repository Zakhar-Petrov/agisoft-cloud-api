/* tslint:disable */
/* eslint-disable */

import globalAxios, {AxiosInstance, AxiosPromise} from 'axios';
import {Storage} from '../model/storage';
import {BASE_PATH, BaseAPI, RequestArgs} from './base';
import {Configuration} from './configuration';

/**
 * StorageApi - axios parameter creator
 * @export
 */
export const StorageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns storage info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorage: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/storage`;
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
                    ? await configuration.accessToken('oauth2', ['read'])
                    : await configuration.accessToken;
                localVarHeaderParameter['Authorization'] = 'Bearer ' + localVarAccessTokenValue;
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
 * StorageApi - functional programming interface
 * @export
 */
export const StorageApiFp = function (configuration?: Configuration) {
    return {
        /**
         * Returns storage info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStorage(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Storage>> {
            const localVarAxiosArgs = await StorageApiAxiosParamCreator(configuration).getStorage(options);
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
 * StorageApi - object-oriented interface
 * @export
 * @class StorageApi
 * @extends {BaseAPI}
 */
export class StorageApi extends BaseAPI {
    /**
     * Returns storage info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public getStorage(options?: any) {
        return StorageApiFp(this.configuration).getStorage(options).then((request) => request(this.axios, this.basePath));
    }
}
