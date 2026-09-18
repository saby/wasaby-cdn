(function deleteQP(p) {
    if (typeof URL === "undefined") {
        return;
    }
    var url = new URL(window.location.href);
    if (!url.searchParams.has(p)) {
        return;
    }
    url.searchParams.delete(p);
    window.history.replaceState(undefined, "", url);
})("showParkingPage");
