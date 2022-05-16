import {BasePage} from './common';

/**
 *
 * @export
 * @interface CreatedProject
 */
export interface CreatedProject {
    /**
     *
     * @type {ProjectInfo}
     * @memberof CreatedProject
     */
    project: ProjectInfo;
}

/**
 *
 * @export
 * @interface NewProject
 */
export interface NewProject {
    /**
     * name of the project to be created
     * @type {string}
     * @memberof NewProject
     */
    name: string;
    /**
     * If true - project is published after processing
     * @type {boolean}
     * @memberof NewProject
     */
    need_publish?: boolean;
}

/**
 *
 * @export
 * @interface Project
 */
export interface Project {
    /**
     *
     * @type {ProjectInfo}
     * @memberof Project
     */
    project: ProjectInfo;
}

/**
 *
 * @export
 * @interface ProjectInfo
 */
export interface ProjectInfo {
    /**
     * Project ID
     * @type {string}
     * @memberof ProjectInfo
     */
    id: string;
    /**
     * Project name
     * @type {string}
     * @memberof ProjectInfo
     */
    name: string;
    /**
     * Date of project creation
     * @type {string}
     * @memberof ProjectInfo
     */
    creation_date: string;
    /**
     * Date of project modification
     * @type {string}
     * @memberof ProjectInfo
     */
    modified_date: string;
    /**
     * If true - project is published after processing
     * @type {boolean}
     * @memberof ProjectInfo
     */
    publish: boolean;
    /**
     *
     * @type {ProjectInfoParts}
     * @memberof ProjectInfo
     */
    parts?: ProjectInfoParts;
}

/**
 *
 * @export
 * @interface ProjectInfoPart
 */
export interface ProjectInfoPart {
    /**
     * Size of project part in bytes
     * @type {number}
     * @memberof ProjectInfoPart
     */
    size: number;
}

/**
 * Size of the project parts in bytes
 * @export
 * @interface ProjectInfoParts
 */
export interface ProjectInfoParts {
    /**
     *
     * @type {ProjectInfoPart}
     * @memberof ProjectInfoParts
     */
    photos: ProjectInfoPart;
    /**
     *
     * @type {ProjectInfoPart}
     * @memberof ProjectInfoParts
     */
    tilesets: ProjectInfoPart;
    /**
     *
     * @type {ProjectInfoPart}
     * @memberof ProjectInfoParts
     */
    metashapeFiles: ProjectInfoPart;
    /**
     *
     * @type {ProjectInfoPart}
     * @memberof ProjectInfoParts
     */
    documents: ProjectInfoPart;
    /**
     *
     * @type {ProjectInfoPart}
     * @memberof ProjectInfoParts
     */
    datasets: ProjectInfoPart;
    /**
     *
     * @type {ProjectInfoPart}
     * @memberof ProjectInfoParts
     */
    vectorLayers: ProjectInfoPart;
}

/**
 *
 * @export
 * @interface ProjectsPage
 */
export interface ProjectsPage extends BasePage {
    /**
     *
     * @type {Array<ProjectInfo>}
     * @memberof ProjectsPage
     */
    projects: Array<ProjectInfo>;
}

/**
 *
 * @export
 * @interface SharedProjectsPage
 */
export interface SharedProjectsPage extends BasePage {
    /**
     *
     * @type {Array<SharedProjectInfo>}
     * @memberof SharedProjectsPage
     */
    projects: Array<SharedProjectInfo>;
}

/**
 *
 * @export
 * @interface SharedProjectInfo
 */
export interface SharedProjectInfo {
    /**
     * Project ID
     * @type {string}
     * @memberof SharedProjectInfo
     */
    uid: string;
    /**
     * Project name
     * @type {string}
     * @memberof SharedProjectInfo
     */
    name: string;
    /**
     * Owner UUID
     * @type {string}
     * @memberof SharedProjectInfo
     */
    ownerUid: string;
    /**
     * Project access key
     * @type {string}
     * @memberof SharedProjectInfo
     */
    accessKey: string;
}
