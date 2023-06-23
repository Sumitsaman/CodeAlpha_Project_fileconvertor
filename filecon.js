// Execute JavaScript code once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the file input element
    var fileInput = document.getElementById('fileInput');
  
    // Get the format select element
    var formatSelect = document.getElementById('formatSelect');
  
    // Get the result box element
    var resultBox = document.getElementById('resultBox');
  
    // Get the convert button element
    var convertButton = document.getElementById('convertButton');
  
    // Function to handle file conversion
    function convertFile() {
      var selectedFile = fileInput.files[0];
      var selectedFormat = formatSelect.value;
      
      // Perform the conversion logic here (placeholder code)
      // In this example, we simply display the selected format
      resultBox.innerHTML = `Converted to ${selectedFormat.toUpperCase()}`;
    }
  
    // Add a click event listener to the convert button
    convertButton.addEventListener('click', convertFile);
  });
  