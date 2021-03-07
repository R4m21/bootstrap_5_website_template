// toast list script
var toastElList = [].slice.call(document.querySelectorAll('.toast'));
var toastList = toastElList.map(function(toastEl) {
	return new bootstrap.Toast(toastEl);
});
toastList.map((val,ind)=>{
    toastList[ind].show();
});

// tooltip script
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

// scrollspy script
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
	target: '#navbar-example'
});
