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
import QRCode from 'qrcode';

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
        const descriptionDiv = createNode(DIV_TAG);
        addClass(descriptionDiv, 'aim-description');
        descriptionDiv.innerHTML = descriptionData;
        appendChild(dom._aimBody, descriptionDiv);
    }

    // Add information from de API and the QR code
    const getAdditionalInfoData = async () => {
        const response = await getAdditionalInfo();
        // const data = JSON.stringify(response);
        const fulldata = JSON.parse(JSON.stringify(response));
        const data = fulldata.projectData;
        const projectInfo = createNode(DIV_TAG);
        addClass(projectInfo, 'project-info');

        // Project Name
        const projectNameDiv = createNode(DIV_TAG);
        addClass(projectNameDiv, 'project-name');

        const nameSpan = createNode('span');
        nameSpan.innerHTML = 'Project Name: ';
        addClass(nameSpan, 'project-name__label');

        const nameValue = createNode('span');
        addClass(nameValue, 'project-name__value');
        nameValue.innerHTML = data.company;

        appendChild(projectNameDiv, nameSpan);
        appendChild(projectNameDiv, nameValue);
        appendChild(projectInfo, projectNameDiv);

        // Project Manager
        const projectManagerDiv = createNode(DIV_TAG);
        addClass(projectManagerDiv, 'project-manager');

        const managerSpan = createNode('span');
        managerSpan.innerHTML = 'Project Manager: ';
        addClass(managerSpan, 'project-manager__label');

        const managerValue = createNode('span');
        addClass(managerValue, 'project-manager__value');
        managerValue.innerHTML = data.project_manager;

        appendChild(projectManagerDiv, managerSpan);
        appendChild(projectManagerDiv, managerValue);
        appendChild(projectInfo, projectManagerDiv);

        // Project Developer
        const projectDeveloperDiv = createNode(DIV_TAG);
        addClass(projectDeveloperDiv, 'project-developer');

        const developerSpan = createNode('span');
        developerSpan.innerHTML = 'Project Developer: ';
        addClass(developerSpan, 'project-developer__label');

        const developerValue = createNode('span');
        addClass(developerValue, 'project-developer__value');
        developerValue.innerHTML = data.developer;

        appendChild(projectDeveloperDiv, developerSpan);
        appendChild(projectDeveloperDiv, developerValue);
        appendChild(projectInfo, projectDeveloperDiv);

        // show the users
        const users = fulldata.usersData;
        const usersDiv = createNode(DIV_TAG);
        addClass(usersDiv, 'users');

        const usersTitle = createNode('h3');
        addClass(usersTitle, 'users__title');
        usersTitle.innerHTML = 'Users';

        appendChild(usersDiv, usersTitle);

        const usersList = createNode('ul');
        addClass(usersList, 'users__list');

        users.forEach((user) => {
            const userItem = createNode('li');
            addClass(userItem, 'users__item');

            const userSpan = createNode('span');
            addClass(userSpan, 'users__item-name');
            userSpan.innerHTML = user.name;

            appendChild(userItem, userSpan);
            appendChild(usersList, userItem);
        });

        appendChild(usersDiv, usersList);
        appendChild(projectInfo, usersDiv);

        // Div to show the QR code
        const qrDiv = createNode(DIV_TAG);
        addClass(qrDiv, 'qr-code');

        const qrDescription = createNode('p');
        addClass(qrDescription, 'qr-code__description');
        qrDescription.innerHTML =
      'Scan the QR code to get more information about the project';

        const qrImageContainer = createNode(DIV_TAG);
        addClass(qrImageContainer, 'qr-code__img-container');

        generateQR(JSON.stringify(fulldata)).then((url) => {
            const qrImage = createNode('img');
            setAttribute(qrImage, 'src', url);
            setAttribute(qrImage, 'alt', 'QR code');
            addClass(qrImage, 'qr-code__img');
            appendChild(qrImageContainer, qrImage);
        });

        // Add tooltip to the QR code
        addEvent(qrDiv, 'mouseover', () => {
            const tooltip = createNode('span');
            addClass(tooltip, 'tooltip');
            tooltip.innerText = JSON.stringify(fulldata);
            appendChild(qrDiv, tooltip);
        });

        addEvent(qrDiv, 'mouseout', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });

        appendChild(qrDiv, qrDescription);
        appendChild(qrDiv, qrImageContainer);

        appendChild(dom._aimBody, projectInfo);
        appendChild(dom._aimBody, qrDiv);
    };

    getAdditionalInfoData();

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
    const baseUrl =
    'https://669fa568b132e2c136fe9aba.mockapi.io/api/project-info';
    const urlProjectInfo = baseUrl + '/project-info';
    const urlUsers = baseUrl + '/users';

    const projectResponse = await fetch(urlProjectInfo);
    const projectData = await projectResponse.json();

    const usersResponse = await fetch(urlUsers);
    const usersData = await usersResponse.json();

    return {
        projectData: projectData[1],
        usersData,
    };
}

const generateQR = async (text) => {
    try {
        return await QRCode.toDataURL(text);
    } catch (err) {
        console.error(err);
    }
};
