/**
 *
 * @export
 * @interface Credentials
 */
import {BasePageV2} from "./common";

export interface Credentials {
    /**
     *
     * @type {string}
     * @memberof Credentials
     */
    sessionToken: string;
    /**
     *
     * @type {string}
     * @memberof Credentials
     */
    secretAccessKey: string;
    /**
     *
     * @type {string}
     * @memberof Credentials
     */
    accessKeyID: string;
    /**
     *
     * @type {string}
     * @memberof Credentials
     */
    expiration: string;
}

/**
 * Info about file to delete
 * @export
 * @interface DeleteActionInfo
 */
export interface DeleteActionInfo {
    /**
     * File path related to project
     * @type {string}
     * @memberof DeleteActionInfo
     */
    file: string;
}

/**
 *
 * @export
 * @interface DeleteActionList
 */
export interface DeleteActionList {
    /**
     *
     * @type {Array<DeleteActionInfo>}
     * @memberof DeleteActionList
     */
    delete: Array<DeleteActionInfo>;
}

/**
 *
 * @export
 * @interface DeleteActionPage
 */
export interface DeleteActionPage extends BasePageV2 {
    /**
     *
     * @type {Array<DeleteActionInfo>}
     * @memberof DeleteActionPage
     */
    delete: Array<DeleteActionInfo>;
}

/**
 *
 * @export
 * @interface FileInfo
 */
export interface FileInfo {
    /**
     *
     * @type {string}
     * @memberof FileInfo
     */
    file: string;
    /**
     *
     * @type {string}
     * @memberof FileInfo
     */
    s3Path: string;
    /**
     *
     * @type {string}
     * @memberof FileInfo
     */
    s3PrefixInProject: string;
    /**
     *
     * @type {string}
     * @memberof FileInfo
     */
    md5?: string;
    /**
     *
     * @type {string}
     * @memberof FileInfo
     */
    lastModified: string;
    /**
     *
     * @type {number}
     * @memberof FileInfo
     */
    size: number;
}

/**
 *
 * @export
 * @interface FilesPage
 */
export interface FilesPage extends BasePageV2 {
    /**
     *
     * @type {Array<FileInfo>}
     * @memberof FilesPage
     */
    files: Array<FileInfo>;
}

/**
 * General info about s3 storage and credentials
 * @export
 * @interface S3
 */
export interface S3 {
    /**
     *
     * @type {string}
     * @memberof S3
     */
    endpointUrl: string;
    /**
     *
     * @type {string}
     * @memberof S3
     */
    region: string;
    /**
     *
     * @type {string}
     * @memberof S3
     */
    bucket: string;
    /**
     *
     * @type {string}
     * @memberof S3
     */
    prefix: string;
    /**
     *
     * @type {Credentials}
     * @memberof S3
     */
    credentials: Credentials;
}

/**
 *
 * @export
 * @interface SessionCredentialsInfo
 */
export interface SessionCredentialsInfo {
    /**
     * Uid of session
     * @type {string}
     * @memberof SessionCredentialsInfo
     */
    sessionUid: string;
    /**
     *
     * @type {string}
     * @memberof SessionCredentialsInfo
     */
    expiration: string;
    /**
     *
     * @type {S3}
     * @memberof SessionCredentialsInfo
     */
    s3?: S3;
}

/**
 *
 * @export
 * @interface SessionInfo
 */
export interface SessionInfo {
    /**
     * Uid of session
     * @type {string}
     * @memberof SessionInfo
     */
    sessionUid: string;
    /**
     *
     * @type {string}
     * @memberof SessionInfo
     */
    expiration: string;
    /**
     * Status of session
     * @type {string}
     * @memberof SessionInfo
     */
    status: SessionInfoStatusEnum;
    /**
     * Session progress, changing only in INPROGRESS state
     * @type {number}
     * @memberof SessionInfo
     */
    progress: number;
}

/**
 * @export
 * @enum {string}
 */
export enum SessionInfoStatusEnum {
    Pending = 'PENDING',
    Inprogress = 'INPROGRESS',
    Completed = 'COMPLETED',
    Aborted = 'ABORTED',
    Blocked = 'BLOCKED',
    Expired = 'EXPIRED'
}


/**
 *
 * @export
 * @interface SessionUidInfo
 */
export interface SessionUidInfo {
    /**
     * Uid of session
     * @type {string}
     * @memberof SessionUidInfo
     */
    sessionUid: string;
}

/**
 * Info about updated file
 * @export
 * @interface UpdateActionInfo
 */
export interface UpdateActionInfo {
    /**
     * File path related to project
     * @type {string}
     * @memberof UpdateActionInfo
     */
    file: string;
    /**
     * path to upload on s3
     * @type {string}
     * @memberof UpdateActionInfo
     */
    s3Path: string;
    /**
     *
     * @type {string}
     * @memberof UpdateActionInfo
     */
    md5: string;
}

/**
 *
 * @export
 * @interface UpdateActionList
 */
export interface UpdateActionList {
    /**
     *
     * @type {Array<UpdateActionInfo>}
     * @memberof UpdateActionList
     */
    update: Array<UpdateActionInfo>;
}

/**
 *
 * @export
 * @interface UpdateActionPage
 */
export interface UpdateActionPage extends BasePageV2{
    /**
     *
     * @type {Array<UpdateActionWithStatusInfo>}
     * @memberof UpdateActionPage
     */
    update: Array<UpdateActionWithStatusInfo>;
}

/**
 *
 * @export
 * @interface UpdateActionWithStatusInfo
 */
export interface UpdateActionWithStatusInfo {
    /**
     * File path related to project
     * @type {string}
     * @memberof UpdateActionWithStatusInfo
     */
    file: string;
    /**
     * path to upload on s3
     * @type {string}
     * @memberof UpdateActionWithStatusInfo
     */
    s3Path: string;
    /**
     *
     * @type {string}
     * @memberof UpdateActionWithStatusInfo
     */
    md5: string;
    /**
     * Action status
     * @type {string}
     * @memberof UpdateActionWithStatusInfo
     */
    status: UpdateActionWithStatusInfoStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum UpdateActionWithStatusInfoStatusEnum {
    Pending = 'PENDING',
    Completed = 'COMPLETED'
}
