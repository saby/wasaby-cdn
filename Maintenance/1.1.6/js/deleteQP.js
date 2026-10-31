(function deleteQP(p) {
    if (typeof URL === "undefined") {
        return;
    }
    var url = new URL(window.location.href);
    if (!url.searchParams.has(param)) {
        return;
    }
    url.searchParams.delete(p);
    window.history.replaceState(undefined, "", url);
})("showParkingPage");
