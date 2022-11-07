jQuery(document).ready(function ($) {
  $("#example").DataTable({
    pageSize: 2,
    language: {
      lengthMenu: " Show _MENU_ entries",
      search: "Search :",
      paginate: {
        next: "Next",
        previous: "Previous",
      },
    },
  });
});
