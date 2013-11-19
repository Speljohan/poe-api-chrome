chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {

        var xhr = new XMLHttpRequest();

        if (request.type == 'stash') {

            var league = request.league;
            var tabIndex = request.tabIndex;
            var tabs = request.tabs;

            xhr.open("GET", "http://www.pathofexile.com/character-window/get-stash-items/?league=" + league + "&tabs=" + tabs + "&tabIndex=" + tabIndex, false);
        } else if (request.type == 'character') {

            var character = request.character;

            xhr.open("GET", "http://www.pathofexile.com/character-window/get-items?character=" + character, false);
        }
        xhr.send(null);

        if(xhr.status == 200) {
            sendResponse(xhr.responseText);
        } else {
            sendResponse({fail: xhr.status});
        }
    }
);