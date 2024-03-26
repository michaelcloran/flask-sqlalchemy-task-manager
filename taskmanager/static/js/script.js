document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    //modal
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);

    //datepicker
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: { done: "Select" }
    });

    //select initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    //collapaseable
    let collapsibles  = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });



