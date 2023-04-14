const _extensions = ['HMI'];
const _timeout = 1000;
const _contract = {
    methods: {},
    events: [
        'ev_selectElement'
    ],
    properties: {
        'rows': '[]',
        'current': ''
    }
};

var UnifiedInterface = function () {
    var _initialize = function () {
        console.log('Comi-Select: UnifiedInterface initialized');
    };

    var _setProps = function (data) {
        console.log('Comi-Select: Key <', data.key, '>');
        if (WebCC.Properties.hasOwnProperty(data.key)) {
            WebCC.Properties[data.key] = data.value;
        } else {
            console.log('Comi-Select: Unrecognized key <', data.key, '>');
        }
        // refresh select
        selectInit(WebCC.Properties);
    };

    return {
        Local: {
            initialize: _initialize,
            setProps: _setProps
        },
        HostListener: _contract
    };
}();

var unifiedInterfaceInit = function () {
    // Initialize 
    UnifiedInterface.Local.initialize();

    // Subscribe for value changes
    if (WebCC && WebCC.onPropertyChanged) {
        WebCC.onPropertyChanged.subscribe(UnifiedInterface.Local.setProps);
    }

    console.log('Comi-Combobox: properties', WebCC.Properties);
};