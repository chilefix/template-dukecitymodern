// Open/closed status indicator
(function() {
  var el = document.getElementById("hours-data");
  if (!el) return;
  try {
    var hours = JSON.parse(el.textContent);
    // TODO: implement open/closed badge logic
  } catch(e) {}
})();
