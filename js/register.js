document.getElementById('registerForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Build the request body
  const userData = JSON.stringify({
    name: name,
    email: email,
    password: password,
    bio: "This is my profile bio", // Optional
    avatar: {
      url: "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg", // Optional
      alt: "My avatar alt text" // Optional
    },
    banner: {
      url: "https://publish.nstu.ru/bitrix/templates/aspro-scorp/images/small-banners-background.png", // Optional
      alt: "My banner alt text" // Optional
    },
    venueManager: true // Optional
  });

  // Define headers
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Prepare fetch options
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: userData,
    redirect: 'follow'
  };

  try {
    // Make the API request
    const response = await fetch("https://v2.api.noroff.dev/auth/register", requestOptions);
    
    if (response.ok) {
      const result = await response.json();
      console.log('Registration successful:', result);
    } else {
      const errorData = await response.text();
      console.error('Registration failed:', errorData); // Log detailed error response
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
