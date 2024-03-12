// Sample data (you can replace this with your actual data)
let i = 1;
const data = [
 // add data here
[i++, "AartiVishwakarma", "97875088", "./First Batch/AartiVishwakarma 97875088/1.bmp", "./First Batch/AartiVishwakarma 97875088/2.bmp", "./First Batch/AartiVishwakarma 97875088/3.bmp", "./First Batch/AartiVishwakarma 97875088/4.bmp", "./First Batch/AartiVishwakarma 97875088/5.bmp"],
  [i++, "AmanGond", "04858754", "./First Batch/AmanGond 04858754/1.bmp", "./First Batch/AmanGond 04858754/2.bmp", "./First Batch/AmanGond 04858754/3.bmp", "./First Batch/AmanGond 04858754/4.bmp", "./First Batch/AmanGond 04858754/5.bmp"],
  [i++, "AmitYadav", "43212319", "./First Batch/AmitYadav 43212319/1.bmp", "./First Batch/AmitYadav 43212319/2.bmp", "./First Batch/AmitYadav 43212319/3.bmp", "./First Batch/AmitYadav 43212319/4.bmp", "./First Batch/AmitYadav 43212319/5.bmp"],
  [i++, "Anchal", "68939660", "./First Batch/Anchal 68939660/1.bmp", "./First Batch/Anchal 68939660/2.bmp", "./First Batch/Anchal 68939660/3.bmp", "./First Batch/Anchal 68939660/4.bmp", "./First Batch/Anchal 68939660/5.bmp"],
  [i++, "AnchalMaurya", "61766482", "./First Batch/AnchalMaurya 61766482/1.bmp", "./First Batch/AnchalMaurya 61766482/2.bmp", "./First Batch/AnchalMaurya 61766482/3.bmp", "./First Batch/AnchalMaurya 61766482/4.bmp", "./First Batch/AnchalMaurya 61766482/5.bmp"],
  [i++, "AnjaliGaud", "03453396", "./First Batch/AnjaliGaud 03453396/1.bmp", "./First Batch/AnjaliGaud 03453396/2.bmp", "./First Batch/AnjaliGaud 03453396/3.bmp", "./First Batch/AnjaliGaud 03453396/4.bmp", "./First Batch/AnjaliGaud 03453396/5.bmp"],
  [i++, "AnjaliPatwa", "40936625", "./First Batch/AnjaliPatwa 40936625/1.bmp", "./First Batch/AnjaliPatwa 40936625/2.bmp", "./First Batch/AnjaliPatwa 40936625/3.bmp", "./First Batch/AnjaliPatwa 40936625/4.bmp", "./First Batch/AnjaliPatwa 40936625/5.bmp"],
  [i++, "AnjaliYadav", "52439389", "./First Batch/AnjaliYadav 52439389/1.bmp", "./First Batch/AnjaliYadav 52439389/2.bmp", "./First Batch/AnjaliYadav 52439389/3.bmp", "./First Batch/AnjaliYadav 52439389/4.bmp", "./First Batch/AnjaliYadav 52439389/5.bmp"],
  [i++, "AnshikaPrajapati", "52857230", "./First Batch/AnshikaPrajapati 52857230/1.bmp", "./First Batch/AnshikaPrajapati 52857230/2.bmp", "./First Batch/AnshikaPrajapati 52857230/3.bmp", "./First Batch/AnshikaPrajapati 52857230/4.bmp", "./First Batch/AnshikaPrajapati 52857230/5.bmp"],
  [i++, "ArjunPrajapati", "72946965", "./First Batch/ArjunPrajapati 72946965/1.bmp", "./First Batch/ArjunPrajapati 72946965/2.bmp", "./First Batch/ArjunPrajapati 72946965/3.bmp", "./First Batch/ArjunPrajapati 72946965/4.bmp", "./First Batch/ArjunPrajapati 72946965/5.bmp"],
  [i++, "ChandaniChaudhari", "40249372", "./First Batch/ChandaniChaudhari 40249372/1.bmp", "./First Batch/ChandaniChaudhari 40249372/2.bmp", "./First Batch/ChandaniChaudhari 40249372/3.bmp", "./First Batch/ChandaniChaudhari 40249372/4.bmp", "./First Batch/ChandaniChaudhari 40249372/5.bmp"],
  [i++, "KajalModanwal", "27940590", "./First Batch/KajalModanwal 27940590/1.bmp", "./First Batch/KajalModanwal 27940590/2.bmp", "./First Batch/KajalModanwal 27940590/3.bmp", "./First Batch/KajalModanwal 27940590/4.bmp", "./First Batch/KajalModanwal 27940590/5.bmp"],
  [i++, "KamalVishwakarma", "35266089", "./First Batch/KamalVishwakarma 35266089/1.bmp", "./First Batch/KamalVishwakarma 35266089/2.bmp", "./First Batch/KamalVishwakarma 35266089/3.bmp", "./First Batch/KamalVishwakarma 35266089/4.bmp", "./First Batch/KamalVishwakarma 35266089/5.bmp"],
  [i++, "KarishmaChaudhari", "85298021", "./First Batch/KarishmaChaudhari 85298021/1.bmp", "./First Batch/KarishmaChaudhari 85298021/2.bmp", "./First Batch/KarishmaChaudhari 85298021/3.bmp", "./First Batch/KarishmaChaudhari 85298021/4.bmp", "./First Batch/KarishmaChaudhari 85298021/5.bmp"],
  [i++, "KhushabuYadav", "25391081", "./First Batch/KhushabuYadav 25391081/1.bmp", "./First Batch/KhushabuYadav 25391081/2.bmp", "./First Batch/KhushabuYadav 25391081/3.bmp", "./First Batch/KhushabuYadav 25391081/4.bmp", "./First Batch/KhushabuYadav 25391081/5.bmp"],
  [i++, "KishanKumar", "06325911", "./First Batch/KishanKumar 06325911/1.bmp", "./First Batch/KishanKumar 06325911/2.bmp", "./First Batch/KishanKumar 06325911/3.bmp", "./First Batch/KishanKumar 06325911/4.bmp", "./First Batch/KishanKumar 06325911/5.bmp"],
  [i++, "MithileshKumarChaudhary", "95761762", "./First Batch/MithileshKumarChaudhary 95761762/1.bmp", "./First Batch/MithileshKumarChaudhary 95761762/2.bmp", "./First Batch/MithileshKumarChaudhary 95761762/3.bmp", "./First Batch/MithileshKumarChaudhary 95761762/4.bmp", "./First Batch/MithileshKumarChaudhary 95761762/5.bmp"],
  [i++, "PoojaPal", "79568827", "./First Batch/PoojaPal 79568827/1.bmp", "./First Batch/PoojaPal 79568827/2.bmp", "./First Batch/PoojaPal 79568827/3.bmp", "./First Batch/PoojaPal 79568827/4.bmp", "./First Batch/PoojaPal 79568827/5.bmp"],
  [i++, "Pramila", "97534089", "./First Batch/Pramila 97534089/1.bmp", "./First Batch/Pramila 97534089/2.bmp", "./First Batch/Pramila 97534089/3.bmp", "./First Batch/Pramila 97534089/4.bmp", "./First Batch/Pramila 97534089/5.bmp"],
  [i++, "PriyaYadav", "24314597", "./First Batch/PriyaYadav 24314597/1.bmp", "./First Batch/PriyaYadav 24314597/2.bmp", "./First Batch/PriyaYadav 24314597/3.bmp", "./First Batch/PriyaYadav 24314597/4.bmp", "./First Batch/PriyaYadav 24314597/5.bmp"],
  [i++, "RanjanaBind", "84640689", "./First Batch/RanjanaBind 84640689/1.bmp", "./First Batch/RanjanaBind 84640689/2.bmp", "./First Batch/RanjanaBind 84640689/3.bmp", "./First Batch/RanjanaBind 84640689/4.bmp", "./First Batch/RanjanaBind 84640689/5.bmp"],
  [i++, "RanjeetPrajapati", "46740545", "./First Batch/RanjeetPrajapati 46740545/1.bmp", "./First Batch/RanjeetPrajapati 46740545/2.bmp", "./First Batch/RanjeetPrajapati 46740545/3.bmp", "./First Batch/RanjeetPrajapati 46740545/4.bmp", "./First Batch/RanjeetPrajapati 46740545/5.bmp"],
  [i++, "RinkiGupta", "79693168", "./First Batch/RinkiGupta 79693168/1.bmp", "./First Batch/RinkiGupta 79693168/2.bmp", "./First Batch/RinkiGupta 79693168/3.bmp", "./First Batch/RinkiGupta 79693168/4.bmp", "./First Batch/RinkiGupta 79693168/5.bmp"],
  [i++, "SaloniPandey", "99916004", "./First Batch/SaloniPandey 99916004/1.bmp", "./First Batch/SaloniPandey 99916004/2.bmp", "./First Batch/SaloniPandey 99916004/3.bmp", "./First Batch/SaloniPandey 99916004/4.bmp", "./First Batch/SaloniPandey 99916004/5.bmp"],
  [i++, "Reshamabind", "83451599", "./First Batch/Reshamabind 83451599/1.bmp", "./First Batch/Reshamabind 83451599/2.bmp", "./First Batch/Reshamabind 83451599/3.bmp", "./First Batch/Reshamabind 83451599/4.bmp", "./First Batch/Reshamabind 83451599/5.bmp"],
  [i++, "RinkeeBind", "54393556", "./First Batch/RinkeeBind 54393556/1.bmp", "./First Batch/RinkeeBind 54393556/2.bmp", "./First Batch/RinkeeBind 54393556/3.bmp", "./First Batch/RinkeeBind 54393556/4.bmp", "./First Batch/RinkeeBind 54393556/5.bmp"],
  [i++, "Satendramaurya", "80324829", "./First Batch/Satendramaurya 80324829/1.bmp", "./First Batch/Satendramaurya 80324829/2.bmp", "./First Batch/Satendramaurya 80324829/3.bmp", "./First Batch/Satendramaurya 80324829/4.bmp", "./First Batch/Satendramaurya 80324829/5.bmp"],
  [i++, "Sonali", "39903400", "./First Batch/Sonali 39903400/1.bmp", "./First Batch/Sonali 39903400/2.bmp", "./First Batch/Sonali 39903400/3.bmp", "./First Batch/Sonali 39903400/4.bmp", "./First Batch/Sonali 39903400/5.bmp"],
  [i++, "SunandaBind", "04907329", "./First Batch/SunandaBind 04907329/1.bmp", "./First Batch/SunandaBind 04907329/2.bmp", "./First Batch/SunandaBind 04907329/3.bmp", "./First Batch/SunandaBind 04907329/4.bmp", "./First Batch/SunandaBind 04907329/5.bmp"],
  [i++, "VishakhaYadav", "40467830", "./First Batch/VishakhaYadav 40467830/1.bmp", "./First Batch/VishakhaYadav 40467830/2.bmp", "./First Batch/VishakhaYadav 40467830/3.bmp", "./First Batch/VishakhaYadav 40467830/4.bmp", "./First Batch/VishakhaYadav 40467830/5.bmp"]


         // 1-30 are done....
// adding more rows..

];


let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toString().toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 3 && index <= 7) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = 'invert(100%)'; // Color invert
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
