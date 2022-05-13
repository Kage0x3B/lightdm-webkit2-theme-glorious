let ran = false;

async function initGreeter() {
    if (ran) return;
    ran = true;

    if (greeter_config.greeter.debug_mode) {
        // Instantiate debug mode
        // Comment this line to let lightdm do its own things
        //debug = new Debug();
    }

    lightdm.authentication_complete?.connect(() => authentication_complete());

    lightdm.show_prompt?.connect((prompt, type) => {
        console.log("PROMPT!");
        console.log(prompt, type);
    });

    lightdm.show_message?.connect((msg, type) => {
        console.log("MESSAGE!");
        console.log(msg, type);
    });

    // Instantiate image profile
    window.userProfile = new UserProfile();

    // Instantiate greeter screen
    window.greeterScreen = new GreeterScreen();

    // Instantiate dark screen
    window.loginFade = new LoginFade();

    // Instantiate goodbye screen
    window.goodbye = new Goodbye();

    // Instantiate accounts settings
    window.accounts = new Accounts();

    // Instantiate sessions settings
    window.sessions = new Sessions();

    // Instantiate power settings
    window.power = new Power();

    // Instantiate sidebar
    window.sidebar = new Sidebar();

    // Instantiate main screen buttons
    window.mainScreenButtons = new MainScreenButtons();

    // Instantiate date time
    window.dateTime = new DateTime();

    // Instantiate backgrounds settings
    window.backgrounds = new Backgrounds();
    await backgrounds._init();

    // Instantiate sidebar navigation
    window.sidebarNavigate = new SidebarNavigate();

    // Instantiate key binds
    window.keyBinds = new KeyBinds();

    // Instantiate themes
    window.themes = new Themes();

    // Instantiate key events
    window.keyEvents = new KeyEvents();

    // Instantiate swipe event callbacks
    window.swipeEventCallback = new SwipeEventCallback();

    // Instantiate authentication
    window.authenticate = new Authenticate();

}

window.addEventListener("GreeterReady", initGreeter)

const greeterReady = new Event("GreeterReady");

setTimeout(() => {
    if (!("lightdm" in window)) {
        debug = new Debug();
    }

    window.dispatchEvent(greeterReady);
}, 1000)
