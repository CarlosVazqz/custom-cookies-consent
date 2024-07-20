import { globalObj } from '../global';
import {
    createNode,
    addClass,
    addClassPm,
    setAttribute,
    removeClass,
    addEvent,
    appendChild,
    getKeys,
    hasClass,
    elContains,
    getModalFocusableData,
    isString,
    isObject,
    fireEvent,
    getSvgIcon,
    handleFocusTrap,
    debug,
} from '../../utils/general';

import { guiManager } from '../../utils/gui-manager';
import {
    PREFERENCES_MODAL_NAME,
    SCRIPT_TAG_SELECTOR,
    DIV_TAG,
    ARIA_HIDDEN,
    BUTTON_TAG,
    BTN_GROUP_CLASS,
    CLICK_EVENT,
    DATA_ROLE,
} from '../../utils/constants';

/**
 * @callback CreateMainContainer
 */

/**
 * Generates preferences modal and appends it to "cc-main" el.
 * @param {import("../global").Api} api
 * @param {CreateMainContainer} createMainContainer
 */
export const createAdditionalInfoModal = (api, createMainContainer) => {
    const state = globalObj._state;
    const dom = globalObj._dom;

    /**
   * @type {import("../global").AdditionalInfoModalOptions}
   */
    const modalData =
    state._currentTranslation && state._currentTranslation.additionalInfoModal;

    if (!modalData) return;

    const titleData = modalData.title,
        descriptionData = modalData.description,
        closeBtnData = modalData.closeBtn;

    console.info('state', state);
    console.info('dom', dom);
    console.info('modalData', modalData);
    console.info('titleData', titleData);
    console.info('descriptionData', descriptionData);
    console.info('closeBtnData', closeBtnData);
};
