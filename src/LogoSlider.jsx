const LogoSlider = () => {
    console.log("rendered");
    return <div className="logo-slider">
        {/* Python */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
        </svg>
        
        {/* Pandas */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M90.248 0v96.555h13.988V0H90.248zM46.236 7.566v29.05h13.989V7.565H46.236zm-22.472 23.88V128h13.988V31.445H23.764zm44.482.034v29.047h13.988V31.48H68.246zm-22.01 13.612v13.705h13.989V45.092H46.236zm0 22.143V96.28h13.989V67.234H46.236zm22.01 1.777v13.705h13.988V69.012H68.246zm0 22.19v29.046h13.988V91.201H68.246z"></path>
        </svg>
        
        {/* JSON */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M45.949 63.71c0 22.998 17.853 30.038 18.223 30.175l.016.005a.823.823 0 0 0-.05.021h-.001v.001h.001c20.306 6.899 40.668-10.261 40.668-41.251 0-17.054-7.595-37.361-27.7-48.894C105.528 10.083 126 34.393 126 63.903c0 35.822-30.182 62.003-61.873 62.003-2.078 0-37.078-10.935-37.216-51.164-.103-30.18 19.208-40.406 32.72-38.442.009.003-13.682 7.806-13.682 27.41z"></path><path fill="#111111" fill-rule="evenodd" d="M82.051 64.29c0-22.998-17.853-30.038-18.223-30.175l-.016-.005a.823.823 0 0 0 .05-.021h.001v-.001h-.001C43.556 27.19 23.193 44.35 23.193 75.34c0 17.054 7.595 37.361 27.7 48.894C22.472 117.917 2 93.607 2 64.097 2 28.275 32.182 2.094 63.873 2.094c2.078 0 37.078 10.935 37.216 51.164.103 30.18-19.207 40.406-32.72 38.443-.009-.004 13.682-7.807 13.682-27.411z" clip-rule="evenodd"></path>
        </svg>

        {/* Java */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"></path>
        </svg>
        
        {/* Android */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M21.005 43.003c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736a7.338 7.338 0 007.342 7.343 7.33 7.33 0 007.338-7.342V50.34a7.345 7.345 0 00-7.346-7.337m59.193-27.602l5.123-9.355a1.023 1.023 0 00-.401-1.388 1.022 1.022 0 00-1.382.407l-5.175 9.453c-4.354-1.938-9.227-3.024-14.383-3.019-5.142-.005-10.013 1.078-14.349 3.005L44.45 5.075a1.01 1.01 0 00-1.378-.406 1.007 1.007 0 00-.404 1.38l5.125 9.349c-10.07 5.193-16.874 15.083-16.868 26.438l66.118-.008c.002-11.351-6.79-21.221-16.845-26.427M48.942 29.858a2.772 2.772 0 01.003-5.545 2.78 2.78 0 012.775 2.774 2.776 2.776 0 01-2.778 2.771m30.106-.005a2.77 2.77 0 01-2.772-2.771 2.793 2.793 0 012.773-2.778 2.79 2.79 0 012.767 2.779 2.767 2.767 0 01-2.768 2.77M31.195 44.39l.011 47.635a7.822 7.822 0 007.832 7.831l5.333.002.006 16.264c-.001 4.05 3.291 7.342 7.335 7.342 4.056 0 7.342-3.295 7.343-7.347l-.004-16.26 9.909-.003.004 16.263c0 4.047 3.293 7.346 7.338 7.338 4.056.003 7.344-3.292 7.343-7.344l-.005-16.259 5.352-.004a7.835 7.835 0 007.836-7.834l-.009-47.635-65.624.011zm83.134 5.943a7.338 7.338 0 00-7.341-7.339c-4.053-.004-7.337 3.287-7.337 7.342l.006 30.738a7.334 7.334 0 007.339 7.339 7.337 7.337 0 007.338-7.343l-.005-30.737z"></path>
        </svg>

        {/* SQL */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M51.395 7.758c-27.396 0-49.604 3.824-49.647 8.54l-.002-.009v27.293c0 4.723 22.227 8.535 49.649 8.535 27.42 0 49.648-3.836 49.648-8.535V16.289l-.002.01c-.043-4.717-22.255-8.541-49.646-8.541zm-17.268 16.57c1.39.09 2.805.169 4.25.236-.574-.026-1.18-.04-1.746-.07-.86-.046-1.665-.112-2.504-.166zm20.453.516c-1.064.012-2.104.037-3.185.037v-.002c-.654 0-1.275-.021-1.922-.025.642.004 1.273.017 1.922.017 1.075 0 2.127-.016 3.185-.027zM1.746 50.562v23.77c0 4.727 22.227 8.535 49.649 8.535 6.502 0 12.672-.228 18.357-.62 4.322-10.913 14.962-18.634 27.412-18.634 1.316 0 2.609.095 3.879.262V50.562c0 4.727-22.228 8.536-49.648 8.536-27.422 0-49.649-3.833-49.649-8.535zM97.164 67.25c-10.278 0-19.151 5.999-23.314 14.686a25.67 25.67 0 0 0-.805 1.884c-.2.522-.392 1.05-.559 1.586v.002a25.753 25.753 0 0 0-.447 1.647c-.03.124-.056.248-.084.373a25.7 25.7 0 0 0-.324 1.676 26.04 26.04 0 0 0-.307 3.986c0 9.287 4.9 17.426 12.254 21.98.485.3.98.584 1.484.852.03.016.062.03.092.047.453.238.917.462 1.385.674.076.034.152.07.229.103 1.001.441 2.036.82 3.1 1.133a25.62 25.62 0 0 0 1.654.426c.092.02.184.044.277.064.536.114 1.08.21 1.629.29l.232.028c.476.065.954.115 1.438.153l.375.03c.56.035 1.122.06 1.691.06a25.78 25.78 0 0 0 14.447-4.412 25.93 25.93 0 0 0 3.825-3.157 25.94 25.94 0 0 0 6.406-10.586 25.654 25.654 0 0 0 1.03-5.043 25.815 25.815 0 0 0 .03-4.877c-.007-.081-.011-.164-.02-.246a25.824 25.824 0 0 0-.347-2.41 25.664 25.664 0 0 0-.447-1.928c-.036-.131-.075-.261-.113-.392a25.648 25.648 0 0 0-.621-1.881c-.035-.091-.073-.18-.108-.271a25.719 25.719 0 0 0-.816-1.89c-.023-.045-.048-.09-.07-.136a25.79 25.79 0 0 0-.989-1.824l-.057-.096a25.85 25.85 0 0 0-1.148-1.736c-.045-.063-.087-.127-.133-.19a25.933 25.933 0 0 0-1.234-1.554c-.077-.09-.156-.179-.235-.268-.43-.49-.879-.966-1.345-1.422-.07-.068-.143-.133-.213-.2a25.986 25.986 0 0 0-1.516-1.347c-.04-.033-.082-.064-.123-.097a25.919 25.919 0 0 0-1.664-1.238c-.027-.019-.053-.039-.08-.057l-.012-.008a25.841 25.841 0 0 0-1.75-1.076c-.074-.042-.147-.087-.222-.129a25.76 25.76 0 0 0-2.094-1.031c-.6-.264-1.213-.507-1.836-.725-.115-.04-.232-.078-.348-.117a25.6 25.6 0 0 0-1.914-.563c-.102-.025-.207-.045-.31-.07a25.664 25.664 0 0 0-2.084-.412l-.01-.002a26.1 26.1 0 0 0-3.879-.289zm-9.102 10.914 24.028 13.871-24.028 13.871V78.164zM1.746 81.316v27.29c0 4.726 22.227 8.535 49.649 8.535 9.98 0 19.136-.536 26.89-1.412-6.478-5.408-10.601-13.541-10.601-22.64a29.6 29.6 0 0 1 .244-3.74 272.19 272.19 0 0 1-16.533.499c-27.422 0-49.649-3.832-49.649-8.532z"></path>
        </svg>

        {/* Gradle */}
        <svg viewBox="0 0 128 128">
            <path d="M103.93 17.205a20.294 20.294 0 00-11.092 5.268 1.98 1.98 0 00-.62 1.39 2.025 2.025 0 00.578 1.405l2.525 2.613a1.936 1.936 0 002.53.182 11.5 11.5 0 016.964-2.321 11.618 11.618 0 018.245 19.847c-16.11 16.112-37.616-29.024-86.423-5.803a6.637 6.637 0 00-2.956 9.291l8.365 14.476a6.637 6.637 0 008.973 2.467l.203-.114-.16.114 3.71-2.082a85.035 85.035 0 0011.676-8.724 2.055 2.055 0 012.675 0 1.892 1.892 0 01.73 1.478 1.951 1.951 0 01-.641 1.479 87.562 87.562 0 01-12.31 9.135h-.12l-3.712 2.071a10.347 10.347 0 01-5.142 1.338 10.672 10.672 0 01-9.209-5.273l-7.912-13.674C5.613 62.5-3.607 83.18 1.345 109.416a1.951 1.951 0 001.895 1.567h9.015a1.922 1.922 0 001.905-1.686 13.2 13.2 0 0126.193 0 1.936 1.936 0 001.916 1.686h8.786a1.922 1.922 0 001.905-1.686 13.214 13.214 0 0126.209 0 1.922 1.922 0 001.905 1.686h8.672a1.922 1.922 0 001.926-1.89c.207-12.223 3.503-26.267 12.904-33.303 32.562-24.359 24.007-45.24 16.469-52.823a20.294 20.294 0 00-17.115-5.762zM84.692 52.866a3.902 3.902 0 013.138 6.965v-.02l-6.21-3.119a3.902 3.902 0 013.072-3.826z" fill="#111111"></path>
        </svg>

        {/* Junit */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M61.352.428C46.685.68 32.734 5.027 20.69 16.162c-26.886 24.866-27.685 67.441-1.717 93.225 4.674 4.64 10.235 8.934 16.343 11.549l.008-.032c34.122 17.719 77.343-1.652 89.553-37.076 10.329-29.957-5.574-72.342-38.803-80.463v-.07C78.754 1.623 71.448.569 64.293.43v.002a81.047 81.047 0 0 0-2.941-.004zM40.48 19.119h45.224v12.002H52.529l-1.724 21.424c7.362-.577 14.188-1.878 21.545-.149 5.043 1.188 9.776 3.57 13.279 7.434 9.775 10.772 7.851 30.993-3.371 40.078-3.158 2.557-6.766 4.237-10.576 5.317-3.518 1.124-7.053 1.602-10.6 1.634a72.97 72.97 0 0 1-3.814.106c-5.524 0-11.05-.718-16.373-2.207-1.354-.38-3.448-.907-4.764-1.893l-.026-.006-.007-.13c-.122-.126-.248-.25-.34-.39-1.707-2.543-.442-9.183-.442-12.204 10.735 1.903 19.48 7.806 30.971 4.377 11.246-3.357 15.933-19.575 6.018-27.252-5.988-4.64-14.87-4.007-21.932-3.156-4.241.512-9.535 2.078-12.463-2.432-1.728-2.655.054-9.172.344-12.176.072-.757.151-1.529.226-2.289.752-9.327 2-18.755 2-28.088z"></path>
        </svg>

        {/* Material UI */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6zM48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"></path><path fill="#111111" d="M48 77.8v18.4l32 18.4V96.2L48 77.8zM80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"></path>
        </svg>

        {/* JavaScript */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
        </svg>
        
        {/* npm */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
        </svg>

        {/* React */}
        <svg viewBox="0 0 128 128">
            <g fill="#111111"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
        </svg>
        
        {/* Redux */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"></path>
        </svg>
        
        {/* HTML */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
        </svg>

        {/* CSS */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
        </svg>
        
        {/* Git */}
        <svg viewBox="0 0 128 128">
            <path fill="#111111" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314a9.66 9.66 0 012.293 9.993L87.42 55.529c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11V47.333c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576L40.983 20.333 3.229 58.123c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z"></path>
        </svg>
    </div>
}
export default LogoSlider;