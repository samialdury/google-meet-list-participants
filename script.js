names = [];
temp = [];
final = [];
output = '';

try {
  document.querySelectorAll('.ggUFBf')[1].childNodes[1].childNodes.forEach( function (e) {
    names.push(e.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML);
  });
// If sidebar isn't open, click the icon to open it
} catch {
  document.querySelectorAll('span.azXnTb')[0].click()
  document.querySelectorAll('.ggUFBf')[1].childNodes[1].childNodes.forEach( function (e) {
    names.push(e.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML);
  });
}

// Remove duplicates and split them on space
[...new Set(names)].forEach(function (v) {
  temp.push(v.split(' '));
});

// Sort by last name alphabetically
temp.sort(function (a, b) {
  return a[0]-b[0];
});

// Join name back together
temp.forEach(function (e) {
  final.push(e.join(' '));
});

// Split users by new line
output = final.join('\n');

// Prompt with output
window.prompt('Ctrl+C (or Cmd+C) + Enter to copy the list and close this window!\n\nhttps://github.com/samialdury/google-meet-list-participants\n\nOutput is copied with new lines.', output);

// Delete declared variables so we can run the script again without reloading the page
delete names;
delete temp;
delete final;
delete output;
