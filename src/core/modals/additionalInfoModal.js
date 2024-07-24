import { globalObj } from '../global';
import {
    createNode,
    addClass,
    addClassAim,
    setAttribute,
    addEvent,
    appendChild,
    getSvgIcon,
    handleFocusTrap,
} from '../../utils/general';

import { guiManager } from '../../utils/gui-manager';
import {
    DIV_TAG,
    ARIA_HIDDEN,
    BUTTON_TAG,
    BTN_GROUP_CLASS,
    CLICK_EVENT,
} from '../../utils/constants';

/**
 * @callback CreateMainContainer
 */

/**
 * Generates additional info modal and appends it to "cc-main" el.
 * @param {import("../global").Api} api
 * @param {CreateMainContainer} createMainContainer
 */
export const createAdditionalInfoModal = async (api, createMainContainer) => {
    const state = globalObj._state;
    const dom = globalObj._dom;
    const { hideAdditionalInfo } = api;

    /**
   * @type {import("../global").AdditionalInfoModalOptions}
   */
    const modalData =
    state._currentTranslation && state._currentTranslation.additionalInfoModal;

    if (!modalData) return;

    const titleData = modalData.title,
        descriptionData = modalData.description,
        closeBtnData = modalData.closeBtn;

    if (!dom._aimContainer) {
    // Create general modal container
        dom._aimContainer = createNode(DIV_TAG);
        addClass(dom._aimContainer, 'aim-wrapper');

        // Create overlay
        const aimOverlay = createNode(DIV_TAG);
        addClass(aimOverlay, 'aim-overlay');
        appendChild(dom._aimContainer, aimOverlay);

        // hide modal on overlay click
        addEvent(aimOverlay, CLICK_EVENT, hideAdditionalInfo);

        // Create modal
        dom._aim = createNode(DIV_TAG);
        addClass(dom._aim, 'aim');
        setAttribute(dom._aim, 'role', 'dialog');
        setAttribute(dom._aim, ARIA_HIDDEN, true);
        setAttribute(dom._aim, 'aria-modal', true);
        setAttribute(dom._aim, 'aria-labelledby', 'aim__title');

        // Hide modal on escape key press
        addEvent(
            dom._htmlDom,
            'keydown',
            (event) => {
                if (event.keyCode === 27) hideAdditionalInfo();
            },
            true
        );

        // Create modal header
        dom._aimHeader = createNode(DIV_TAG);
        addClassAim(dom._aimHeader, 'header');

        // Create modal title
        dom._aimTitle = createNode('h2');
        addClassAim(dom._aimTitle, 'title');
        dom._aimTitle.id = 'aim__title';

        // Create close button in modal header
        dom._aimCloseBtn = createNode(BUTTON_TAG);
        addClassAim(dom._aimCloseBtn, 'close-btn');
        setAttribute(dom._aimCloseBtn, 'aria-label', closeBtnData.ariaLabel || '');
        addEvent(dom._aimCloseBtn, CLICK_EVENT, hideAdditionalInfo);

        // Create close button icon
        dom._aimFocusSpan = createNode('span');
        dom._aimFocusSpan.innerHTML = getSvgIcon();
        appendChild(dom._aimCloseBtn, dom._aimFocusSpan);

        // Create modal content
        dom._aimBody = createNode(DIV_TAG);
        addClassAim(dom._aimBody, 'body');

        dom._aimFooter = createNode(DIV_TAG);
        addClassAim(dom._aimFooter, 'footer');

        var _aimBtnGroup = createNode(DIV_TAG);
        addClassAim(_aimBtnGroup, BTN_GROUP_CLASS);

        appendChild(dom._aimFooter, _aimBtnGroup);
        appendChild(dom._aimHeader, dom._aimTitle);
        appendChild(dom._aimHeader, dom._aimCloseBtn);

        dom._aimDivTabindex = createNode(DIV_TAG);
        setAttribute(dom._aimDivTabindex, 'tabindex', -1);
        appendChild(dom._aim, dom._aimDivTabindex);

        appendChild(dom._aim, dom._aimHeader);
        appendChild(dom._aim, dom._aimBody);

        closeBtnData && appendChild(dom._aim, dom._aimFooter);

        appendChild(dom._aimContainer, dom._aim);
    }

    if (titleData) {
        dom._aimTitle.innerHTML = titleData;
        closeBtnData && setAttribute(dom._aimCloseBtn, 'aria-label', closeBtnData);
    }

    if (descriptionData) {
        dom._aimBody.innerHTML = descriptionData;
    }

    // TODO: Add information from de API and the QR code
    const projectData = await getAdditionalInfo();
    if (projectData) {
        const projectInfo = createNode(DIV_TAG);
        projectInfo.innerHTML = projectData.projectInfo;
        appendChild(dom._aimBody, projectInfo);
    }

    if (closeBtnData) {
        if (!dom._aimFooterCloseBtn) {
            dom._aimFooterCloseBtn = createNode(BUTTON_TAG);
            addClassAim(dom._aimFooterCloseBtn, 'btn');
            addClassAim(dom._aimFooterCloseBtn, 'btn--secondary');
            appendChild(_aimBtnGroup, dom._aimFooterCloseBtn);
        }

        dom._aimFooterCloseBtn.innerHTML = closeBtnData;
        addEvent(dom._aimFooterCloseBtn, CLICK_EVENT, hideAdditionalInfo);
    }

    guiManager(2);

    state._additionalInfoModalExists = false;
    if (!state._additionalInfoModalExists) {
        state._additionalInfoModalExists = true;

        createMainContainer();
        appendChild(dom._ccMain, dom._aimContainer);
        handleFocusTrap(dom._aim);

        /**
     * Enable transition
     */
        setTimeout(() => addClass(dom._aimContainer, 'cc--anim'), 100);
    }
};

async function getAdditionalInfo() {
    const url =
    'https://669fa568b132e2c136fe9aba.mockapi.io/api/project-info/project-info';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
