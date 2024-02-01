<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Plain HTML Dropdown</title>
</head>
<body>

<div>
  <select id="dropdown">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </select>
  <p id="selectedValue">Selected: Option 1</p>
</div>

<script>
  // JavaScript for DOM manipulation
  document.getElementById('dropdown').addEventListener('change', function(event) {
    const selectedValue = event.target.value;
    document.getElementById('selectedValue').textContent = 'Selected: ' + selectedValue;
  });
</script>

</body>
</html>
