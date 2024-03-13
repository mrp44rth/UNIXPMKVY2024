// Sample data (you can replace this with your actual data)
let i = 1;
const data = [
 // add data here
[i++, "Aastha Singh", "24730400", "./Third Batch/AasthaSingh 24730400/1.bmp", "./Third Batch/AasthaSingh 24730400/2.bmp", "./Third Batch/AasthaSingh 24730400/3.bmp", "./Third Batch/AasthaSingh 24730400/4.bmp", "./Third Batch/AasthaSingh 24730400/5.bmp"],
[i++, "Alok Maurya", "79456555", "./Third Batch/AlokMaurya 79456555/1.bmp", "./Third Batch/AlokMaurya 79456555/2.bmp", "./Third Batch/AlokMaurya 79456555/3.bmp", "./Third Batch/AlokMaurya 79456555/4.bmp", "./Third Batch/AlokMaurya 79456555/5.bmp"],
[i++, "Ashutosh Yadav", "27614315", "./Third Batch/AshutoshYadav 27614315/1.bmp", "./Third Batch/AshutoshYadav 27614315/2.bmp", "./Third Batch/AshutoshYadav 27614315/3.bmp", "./Third Batch/AshutoshYadav 27614315/4.bmp", "./Third Batch/AshutoshYadav 27614315/5.bmp"],
[i++, "Badal yadav", "21906790", "./Third Batch/Badalyadav 21906790/1.bmp", "./Third Batch/Badalyadav 21906790/2.bmp", "./Third Batch/Badalyadav 21906790/3.bmp", "./Third Batch/Badalyadav 21906790/4.bmp", "./Third Batch/Badalyadav 21906790/5.bmp"],
[i++, "Barkha Gupta", "53567732", "./Third Batch/BarkhaGupta 53567732/1.bmp", "./Third Batch/BarkhaGupta 53567732/2.bmp", "./Third Batch/BarkhaGupta 53567732/3.bmp", "./Third Batch/BarkhaGupta 53567732/4.bmp", "./Third Batch/BarkhaGupta 53567732/5.bmp"],
[i++, "Dheeraj Prajapati", "82242846", "./Third Batch/DheerajPrajapati 82242846/1.bmp", "./Third Batch/DheerajPrajapati 82242846/2.bmp", "./Third Batch/DheerajPrajapati 82242846/3.bmp", "./Third Batch/DheerajPrajapati 82242846/4.bmp", "./Third Batch/DheerajPrajapati 82242846/5.bmp"],
[i++, "Karishma Pal", "89101831", "./Third Batch/KarishmaPal 89101831/1.bmp", "./Third Batch/KarishmaPal 89101831/2.bmp", "./Third Batch/KarishmaPal 89101831/3.bmp", "./Third Batch/KarishmaPal 89101831/4.bmp", "./Third Batch/KarishmaPal 89101831/5.bmp"],
[i++, "Khushbu Bind", "68373405", "./Third Batch/KhushbuBind 68373405/1.bmp", "./Third Batch/KhushbuBind 68373405/2.bmp", "./Third Batch/KhushbuBind 68373405/3.bmp", "./Third Batch/KhushbuBind 68373405/4.bmp", "./Third Batch/KhushbuBind 68373405/5.bmp"],
[i++, "Khushi Singh", "46793020", "./Third Batch/KhushiSingh 46793020/1.bmp", "./Third Batch/KhushiSingh 46793020/2.bmp", "./Third Batch/KhushiSingh 46793020/3.bmp", "./Third Batch/KhushiSingh 46793020/4.bmp", "./Third Batch/KhushiSingh 46793020/5.bmp"],
[i++, "Km Roshanee Singh", "44407570", "./Third Batch/KmRoshaneeSingh 44407570/1.bmp", "./Third Batch/KmRoshaneeSingh 44407570/2.bmp", "./Third Batch/KmRoshaneeSingh 44407570/3.bmp", "./Third Batch/KmRoshaneeSingh 44407570/4.bmp", "./Third Batch/KmRoshaneeSingh 44407570/5.bmp"],
[i++, "Komal Prajapati", "42786041", "./Third Batch/KomalPrajapati 42786041/1.bmp", "./Third Batch/KomalPrajapati 42786041/2.bmp", "./Third Batch/KomalPrajapati 42786041/3.bmp", "./Third Batch/KomalPrajapati 42786041/4.bmp", "./Third Batch/KomalPrajapati 42786041/5.bmp"],
[i++, "Kush Anand Shreevastav", "57738538", "./Third Batch/KushAnandShreevastav 57738538/1.bmp", "./Third Batch/KushAnandShreevastav 57738538/2.bmp", "./Third Batch/KushAnandShreevastav 57738538/3.bmp", "./Third Batch/KushAnandShreevastav 57738538/4.bmp", "./Third Batch/KushAnandShreevastav 57738538/5.bmp"],
[i++, "Nitesh Prajapati", "42698622", "./Third Batch/NiteshPrajapati 42698622/1.bmp", "./Third Batch/NiteshPrajapati 42698622/2.bmp", "./Third Batch/NiteshPrajapati 42698622/3.bmp", "./Third Batch/NiteshPrajapati 42698622/4.bmp", "./Third Batch/NiteshPrajapati 42698622/5.bmp"],
[i++, "Radhika Gautam", "45321207", "./Third Batch/RadhikaGautam 45321207/1.bmp", "./Third Batch/RadhikaGautam 45321207/2.bmp", "./Third Batch/RadhikaGautam 45321207/3.bmp", "./Third Batch/RadhikaGautam 45321207/4.bmp", "./Third Batch/RadhikaGautam 45321207/5.bmp"],
[i++, "Ragini Yadav", "20435708", "./Third Batch/RaginiYadav 20435708/1.bmp", "./Third Batch/RaginiYadav 20435708/2.bmp", "./Third Batch/RaginiYadav 20435708/3.bmp", "./Third Batch/RaginiYadav 20435708/4.bmp", "./Third Batch/RaginiYadav 20435708/5.bmp"],
[i++, "Roshani Siddharth", "79418325", "./Third Batch/RoshaniSiddharth 79418325/1.bmp", "./Third Batch/RoshaniSiddharth 79418325/2.bmp", "./Third Batch/RoshaniSiddharth 79418325/3.bmp", "./Third Batch/RoshaniSiddharth 79418325/4.bmp", "./Third Batch/RoshaniSiddharth 79418325/5.bmp"],
[i++, "Sangam Pal", "11700340", "./Third Batch/SangamPal 11700340/1.bmp", "./Third Batch/SangamPal 11700340/2.bmp", "./Third Batch/SangamPal 11700340/3.bmp", "./Third Batch/SangamPal 11700340/4.bmp", "./Third Batch/SangamPal 11700340/5.bmp"],
[i++, "Sanjana", "41944873", "./Third Batch/Sanjana 41944873/1.bmp", "./Third Batch/Sanjana 41944873/2.bmp", "./Third Batch/Sanjana 41944873/3.bmp", "./Third Batch/Sanjana 41944873/4.bmp", "./Third Batch/Sanjana 41944873/5.bmp"],
[i++, "Sanjay Kumar", "62011262", "./Third Batch/SanjayKumar 62011262/1.bmp", "./Third Batch/SanjayKumar 62011262/2.bmp", "./Third Batch/SanjayKumar 62011262/3.bmp", "./Third Batch/SanjayKumar 62011262/4.bmp", "./Third Batch/SanjayKumar 62011262/5.bmp"],
[i++, "Saurabh Yadav", "33679615", "./Third Batch/SaurabhYadav 33679615/1.bmp", "./Third Batch/SaurabhYadav 33679615/2.bmp", "./Third Batch/SaurabhYadav 33679615/3.bmp", "./Third Batch/SaurabhYadav 33679615/4.bmp", "./Third Batch/SaurabhYadav 33679615/5.bmp"],
[i++, "Savita Bharti", "08209849", "./Third Batch/SavitaBharti 08209849/1.bmp", "./Third Batch/SavitaBharti 08209849/2.bmp", "./Third Batch/SavitaBharti 08209849/3.bmp", "./Third Batch/SavitaBharti 08209849/4.bmp", "./Third Batch/SavitaBharti 08209849/5.bmp"],
[i++, "Shaloo Gautam", "10661236", "./Third Batch/ShalooGautam 10661236/1.bmp", "./Third Batch/ShalooGautam 10661236/2.bmp", "./Third Batch/ShalooGautam 10661236/3.bmp", "./Third Batch/ShalooGautam 10661236/4.bmp", "./Third Batch/ShalooGautam 10661236/5.bmp"],
[i++, "Shani Sonkar", "91270546", "./Third Batch/ShaniSonkar 91270546/1.bmp", "./Third Batch/ShaniSonkar 91270546/2.bmp", "./Third Batch/ShaniSonkar 91270546/3.bmp", "./Third Batch/ShaniSonkar 91270546/4.bmp", "./Third Batch/ShaniSonkar 91270546/5.bmp"],
[i++, "Sudheer Kannaujiya", "08461095", "./Third Batch/SudheerKannaujiya 08461095/1.bmp", "./Third Batch/SudheerKannaujiya 08461095/2.bmp", "./Third Batch/SudheerKannaujiya 08461095/3.bmp", "./Third Batch/SudheerKannaujiya 08461095/4.bmp", "./Third Batch/SudheerKannaujiya 08461095/5.bmp"],
[i++, "Sundaram Pal", "26975045", "./Third Batch/SundaramPal 26975045/1.bmp", "./Third Batch/SundaramPal 26975045/2.bmp", "./Third Batch/SundaramPal 26975045/3.bmp", "./Third Batch/SundaramPal 26975045/4.bmp", "./Third Batch/SundaramPal 26975045/5.bmp"],
[i++, "Swati Maurya", "48996238", "./Third Batch/SwatiMaurya 48996238/1.bmp", "./Third Batch/SwatiMaurya 48996238/2.bmp", "./Third Batch/SwatiMaurya 48996238/3.bmp", "./Third Batch/SwatiMaurya 48996238/4.bmp", "./Third Batch/SwatiMaurya 48996238/5.bmp"],
[i++, "Ujjawal gupta", "84870047", "./Third Batch/Ujjawalgupta 84870047/1.bmp", "./Third Batch/Ujjawalgupta 84870047/2.bmp", "./Third Batch/Ujjawalgupta 84870047/3.bmp", "./Third Batch/Ujjawalgupta 84870047/4.bmp", "./Third Batch/Ujjawalgupta 84870047/5.bmp"],
[i++, "Vinay Kumar", "00260003", "./Third Batch/VinayKumar 00260003/1.bmp", "./Third Batch/VinayKumar 00260003/2.bmp", "./Third Batch/VinayKumar 00260003/3.bmp", "./Third Batch/VinayKumar 00260003/4.bmp", "./Third Batch/VinayKumar 00260003/5.bmp"],
[i++, "Vivek Kumar Yadav", "19774682", "./Third Batch/VivekKumarYadav 19774682/1.bmp", "./Third Batch/VivekKumarYadav 19774682/2.bmp", "./Third Batch/VivekKumarYadav 19774682/3.bmp", "./Third Batch/VivekKumarYadav 19774682/4.bmp", "./Third Batch/VivekKumarYadav 19774682/5.bmp"],
[i++, "Yasmeen Salmani", "98428756", "./Third Batch/YasmeenSalmani 98428756/1.bmp", "./Third Batch/YasmeenSalmani 98428756/2.bmp", "./Third Batch/YasmeenSalmani 98428756/3.bmp", "./Third Batch/YasmeenSalmani 98428756/4.bmp", "./Third Batch/YasmeenSalmani 98428756/5.bmp"],


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
