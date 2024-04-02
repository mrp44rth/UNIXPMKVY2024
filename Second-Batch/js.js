// Sample data (you can replace this with your actual data)
let i=1;
const data = [
[i++,"AkankshaPandey","45934072","./Second Batch/AkankshaPandey_45934072/1.bmp","./Second Batch/AkankshaPandey_45934072/2.bmp","./Second Batch/AkankshaPandey_45934072/3.bmp","./Second Batch/AkankshaPandey_45934072/4.bmp","./Second Batch/AkankshaPandey_45934072/5.bmp"],
[i++,"Sapanakumari","30875864","./Second Batch/Sapanakumari_30875864/1.bmp","./Second Batch/Sapanakumari_30875864/2.bmp","./Second Batch/Sapanakumari_30875864/3.bmp","./Second Batch/Sapanakumari_30875864/4.bmp","./Second Batch/Sapanakumari_30875864/5.bmp"],
[i++,"AnandKumarGautam","94097425","./Second Batch/AnandKumarGautam_94097425/1.bmp","./Second Batch/AnandKumarGautam_94097425/2.bmp","./Second Batch/AnandKumarGautam_94097425/3.bmp","./Second Batch/AnandKumarGautam_94097425/4.bmp","./Second Batch/AnandKumarGautam_94097425/5.bmp"],
[i++,"SarveshKumar","85560514","./Second Batch/SarveshKumar_85560514/1.bmp","./Second Batch/SarveshKumar_85560514/2.bmp","./Second Batch/SarveshKumar_85560514/3.bmp","./Second Batch/SarveshKumar_85560514/4.bmp","./Second Batch/SarveshKumar_85560514/5.bmp"],
[i++,"ShaktimanSingh","39720773","./Second Batch/ShaktimanSingh_39720773/1.bmp","./Second Batch/ShaktimanSingh_39720773/2.bmp","./Second Batch/ShaktimanSingh_39720773/3.bmp","./Second Batch/ShaktimanSingh_39720773/4.bmp","./Second Batch/ShaktimanSingh_39720773/5.bmp"],
[i++,"Anchal","98945877","./Second Batch/Anchal_98945877/1.bmp","./Second Batch/Anchal_98945877/2.bmp","./Second Batch/Anchal_98945877/3.bmp","./Second Batch/Anchal_98945877/4.bmp","./Second Batch/Anchal_98945877/5.bmp"],
[i++,"AnuragMaurya","09624607","./Second Batch/AnuragMaurya_09624607/1.bmp","./Second Batch/AnuragMaurya_09624607/2.bmp","./Second Batch/AnuragMaurya_09624607/3.bmp","./Second Batch/AnuragMaurya_09624607/4.bmp","./Second Batch/AnuragMaurya_09624607/5.bmp"],
[i++,"SurajMaurya","66349565","./Second Batch/SurajMaurya_66349565/1.bmp","./Second Batch/SurajMaurya_66349565/2.bmp","./Second Batch/SurajMaurya_66349565/3.bmp","./Second Batch/SurajMaurya_66349565/4.bmp","./Second Batch/SurajMaurya_66349565/5.bmp"],
[i++,"ArjunBharti","19600075","./Second Batch/ArjunBharti_19600075/1.bmp","./Second Batch/ArjunBharti_19600075/2.bmp","./Second Batch/ArjunBharti_19600075/3.bmp","./Second Batch/ArjunBharti_19600075/4.bmp","./Second Batch/ArjunBharti_19600075/5.bmp"],
[i++,"Umakant","67066664","./Second Batch/Umakant_67066664/1.bmp","./Second Batch/Umakant_67066664/2.bmp","./Second Batch/Umakant_67066664/3.bmp","./Second Batch/Umakant_67066664/4.bmp","./Second Batch/Umakant_67066664/5.bmp"],
[i++,"ChandanYadav","39538188","./Second Batch/ChandanYadav_39538188/1.bmp","./Second Batch/ChandanYadav_39538188/2.bmp","./Second Batch/ChandanYadav_39538188/3.bmp","./Second Batch/ChandanYadav_39538188/4.bmp","./Second Batch/ChandanYadav_39538188/5.bmp"],
[i++,"ChandaRaniSingh","6486816","./Second Batch/ChandaRaniSingh_6486816/1.bmp","./Second Batch/ChandaRaniSingh_6486816/2.bmp","./Second Batch/ChandaRaniSingh_6486816/3.bmp","./Second Batch/ChandaRaniSingh_6486816/4.bmp","./Second Batch/ChandaRaniSingh_6486816/5.bmp"],
[i++,"Deepak","20816468","./Second Batch/Deepak_20816468/1.bmp","./Second Batch/Deepak_20816468/2.bmp","./Second Batch/Deepak_20816468/3.bmp","./Second Batch/Deepak_20816468/4.bmp","./Second Batch/Deepak_20816468/5.bmp"],
[i++,"DeepShikhaPrajapati","30865851","./Second Batch/DeepShikhaPrajapati_30865851/1.bmp","./Second Batch/DeepShikhaPrajapati_30865851/2.bmp","./Second Batch/DeepShikhaPrajapati_30865851/3.bmp","./Second Batch/DeepShikhaPrajapati_30865851/4.bmp","./Second Batch/DeepShikhaPrajapati_30865851/5.bmp"],
[i++,"DharmendraGupta","56726481","./Second Batch/DharmendraGupta_56726481/1.bmp","./Second Batch/DharmendraGupta_56726481/2.bmp","./Second Batch/DharmendraGupta_56726481/3.bmp","./Second Batch/DharmendraGupta_56726481/4.bmp","./Second Batch/DharmendraGupta_56726481/5.bmp"],
[i++,"DiwakerBharti","71311221","./Second Batch/DiwakerBharti_71311221/1.bmp","./Second Batch/DiwakerBharti_71311221/2.bmp","./Second Batch/DiwakerBharti_71311221/3.bmp","./Second Batch/DiwakerBharti_71311221/4.bmp","./Second Batch/DiwakerBharti_71311221/5.bmp"],
[i++,"JayhindChauhan","44270436","./Second Batch/JayhindChauhan_44270436/1.bmp","./Second Batch/JayhindChauhan_44270436/2.bmp","./Second Batch/JayhindChauhan_44270436/3.bmp","./Second Batch/JayhindChauhan_44270436/4.bmp","./Second Batch/JayhindChauhan_44270436/5.bmp"],
[i++,"KhushabuYadav","23628528","./Second Batch/KhushabuYadav_23628528/1.bmp","./Second Batch/KhushabuYadav_23628528/2.bmp","./Second Batch/KhushabuYadav_23628528/3.bmp","./Second Batch/KhushabuYadav_23628528/4.bmp","./Second Batch/KhushabuYadav_23628528/5.bmp"],
[i++,"Km.VineetaKumari","41952867","./Second Batch/Km.VineetaKumari_41952867/1.bmp","./Second Batch/Km.VineetaKumari_41952867/2.bmp","./Second Batch/Km.VineetaKumari_41952867/3.bmp","./Second Batch/Km.VineetaKumari_41952867/4.bmp","./Second Batch/Km.VineetaKumari_41952867/5.bmp"],
[i++,"KrishnaSahu","50917634","./Second Batch/KrishnaSahu_50917634/1.bmp","./Second Batch/KrishnaSahu_50917634/2.bmp","./Second Batch/KrishnaSahu_50917634/3.bmp","./Second Batch/KrishnaSahu_50917634/4.bmp","./Second Batch/KrishnaSahu_50917634/5.bmp"],
[i++,"NaineshKumarrMaurya","36766581","./Second Batch/NaineshKumarMaurya_36766581/1.bmp","./Second Batch/NaineshKumarMaurya_36766581/2.bmp","./Second Batch/NaineshKumarMaurya_36766581/3.bmp","./Second Batch/NaineshKumarMaurya_36766581/4.bmp","./Second Batch/NaineshKumarMaurya_36766581/5.bmp"],
[i++,"PawanYadav","51984169","./Second Batch/PawanYadav_51984169/1.bmp","./Second Batch/PawanYadav_51984169/2.bmp","./Second Batch/PawanYadav_51984169/3.bmp","./Second Batch/PawanYadav_51984169/4.bmp","./Second Batch/PawanYadav_51984169/5.bmp"],
[i++,"PritiYadav","62491727","./Second Batch/PritiYadav_62491727/1.bmp","./Second Batch/PritiYadav_62491727/2.bmp","./Second Batch/PritiYadav_62491727/3.bmp","./Second Batch/PritiYadav_62491727/4.bmp","./Second Batch/PritiYadav_62491727/5.bmp"],
[i++,"PriyaYadav","25865519","./Second Batch/PriyaYadav_25865519/1.bmp","./Second Batch/PriyaYadav_25865519/2.bmp","./Second Batch/PriyaYadav_25865519/3.bmp","./Second Batch/PriyaYadav_25865519/4.bmp","./Second Batch/PriyaYadav_25865519/5.bmp"],
[i++,"RahulKumarYadav","27331806","./Second Batch/RahulKumarYadav_27331806/1.bmp","./Second Batch/RahulKumarYadav_27331806/2.bmp","./Second Batch/RahulKumarYadav_27331806/3.bmp","./Second Batch/RahulKumarYadav_27331806/4.bmp","./Second Batch/RahulKumarYadav_27331806/5.bmp"],
[i++,"RitikaKumari","37058372","./Second Batch/RitikaKumari_37058372/1.bmp","./Second Batch/RitikaKumari_37058372/2.bmp","./Second Batch/RitikaKumari_37058372/3.bmp","./Second Batch/RitikaKumari_37058372/4.bmp","./Second Batch/RitikaKumari_37058372/5.bmp"],
[i++,"RiyaYadav","99571376","./Second Batch/RiyaYadav_99571376/1.bmp","./Second Batch/RiyaYadav_99571376/2.bmp","./Second Batch/RiyaYadav_99571376/3.bmp","./Second Batch/RiyaYadav_99571376/4.bmp","./Second Batch/RiyaYadav_99571376/5.bmp"],
[i++,"SangitaVishwakarma","69153669","./Second Batch/SangitaVishwakarma_69153669/1.bmp","./Second Batch/SangitaVishwakarma_69153669/2.bmp","./Second Batch/SangitaVishwakarma_69153669/3.bmp","./Second Batch/SangitaVishwakarma_69153669/4.bmp","./Second Batch/SangitaVishwakarma_69153669/5.bmp"],
[i++,"SanjanaBind","1468821","./Second Batch/SanjanaBind_1468821/1.bmp","./Second Batch/SanjanaBind_1468821/2.bmp","./Second Batch/SanjanaBind_1468821/3.bmp","./Second Batch/SanjanaBind_1468821/4.bmp","./Second Batch/SanjanaBind_1468821/5.bmp"],
[i++,"SantoshKumarYadav","61314015","./Second Batch/SantoshKumarYadav_61314015/1.bmp","./Second Batch/SantoshKumarYadav_61314015/2.bmp","./Second Batch/SantoshKumarYadav_61314015/3.bmp","./Second Batch/SantoshKumarYadav_61314015/4.bmp","./Second Batch/SantoshKumarYadav_61314015/5.bmp"]

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
