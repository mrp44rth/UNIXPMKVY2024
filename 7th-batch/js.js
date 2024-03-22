// Sample data (you can replace this with your actual data)
let i = 1;
const data = [
 // add data here
 [i++, "Akanksha Prajapati", "83100804", "./7th batch/Akanksha Prajapati_83100804/1.bmp", "./7th batch/Akanksha Prajapati_83100804/2.bmp", "./7th batch/Akanksha Prajapati_83100804/3.bmp", "./7th batch/Akanksha Prajapati_83100804/4.bmp", "./7th batch/Akanksha Prajapati_83100804/5.bmp"],
  [i++, "Suraj Kumar Maurya", "43367486", "./7th batch/Suraj Kumar Maurya_43367486/1.bmp", "./7th batch/Suraj Kumar Maurya_43367486/2.bmp", "./7th batch/Suraj Kumar Maurya_43367486/3.bmp", "./7th batch/Suraj Kumar Maurya_43367486/4.bmp", "./7th batch/Suraj Kumar Maurya_43367486/5.bmp"],
  [i++, "Aman Maurya", "64718924", "./7th batch/Aman Maurya_64718924/1.bmp", "./7th batch/Aman Maurya_64718924/2.bmp", "./7th batch/Aman Maurya_64718924/3.bmp", "./7th batch/Aman Maurya_64718924/4.bmp", "./7th batch/Aman Maurya_64718924/5.bmp"],
  [i++, "Suraj Prajapati", "17657878", "./7th batch/Suraj Prajapati_17657878/1.bmp", "./7th batch/Suraj Prajapati_17657878/2.bmp", "./7th batch/Suraj Prajapati_17657878/3.bmp", "./7th batch/Suraj Prajapati_17657878/4.bmp", "./7th batch/Suraj Prajapati_17657878/5.bmp"],
  [i++, "Anchal Maurya", "99176308", "./7th batch/Anchal Maurya_99176308/1.bmp", "./7th batch/Anchal Maurya_99176308/2.bmp", "./7th batch/Anchal Maurya_99176308/3.bmp", "./7th batch/Anchal Maurya_99176308/4.bmp", "./7th batch/Anchal Maurya_99176308/5.bmp"],
  [i++, "Swati", "98491110", "./7th batch/Swati_98491110/1.bmp", "./7th batch/Swati_98491110/2.bmp", "./7th batch/Swati_98491110/3.bmp", "./7th batch/Swati_98491110/4.bmp", "./7th batch/Swati_98491110/5.bmp"],
  [i++, "Anju", "17354776", "./7th batch/Anju_17354776/1.bmp", "./7th batch/Anju_17354776/2.bmp", "./7th batch/Anju_17354776/3.bmp", "./7th batch/Anju_17354776/4.bmp", "./7th batch/Anju_17354776/5.bmp"],
  [i++, "Ujjwal Gautam", "90706427", "./7th batch/Ujjwal Gautam_90706427/1.bmp", "./7th batch/Ujjwal Gautam_90706427/2.bmp", "./7th batch/Ujjwal Gautam_90706427/3.bmp", "./7th batch/Ujjwal Gautam_90706427/4.bmp", "./7th batch/Ujjwal Gautam_90706427/5.bmp"],
  [i++, "Anshika Yadav", "76552982", "./7th batch/Anshika Yadav_76552982/1.bmp", "./7th batch/Anshika Yadav_76552982/2.bmp", "./7th batch/Anshika Yadav_76552982/3.bmp", "./7th batch/Anshika Yadav_76552982/4.bmp", "./7th batch/Anshika Yadav_76552982/5.bmp"],
  [i++, "Vandana Bharti", "20021678", "./7th batch/Vandana Bharti_20021678/1.bmp", "./7th batch/Vandana Bharti_20021678/2.bmp", "./7th batch/Vandana Bharti_20021678/3.bmp", "./7th batch/Vandana Bharti_20021678/4.bmp", "./7th batch/Vandana Bharti_20021678/5.bmp"],
  [i++, "Asatitv Saini", "91472965", "./7th batch/Asatitv Saini_91472965/1.bmp", "./7th batch/Asatitv Saini_91472965/2.bmp", "./7th batch/Asatitv Saini_91472965/3.bmp", "./7th batch/Asatitv Saini_91472965/4.bmp", "./7th batch/Asatitv Saini_91472965/5.bmp"],
  [i++, "Chandani sahu", "41465814", "./7th batch/Chandani sahu_41465814/1.bmp", "./7th batch/Chandani sahu_41465814/2.bmp", "./7th batch/Chandani sahu_41465814/3.bmp", "./7th batch/Chandani sahu_41465814/4.bmp", "./7th batch/Chandani sahu_41465814/5.bmp"],
  [i++, "Jyoti Jaiswar", "72652596", "./7th batch/Jyoti Jaiswar_72652596/1.bmp", "./7th batch/Jyoti Jaiswar_72652596/2.bmp", "./7th batch/Jyoti Jaiswar_72652596/3.bmp", "./7th batch/Jyoti Jaiswar_72652596/4.bmp", "./7th batch/Jyoti Jaiswar_72652596/5.bmp"],
  [i++, "Kareena Rammilan Maurya", "63223843", "./7th batch/Kareena Rammilan Maurya_63223843/1.bmp", "./7th batch/Kareena Rammilan Maurya_63223843/2.bmp", "./7th batch/Kareena Rammilan Maurya_63223843/3.bmp", "./7th batch/Kareena Rammilan Maurya_63223843/4.bmp", "./7th batch/Kareena Rammilan Maurya_63223843/5.bmp"],
  [i++, "Khushi Maurya", "50506557", "./7th batch/Khushi Maurya_50506557/1.bmp", "./7th batch/Khushi Maurya_50506557/2.bmp", "./7th batch/Khushi Maurya_50506557/3.bmp", "./7th batch/Khushi Maurya_50506557/4.bmp", "./7th batch/Khushi Maurya_50506557/5.bmp"],
  [i++, "Km Chanda Gautam", "16029076", "./7th batch/Km Chanda Gautam_16029076/1.bmp", "./7th batch/Km Chanda Gautam_16029076/2.bmp", "./7th batch/Km Chanda Gautam_16029076/3.bmp", "./7th batch/Km Chanda Gautam_16029076/4.bmp", "./7th batch/Km Chanda Gautam_16029076/5.bmp"],
[i++, "Km.Sandhya", "09069203", "./7th batch/Km.Sandhya_09069203/1.bmp", "./7th batch/Km.Sandhya_09069203/2.bmp", "./7th batch/Km.Sandhya_09069203/3.bmp", "./7th batch/Km.Sandhya_09069203/4.bmp", "./7th batch/Km.Sandhya_09069203/5.bmp"],
  [i++, "Kunika", "25419670", "./7th batch/Kunika_25419670/1.bmp", "./7th batch/Kunika_25419670/2.bmp", "./7th batch/Kunika_25419670/3.bmp", "./7th batch/Kunika_25419670/4.bmp", "./7th batch/Kunika_25419670/5.bmp"],
  [i++, "Mamta", "65375288", "./7th batch/Mamta_65375288/1.bmp", "./7th batch/Mamta_65375288/2.bmp", "./7th batch/Mamta_65375288/3.bmp", "./7th batch/Mamta_65375288/4.bmp", "./7th batch/Mamta_65375288/5.bmp"],
  [i++, "Mukesh Yadav", "67976843", "./7th batch/Mukesh Yadav_67976843/1.bmp", "./7th batch/Mukesh Yadav_67976843/2.bmp", "./7th batch/Mukesh Yadav_67976843/3.bmp", "./7th batch/Mukesh Yadav_67976843/4.bmp", "./7th batch/Mukesh Yadav_67976843/5.bmp"],
  [i++, "Neelam", "20086765", "./7th batch/Neelam_20086765/1.bmp", "./7th batch/Neelam_20086765/2.bmp", "./7th batch/Neelam_20086765/3.bmp", "./7th batch/Neelam_20086765/4.bmp", "./7th batch/Neelam_20086765/5.bmp"],
  [i++, "Prashant Srivastav", "94526799", "./7th batch/Prashant Srivastav_94526799/1.bmp", "./7th batch/Prashant Srivastav_94526799/2.bmp", "./7th batch/Prashant Srivastav_94526799/3.bmp", "./7th batch/Prashant Srivastav_94526799/4.bmp", "./7th batch/Prashant Srivastav_94526799/5.bmp"],
  [i++, "Priya Goaud", "80472257", "./7th batch/Priya Goaud_80472257/1.bmp", "./7th batch/Priya Goaud_80472257/2.bmp", "./7th batch/Priya Goaud_80472257/3.bmp", "./7th batch/Priya Goaud_80472257/4.bmp", "./7th batch/Priya Goaud_80472257/5.bmp"],
  [i++, "Priyanka Gautam", "01087091", "./7th batch/Priyanka Gautam_01087091/1.bmp", "./7th batch/Priyanka Gautam_01087091/2.bmp", "./7th batch/Priyanka Gautam_01087091/3.bmp", "./7th batch/Priyanka Gautam_01087091/4.bmp", "./7th batch/Priyanka Gautam_01087091/5.bmp"],
  [i++, "Rupali Kashyap", "78398555", "./7th batch/Rupali Kashyap_78398555/1.bmp", "./7th batch/Rupali Kashyap_78398555/2.bmp", "./7th batch/Rupali Kashyap_78398555/3.bmp", "./7th batch/Rupali Kashyap_78398555/4.bmp", "./7th batch/Rupali Kashyap_78398555/5.bmp"],
  [i++, "Sankalp Singh", "73007936", "./7th batch/Sankalp Singh_73007936/1.bmp", "./7th batch/Sankalp Singh_73007936/2.bmp", "./7th batch/Sankalp Singh_73007936/3.bmp", "./7th batch/Sankalp Singh_73007936/4.bmp", "./7th batch/Sankalp Singh_73007936/5.bmp"],
  [i++, "Simran Salmani", "43204777", "./7th batch/Simran Salmani_43204777/1.bmp", "./7th batch/Simran Salmani_43204777/2.bmp", "./7th batch/Simran Salmani_43204777/3.bmp", "./7th batch/Simran Salmani_43204777/4.bmp", "./7th batch/Simran Salmani_43204777/5.bmp"],
  [i++, "Soni Gautam", "11232917", "./7th batch/Soni Gautam_11232917/1.bmp", "./7th batch/Soni Gautam_11232917/2.bmp", "./7th batch/Soni Gautam_11232917/3.bmp", "./7th batch/Soni Gautam_11232917/4.bmp", "./7th batch/Soni Gautam_11232917/5.bmp"],
  [i++, "Sriyansh Srivastav", "85414467", "./7th batch/Sriyansh Srivastav_85414467/1.bmp", "./7th batch/Sriyansh Srivastav_85414467/2.bmp", "./7th batch/Sriyansh Srivastav_85414467/3.bmp", "./7th batch/Sriyansh Srivastav_85414467/4.bmp", "./7th batch/Sriyansh Srivastav_85414467/5.bmp"],
  [i++, "Suman Pal", "56254493", "./7th batch/Suman Pal_56254493/1.bmp", "./7th batch/Suman Pal_56254493/2.bmp", "./7th batch/Suman Pal_56254493/3.bmp", "./7th batch/Suman Pal_56254493/4.bmp", "./7th batch/Suman Pal_56254493/5.bmp"]


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
