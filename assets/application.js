// Put your application javascript here

// sort products
if(document.getElementById('sort_by') != null) {
    document.querySelector('#sort_by').addEventListener('change', function(e) {
        // get current url
        var url = new URL(window.location.href);
        // add ?sort_by=[value of selected] to the url
        url.searchParams.set('sort_by', e.currentTarget.value);
        window.location = url.href;
    });
}
