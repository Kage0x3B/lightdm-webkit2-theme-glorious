class MainScreenButtons {
    constructor() {
        this._buttonMainSessions = document.querySelector('#button-main-screen-sessions');
        this._buttonMainSettings = document.querySelector('#button-main-screen-settings');
        this._buttonMainPowers = document.querySelector('#button-main-screen-powers');
        this._init();
    }

    _init() {
        this._buttonOnClickEvents();
    }

    _buttonOnClickEvents() {
        this._buttonMainSessions.addEventListener(
            'click',
            () => {
                window.sidebar.showSidebar();
                window.sidebarNavigate.settingsShowSessions();
            }
        );

        this._buttonMainSettings.addEventListener(
            'click',
            () => {
                window.sidebar.showSidebar();
                window.sidebarNavigate.settingsSelectionShow();
            }
        );

        this._buttonMainPowers.addEventListener(
            'click',
            () => {
                window.sidebar.showSidebar();
                window.sidebarNavigate.settingsShowPowers();
            }
        );
    }
}
