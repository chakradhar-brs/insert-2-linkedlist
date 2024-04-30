// Function to find the intersection point of two linked lists
function findIntersection() {
    const listAInput = document.getElementById("listA").value.trim();
    const listBInput = document.getElementById("listB").value.trim();
  
    // Parse comma-separated values into arrays
    const arrA = listAInput.split(",").map(Number);
    const arrB = listBInput.split(",").map(Number);
  
    // Find intersection point
    const intersectionPoint = getIntersectionPoint(arrA, arrB);
  
    const intersectionPointDiv = document.getElementById("intersectionPoint");
    if (intersectionPoint !== null) {
        intersectionPointDiv.textContent =
            "Intersection Point Value: " + intersectionPoint;
    } else {
        intersectionPointDiv.textContent = "No intersection found.";
    }
  }
  
  // Function to find the intersection point of two arrays
  function getIntersectionPoint(arrA, arrB) {
    const set = new Set(arrA);
    for (const val of arrB) {
        if (set.has(val)) {
            return val;
        }
    }
    return null; // No intersection found
  }
  
  // Function to clear input fields
  function clearInputFields() {
    document.getElementById('listA').value = '';
    document.getElementById('listB').value = '';
  }
  
  // Add event listener for window.onload event to clear input fields
  window.onload = clearInputFields;
  
  // Add event listener for "keypress" event to input fields
  document.getElementById("listA").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        findIntersection();
    }
  });
  
  document.getElementById("listB").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        findIntersection();
    }
  });
  
  // Add event listener for button click
  document.getElementById("findIntersectionButton").addEventListener("click", findIntersection);