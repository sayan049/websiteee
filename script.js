import { FaSearch } from 'react-icons/fa'

<FaSearch />

  function search() {
   
    var searchInput = document.getElementById("searchInput").value;


  }
  const dropdown = document.querySelector('#language-dropdown');

  dropdown.addEventListener('change', (event) => {
    const language = event.target.value;
    console.log(`Selected language: ${language}`);
  });
