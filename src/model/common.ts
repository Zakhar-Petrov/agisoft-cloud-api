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
