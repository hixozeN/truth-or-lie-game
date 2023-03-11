export default class TabList {
  constructor({popupSelector, tabsSelector, formsSelector}) {
    this._popup = document.querySelector(popupSelector);
    this._tabs = this._popup.querySelector(tabsSelector);
    this._forms = this._popup.querySelector(formsSelector);
  }

  openTab(tabId) {
    this._forms.querySelector('.popup__container-form_active').classList.remove('popup__container-form_active');
    this._forms.querySelector(`#form-${tabId}`).classList.add('popup__container-form_active');
    this._tabs.querySelector('.navigation__link_current').classList.remove('navigation__link_current');
    this._tabs.querySelector(`#${tabId}`).classList.add('navigation__link_current');
  }

  setEventListeners() {
    this._tabs.addEventListener('click', evt => {
      const tabId = evt.target.closest('.popup__tabs-link').id;
      this.openTab(tabId);
    });
  }
}
