/**
 *
 * @export
 * @interface BasePage
 */
export interface BasePage {
    /**
     * Number of total pages
     * @type {number}
     * @memberof BasePage
     */
    total_pages: number;
    /**
     * Total amount of elements
     * @type {number}
     * @memberof BasePage
     */
    total_elements: number;
    /**
     * Number of the current page
     * @type {number}
     * @memberof BasePage
     */
    number: number;
    /**
     * Size of the page
     * @type {number}
     * @memberof BasePage
     */
    size: number;
    /**
     * Number of elements currently on this page
     * @type {number}
     * @memberof BasePage
     */
    number_of_elements: number;
}

/**
 *
 * @export
 * @interface BasePageV2
 */
export interface BasePageV2 {
    /**
     * Number of total pages
     * @type {number}
     * @memberof BasePageV2
     */
    totalPages: number;
    /**
     * Total amount of elements
     * @type {number}
     * @memberof BasePageV2
     */
    totalElements: number;
    /**
     * Number of the current page
     * @type {number}
     * @memberof BasePageV2
     */
    number: number;
    /**
     * Size of the page
     * @type {number}
     * @memberof BasePageV2
     */
    size: number;
    /**
     * Number of elements currently on this page
     * @type {number}
     * @memberof BasePageV2
     */
    numberOfElements: number;
}
